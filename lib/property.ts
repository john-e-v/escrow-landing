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
