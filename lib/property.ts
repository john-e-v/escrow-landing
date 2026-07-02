export function titleCase(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export function parseAddressSlug(address: string) {
  const parts = address.split('-');
  const last = parts[parts.length - 1];
  const hasZip = /^\d{5}$/.test(last);
  const zip = hasZip ? last : undefined;
  const streetParts = hasZip ? parts.slice(0, -1) : parts;
  const street = streetParts
    .map((p) => (/^\d+$/.test(p) ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join(' ');
  return { street, zip };
}

// "co/thornton/2847-ridgecrest-drive-80229" -> { state, city, address, street, zip }
export function parsePropertySlug(slug: string) {
  const [state, city, address] = slug.split('/');
  const { street, zip } = parseAddressSlug(address ?? '');
  return { state, city, address, street, zip, cityName: titleCase(city ?? ''), stateCode: (state ?? '').toUpperCase() };
}

function slugifyPart(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// { streetAddress: "2847 Ridgecrest Drive", city: "Thornton", state: "CO", zip: "80229" }
// -> "co/thornton/2847-ridgecrest-drive-80229"
export function buildPropertySlug({
  streetAddress,
  city,
  state,
  zip,
}: {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}) {
  return [slugifyPart(state), slugifyPart(city), `${slugifyPart(streetAddress)}-${zip}`].join('/');
}
