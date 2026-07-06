/**
 * Adams County, Colorado — public assessor/permit data.
 *
 * Source: Adams County's own hosted ArcGIS Online feature services
 * (owner: AdamsCO_GIS), the same public GIS data backing their own
 * "Eye on Adams" and property look-up tools. This is a government open-data
 * API meant for public consumption, not a scrape of a private site — no
 * ToS or robots concern the way scraping Zillow/Redfin would raise.
 *
 * Coverage: Adams County, CO only (Thornton, Brighton, Commerce City,
 * Northglenn, Federal Heights, and unincorporated Adams County). Other
 * counties/states return null until a similar adapter exists for them.
 */

const BASE = 'https://services3.arcgis.com/4PNQOtAivErR7nbT/arcgis/rest/services';

interface ArcGisFeature {
  attributes: Record<string, string | number | null>;
}

async function arcgisQuery(layerUrl: string, where: string, outFields: string) {
  const url = `${layerUrl}/query?where=${encodeURIComponent(where)}&outFields=${encodeURIComponent(outFields)}&f=json&resultRecordCount=50`;
  const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
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
  if (s.includes('final')) return 'finaled';
  if (s.includes('issu') || s.includes('open') || s.includes('active') || s.includes('pending')) return 'issued';
  return 'expired';
}

export const ADAMS_COUNTY_SOURCE = 'Adams County, CO (public GIS)';

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

export async function fetchAdamsCountyProperty(streetAddress: string): Promise<CountySyncResult | null> {
  const split = splitStreetAddress(streetAddress);
  if (!split) return null;
  const { houseNumber, streetNameGuess } = split;

  try {
    const parcels = await arcgisQuery(
      `${BASE}/Parcels/FeatureServer/0`,
      `streetno='${houseNumber}' AND UPPER(streetname) LIKE '%${streetNameGuess}%'`,
      'PIN,concataddr1,loccity,loczip'
    );
    if (parcels.length === 0) return null;
    const pin = parcels[0].PIN;

    const [values, permitRows] = await Promise.all([
      arcgisQuery(`${BASE}/Property_Values/FeatureServer/0`, `pin='${pin}'`, 'asdtotalval,lotsize,lotmeasure,datechg').catch(() => []),
      arcgisQuery(
        `${BASE}/Building_Permits_Eye_On_Adams/FeatureServer/0`,
        `HouseNumber=${houseNumber} AND UPPER(StreetName) LIKE '%${streetNameGuess}%'`,
        'RecordID_,TypeOfWork,Description,ApplicationStatus,CaseOpened'
      ).catch(() => []),
    ]);

    const latestValue = [...values].sort((a, b) => Number(b.datechg ?? 0) - Number(a.datechg ?? 0))[0];
    const lotSizeRaw = latestValue?.lotsize ? Number(latestValue.lotsize) : undefined;
    const lotSizeSqft = lotSizeRaw && latestValue?.lotmeasure === 'Acres' ? Math.round(lotSizeRaw * 43560) : lotSizeRaw;

    return {
      parcelNumber: String(pin),
      lotSizeSqft,
      assessedValue: latestValue?.asdtotalval ? Math.round(Number(latestValue.asdtotalval)) : undefined,
      permits: permitRows.map((p) => ({
        permitNumber: p.RecordID_ ? String(p.RecordID_) : undefined,
        permitType: p.TypeOfWork ? String(p.TypeOfWork) : 'Other',
        description: p.Description ? String(p.Description) : undefined,
        status: normalizePermitStatus(p.ApplicationStatus),
        issuedDate: p.CaseOpened ? new Date(Number(p.CaseOpened)) : undefined,
        source: ADAMS_COUNTY_SOURCE,
      })),
    };
  } catch (err) {
    console.error('Adams County GIS sync failed:', err);
    return null;
  }
}
