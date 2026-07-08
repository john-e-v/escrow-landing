/**
 * City and County of Denver, Colorado — public assessor/permit data.
 *
 * Source: Denver's own hosted ArcGIS Online org (geospatialDenver /
 * opendata-geospatialdenver.hub.arcgis.com), the same public GIS backing
 * Denver's own open data catalog. Government open-data API meant for public
 * consumption — same posture as Adams and Boulder counties.
 *
 * Two layers, joined by SCHEDNUM (Denver's parcel schedule number):
 * - ODC_PROP_PARCELS_A — address, assessed value, land area, all in one row
 * - ODC_DEV_RESIDENTIALCONSTPERMIT_P — Accela-backed residential permits
 *   (only covers permits issued after June 2015, when Denver went live on
 *   Accela — older permits genuinely aren't in this dataset)
 *
 * Coverage: City and County of Denver only — a consolidated city-county
 * government, so this is the only adapter needed for "Denver" as a
 * jurisdiction. Other counties/states return null until a similar adapter
 * exists for them.
 */

const BASE = 'https://services1.arcgis.com/zdB7qR0BtYrg0Xpl/arcgis/rest/services';

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

function normalizePermitStatus(finalDate: string | number | null, cancel: string | number | null) {
  if (cancel) return 'expired';
  if (finalDate) return 'finaled';
  return 'issued';
}

export const DENVER_SOURCE = 'City and County of Denver, CO (public GIS)';

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

export async function fetchDenverProperty(streetAddress: string): Promise<CountySyncResult | null> {
  const split = splitStreetAddress(streetAddress);
  if (!split) return null;
  const { houseNumber, streetNameGuess } = split;

  try {
    const parcels = await arcgisQuery(
      `${BASE}/ODC_PROP_PARCELS_A/FeatureServer/245`,
      `SITUS_ADDR_NBR='${houseNumber}' AND UPPER(SITUS_STR_NAME) LIKE '%${streetNameGuess}%'`,
      'SCHEDNUM,SITUS_ADDR_NBR,SITUS_STR_NAME,ASSESSED_TOTAL_VALUE_LOCAL,LAND_AREA'
    );
    if (parcels.length === 0) return null;
    const schednum = parcels[0].SCHEDNUM;

    const permitRows = await arcgisQuery(
      `${BASE}/ODC_DEV_RESIDENTIALCONSTPERMIT_P/FeatureServer/316`,
      `SCHEDNUM='${schednum}'`,
      'PERMIT_NUM,CLASS,DATE_ISSUED,FINAL_DATE,CANCEL'
    ).catch(() => []);

    return {
      parcelNumber: schednum ? String(schednum) : undefined,
      lotSizeSqft: parcels[0].LAND_AREA ? Math.round(Number(parcels[0].LAND_AREA)) : undefined,
      assessedValue: parcels[0].ASSESSED_TOTAL_VALUE_LOCAL ? Math.round(Number(parcels[0].ASSESSED_TOTAL_VALUE_LOCAL)) : undefined,
      permits: permitRows.map((p) => ({
        permitNumber: p.PERMIT_NUM ? String(p.PERMIT_NUM) : undefined,
        permitType: p.CLASS ? String(p.CLASS) : 'Other',
        status: normalizePermitStatus(p.FINAL_DATE, p.CANCEL),
        issuedDate: p.DATE_ISSUED ? new Date(Number(p.DATE_ISSUED)) : undefined,
        source: DENVER_SOURCE,
      })),
    };
  } catch (err) {
    console.error('Denver GIS sync failed:', err);
    return null;
  }
}
