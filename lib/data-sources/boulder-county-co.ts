/**
 * Boulder County, Colorado — public assessor/permit data.
 *
 * Source: Boulder County's own hosted ArcGIS Server (maps.bouldercounty.org),
 * the same public GIS backing their own property lookup tools. Government
 * open-data API meant for public consumption — same posture as Adams County.
 *
 * Three separate layers, joined by AccountNo/ParcelNo:
 * - PARCELS/PARCELS_OWNER — address -> ParcelNo/AccountNo
 * - CamaView/ParcelValueView — assessed value by tax year
 * - CamaView/ParcelPropertyView — land size
 * - PLANNING/OP_Accela_Point — Accela permit/planning records, filtered to
 *   the Building module (the rest is planning cases, water-quality
 *   certificates, etc. — not construction-relevant)
 *
 * Coverage: Boulder County, CO only (Boulder, Lafayette, Louisville,
 * Longmont-partial, Superior, Nederland, unincorporated county). Other
 * counties/states return null until a similar adapter exists for them.
 */

const BASE = 'https://maps.bouldercounty.org/arcgis/rest/services';

interface ArcGisFeature {
  attributes: Record<string, string | number | null>;
}

async function arcgisQuery(layerUrl: string, where: string, outFields: string, orderByFields?: string) {
  const params = new URLSearchParams({ where, outFields, f: 'json', resultRecordCount: '50' });
  if (orderByFields) params.set('orderByFields', orderByFields);
  const res = await fetch(`${layerUrl}/query?${params.toString()}`, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`ArcGIS query failed: ${res.status}`);
  const json = await res.json();
  if (json.error) throw new Error(json.error.message ?? 'ArcGIS query error');
  return ((json.features ?? []) as ArcGisFeature[]).map((f) => f.attributes);
}

function splitStreetAddress(streetAddress: string) {
  const match = streetAddress.trim().match(/^(\d+)\s+(.+)$/);
  if (!match) return null;
  const houseNumber = match[1];
  const streetNameGuess = match[2].trim().split(/\s+/)[0].toUpperCase().replace(/'/g, "''");
  return { houseNumber, streetNameGuess };
}

function normalizePermitStatus(status: string | number | null) {
  const s = String(status ?? '').toLowerCase();
  if (s.includes('closed') || s.includes('issued') || s.includes('approved')) return 'finaled';
  if (s.includes('held') || s.includes('mapped') || s.includes('pending')) return 'issued';
  return 'issued';
}

export const BOULDER_COUNTY_SOURCE = 'Boulder County, CO (public GIS)';

export interface CountyPermitResult {
  permitNumber?: string;
  permitType: string;
  description?: string;
  status: string;
  issuedDate?: Date;
  source: string;
}

export interface CountySyncResult {
  parcelNumber?: string;
  lotSizeSqft?: number;
  assessedValue?: number;
  permits: CountyPermitResult[];
}

export async function fetchBoulderCountyProperty(streetAddress: string): Promise<CountySyncResult | null> {
  const split = splitStreetAddress(streetAddress);
  if (!split) return null;
  const { houseNumber, streetNameGuess } = split;

  try {
    const parcels = await arcgisQuery(
      `${BASE}/PARCELS/PARCELS_OWNER/FeatureServer/0`,
      `StrNum=${houseNumber} AND UPPER(Street) LIKE '%${streetNameGuess}%'`,
      'ParcelNo,AccountNo,StrNum,Street,StrCity'
    );
    if (parcels.length === 0) return null;
    const { ParcelNo: parcelNo, AccountNo: accountNo } = parcels[0];

    const [values, propertyRows, permitRows] = await Promise.all([
      arcgisQuery(
        `${BASE}/CamaView/ParcelValueView/MapServer/0`,
        `AccountNo='${accountNo}'`,
        'TaxYear,TotalAssessedValue',
        'TaxYear DESC'
      ).catch(() => []),
      arcgisQuery(
        `${BASE}/CamaView/ParcelPropertyView/MapServer/0`,
        `AccountNo='${accountNo}'`,
        'EstLandSqft,EstLandAcres'
      ).catch(() => []),
      arcgisQuery(
        `${BASE}/PLANNING/OP_Accela_Point/MapServer/0`,
        `ParcelNumber='${parcelNo}' AND Module='Building'`,
        'CAPID,Type,Subtype,Description,ApplicationDate,ApplicationStatus'
      ).catch(() => []),
    ]);

    const latestValue = values[0];
    const landRow = propertyRows[0];
    const lotSizeSqft = landRow?.EstLandSqft
      ? Math.round(Number(landRow.EstLandSqft))
      : landRow?.EstLandAcres
        ? Math.round(Number(landRow.EstLandAcres) * 43560)
        : undefined;

    return {
      parcelNumber: parcelNo ? String(parcelNo) : undefined,
      lotSizeSqft,
      assessedValue: latestValue?.TotalAssessedValue ? Math.round(Number(latestValue.TotalAssessedValue)) : undefined,
      permits: permitRows.map((p) => ({
        permitNumber: p.CAPID ? String(p.CAPID) : undefined,
        permitType: p.Type ? String(p.Type) : 'Other',
        description: p.Description ? String(p.Description) : (p.Subtype ? String(p.Subtype) : undefined),
        status: normalizePermitStatus(p.ApplicationStatus),
        issuedDate: p.ApplicationDate ? new Date(Number(p.ApplicationDate)) : undefined,
        source: BOULDER_COUNTY_SOURCE,
      })),
    };
  } catch (err) {
    console.error('Boulder County GIS sync failed:', err);
    return null;
  }
}
