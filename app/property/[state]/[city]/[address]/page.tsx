import type { Metadata } from 'next';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { titleCase, parseAddressSlug } from '@/lib/property';
import './styles.css';

interface PageParams {
  state: string;
  city: string;
  address: string;
}

interface PageProps {
  params: Promise<PageParams>;
}

const PERMIT_ICONS: Record<string, string> = {
  electrical: '⚡',
  roofing: '🏠',
  mechanical: '🔧',
  hvac: '🔧',
  addition: '🏗️',
  plumbing: '🚰',
};

async function getProperty(slug: string) {
  if (!prisma) return null;
  try {
    return await prisma.property.findUnique({
      where: { slug },
      include: {
        permits: { orderBy: [{ issuedDate: 'desc' }] },
      },
    });
  } catch (err) {
    console.error('Failed to load property:', err);
    return null;
  }
}

async function getNearby(zip: string | undefined, excludeSlug: string) {
  if (!prisma || !zip) return [];
  try {
    return await prisma.property.findMany({
      where: { zip, slug: { not: excludeSlug } },
      include: { _count: { select: { permits: true } } },
      take: 4,
    });
  } catch (err) {
    console.error('Failed to load nearby properties:', err);
    return [];
  }
}

function displayAddressFor(
  property: Awaited<ReturnType<typeof getProperty>>,
  parsed: { street: string; zip?: string },
  cityName: string,
  stateCode: string
) {
  if (property) return `${property.streetAddress}, ${property.city} ${property.state} ${property.zip}`;
  return `${parsed.street}, ${cityName} ${stateCode}${parsed.zip ? ' ' + parsed.zip : ''}`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { state, city, address } = await params;
  const slug = `${state}/${city}/${address}`;
  const property = await getProperty(slug);
  const parsed = parseAddressSlug(address);
  const cityName = titleCase(city);
  const stateCode = state.toUpperCase();
  const displayAddress = displayAddressFor(property, parsed, cityName, stateCode);
  const permitCount = property?.permits.length ?? 0;

  return {
    title: `${displayAddress} – Permit History & Contractor Records | Clearbuilt`,
    description: `${permitCount > 0 ? `${permitCount} permits on file. ` : ''}View permit history and renovation timeline for ${displayAddress}. Get escrow-protected bids from verified contractors.`,
    alternates: { canonical: `https://www.clrblt.com/property/${slug}` },
    openGraph: {
      title: `${displayAddress} — Permit History & Contractor Records`,
      description: `View renovation history and get escrow-protected bids for ${displayAddress}.`,
      url: `https://www.clrblt.com/property/${slug}`,
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { state, city, address } = await params;
  const slug = `${state}/${city}/${address}`;
  const property = await getProperty(slug);
  const parsed = parseAddressSlug(address);
  const cityName = titleCase(city);
  const stateCode = state.toUpperCase();
  const displayAddress = displayAddressFor(property, parsed, cityName, stateCode);
  const zip = property?.zip ?? parsed.zip;
  const permits = property?.permits ?? [];
  const nearby = await getNearby(zip, slug);

  const timelineEvents = [
    ...permits.map((p) => ({
      year: (p.finaledDate ?? p.issuedDate)?.getFullYear() ?? null,
      label: p.permitType,
      detail: p.description ?? '',
      dotClass: p.status === 'finaled' ? 'active' : 'gold',
    })),
    ...(property?.yearBuilt
      ? [{ year: property.yearBuilt, label: 'Original construction', detail: '', dotClass: '' }]
      : []),
  ]
    .filter((e) => e.year)
    .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateListing',
        name: displayAddress,
        address: {
          '@type': 'PostalAddress',
          streetAddress: property?.streetAddress ?? parsed.street,
          addressLocality: property?.city ?? cityName,
          addressRegion: property?.state ?? stateCode,
          postalCode: zip,
          addressCountry: 'US',
        },
        url: `https://www.clrblt.com/property/${slug}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: stateCode, item: `https://www.clrblt.com/property/${state}` },
          { '@type': 'ListItem', position: 2, name: cityName, item: `https://www.clrblt.com/property/${state}/${city}` },
          { '@type': 'ListItem', position: 3, name: displayAddress },
        ],
      },
    ],
  };

  return (
    <div className="property-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="nav">
        <Link href="/" className="nav-logo">CLRB<span>LT</span></Link>
        <div className="nav-right">
          <Link href="/create" className="nav-link">How It Works</Link>
          <Link href="/master" className="nav-link">For Contractors</Link>
          <Link href="/create" className="nav-cta">Get Escrow Bids</Link>
        </div>
      </nav>

      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href={`/property/${state}`}>{stateCode}</Link>
        <span className="breadcrumb-sep">›</span>
        <Link href={`/property/${state}/${city}`}>{cityName}</Link>
        <span className="breadcrumb-sep">›</span>
        <span>{parsed.street}</span>
      </nav>

      <div className="hero">
        <div className="hero-inner">
          <div className="address-eyebrow">Residential Property · {cityName}, {stateCode}</div>
          <h1 className="address-title">
            {property?.streetAddress ?? parsed.street}<br />
            <em>{property?.city ?? cityName}, {property?.state ?? stateCode}{zip ? ` ${zip}` : ''}</em>
          </h1>
          <div className="hero-meta">
            {property ? (
              <>
                <span className="badge badge-green">✓ {permits.length} Permit{permits.length === 1 ? '' : 's'} on File</span>
                {property.yearBuilt && <span className="badge badge-neutral">Built {property.yearBuilt}</span>}
                {property.propertyType && <span className="badge badge-neutral">{property.propertyType}</span>}
              </>
            ) : (
              <span className="badge badge-gold">No records on file yet</span>
            )}
          </div>

          {property && (
            <div className="hero-stats">
              <div className="stat-card">
                <div className="stat-label">Total Permits</div>
                <div className="stat-value">{permits.length}</div>
              </div>
              {property.heatedSqft && (
                <div className="stat-card">
                  <div className="stat-label">Sq Footage</div>
                  <div className="stat-value">{property.heatedSqft.toLocaleString()}</div>
                  <div className="stat-sub">Per assessor records</div>
                </div>
              )}
              {property.assessedValue && (
                <div className="stat-card">
                  <div className="stat-label">Assessed Value</div>
                  <div className="stat-value">${Math.round(property.assessedValue / 1000)}k</div>
                </div>
              )}
              {property.lastSaleYear && (
                <div className="stat-card">
                  <div className="stat-label">Last Sale</div>
                  <div className="stat-value">{property.lastSaleYear}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="page-body">
        <main>
          <section className="section" id="permits">
            <div className="section-header">
              <h2 className="section-title">Permit History</h2>
              <span className="section-count">{permits.length} permit{permits.length === 1 ? '' : 's'}{property?.county ? ` · ${property.county}` : ''}</span>
            </div>

            {permits.length === 0 ? (
              <p className="empty-state">
                No permit records on file yet for this address. Permit and assessor data is added as counties are indexed, or by the property owner directly.
              </p>
            ) : (
              <div className="permit-list">
                {permits.map((permit) => (
                  <div className="permit-card" key={permit.id}>
                    <div className="permit-icon">{PERMIT_ICONS[permit.permitType] ?? '📄'}</div>
                    <div className="permit-body">
                      <div className="permit-type">{titleCase(permit.permitType)}</div>
                      {permit.description && <div className="permit-desc">{permit.description}</div>}
                      <div className="permit-meta">
                        {permit.issuedDate && <span className="permit-chip">Issued <strong>{permit.issuedDate.toLocaleDateString()}</strong></span>}
                        {permit.finaledDate && <span className="permit-chip">Finaled <strong>{permit.finaledDate.toLocaleDateString()}</strong></span>}
                        {permit.valueCents && <span className="permit-chip">Value <strong>${(permit.valueCents / 100).toLocaleString()}</strong></span>}
                        {permit.contractorName && <span className="permit-chip">Contractor <strong>{permit.contractorName}</strong></span>}
                      </div>
                    </div>
                    <div className="permit-status">
                      <span className={`status-pill status-${permit.status}`}>
                        {permit.status === 'finaled' ? '✓ Finaled' : titleCase(permit.status)}
                      </span>
                      {permit.permitNumber && <div className="permit-number">{permit.permitNumber}</div>}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {property?.dataSource && (
              <p style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 10, textAlign: 'right' }}>
                Source: {property.dataSource}{property.dataSyncedAt ? ` · Last synced ${property.dataSyncedAt.toLocaleDateString()}` : ''}
              </p>
            )}
          </section>

          {timelineEvents.length > 0 && (
            <section className="section" id="timeline">
              <div className="section-header">
                <h2 className="section-title">Property Timeline</h2>
                <span className="section-count">Based on public records</span>
              </div>
              <div className="timeline">
                {timelineEvents.map((event, i) => (
                  <div className="timeline-item" key={i}>
                    <div className={`timeline-dot ${event.dotClass}`} />
                    <div className="timeline-year">{event.year}</div>
                    <div className="timeline-event">
                      <strong>{titleCase(event.label)}</strong>{event.detail ? ` — ${event.detail}` : ''}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="section" id="details">
            <div className="section-header">
              <h2 className="section-title">Assessor Record</h2>
              {property?.parcelNumber && <span className="section-count">Parcel {property.parcelNumber}</span>}
            </div>
            {property ? (
              <div className="detail-grid">
                {property.propertyType && (<><div className="detail-label">Property Type</div><div className="detail-value">{property.propertyType}</div></>)}
                {property.yearBuilt && (<><div className="detail-label">Year Built</div><div className="detail-value">{property.yearBuilt}</div></>)}
                {property.heatedSqft && (<><div className="detail-label">Heated Sq Footage</div><div className="detail-value">{property.heatedSqft.toLocaleString()} sq ft</div></>)}
                {property.lotSizeSqft && (<><div className="detail-label">Lot Size</div><div className="detail-value">{property.lotSizeSqft.toLocaleString()} sq ft</div></>)}
                {(property.bedrooms || property.bathrooms) && (<><div className="detail-label">Bedrooms / Baths</div><div className="detail-value">{property.bedrooms ?? '—'} bed / {property.bathrooms ?? '—'} bath</div></>)}
                {property.assessedValue && (<><div className="detail-label">Assessed Value</div><div className="detail-value">${property.assessedValue.toLocaleString()}</div></>)}
                {property.lastSaleYear && (<><div className="detail-label">Last Sale</div><div className="detail-value">{property.lastSaleYear}</div></>)}
              </div>
            ) : (
              <p className="empty-state">
                No assessor data on file yet for this address. <Link href={`/property/claim?slug=${slug}`}>Own this property?</Link> Claim it to add records directly.
              </p>
            )}
          </section>

          <section className="section" id="faq">
            <div className="section-header">
              <h2 className="section-title">Common Questions About This Property</h2>
            </div>
            <div className="faq-list">
              <details className="faq-item">
                <summary className="faq-q">How do I get contractor bids for work at {displayAddress}?</summary>
                <p className="faq-a">You can request escrow-protected bids directly from this page. Submit your project details and we&apos;ll match you with contractors who agree to accept payment through escrow — meaning your money is held safely until work is verified complete.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">Where does the permit data for this address come from?</summary>
                <p className="faq-a">Permit records are sourced from licensed property data providers and public county building divisions, updated periodically. Property owners can also claim this page to add documentation directly.</p>
              </details>
              <details className="faq-item">
                <summary className="faq-q">What is escrow payment for contractor work?</summary>
                <p className="faq-a">Escrow means your project funds are deposited with a neutral third party before work begins. The contractor knows the money is there, which eliminates payment disputes. You know work must be completed to your satisfaction before funds are released. Clearbuilt brings this model to residential construction via Paykeeper.</p>
              </details>
            </div>
          </section>

          {nearby.length > 0 && (
            <section className="section" id="nearby">
              <div className="section-header">
                <h2 className="section-title">Nearby Properties</h2>
                <span className="section-count">{cityName}, {stateCode} {zip}</span>
              </div>
              <div className="nearby-grid">
                {nearby.map((n) => (
                  <Link href={`/property/${n.slug}`} className="nearby-card" key={n.id}>
                    <div className="nearby-addr">{n.streetAddress}</div>
                    <div className="nearby-meta">{n._count.permits} permit{n._count.permits === 1 ? '' : 's'} on file</div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </main>

        <aside className="sidebar">
          <div className="cta-card">
            <div className="cta-card-header">
              <h3>Get bids for this property</h3>
              <p>Funds held in escrow until work is done. No payment risk for either side.</p>
            </div>
            <div className="cta-card-body">
              <div className="escrow-explainer">
                <div className="escrow-icon">🔒</div>
                <div className="escrow-text">
                  <strong>Escrow-protected payment</strong>
                  Your payment is protected until milestones are verified complete.
                </div>
              </div>
              <Link href="/create" className="cta-btn">Get Escrow-Protected Bids</Link>
              <div className="trust-row">
                <div className="trust-item"><div className="trust-dot" /> $0 monthly fees</div>
                <div className="trust-item"><div className="trust-dot" /> Licensed &amp; verified</div>
              </div>
            </div>
          </div>

          <div className="claim-card">
            <div className="claim-title">Own this property?</div>
            <div className="claim-desc">Claim your page to document your home&apos;s systems and appliances — down to the model number — so the record is ready if you ever need it.</div>
            <div className="claim-feature"><span className="claim-check">✓</span> Document systems &amp; appliances</div>
            <div className="claim-feature"><span className="claim-check">✓</span> Upload permits &amp; photos</div>
            <div className="claim-feature"><span className="claim-check">✓</span> Keep records organized for future work</div>
            <Link href={`/property/claim?slug=${slug}`} className="cta-btn" style={{ marginTop: 12, marginBottom: 0 }}>Claim This Property</Link>
          </div>
        </aside>
      </div>

      <div className="seo-content">
        <h2>About Records for {displayAddress}</h2>
        <p>
          {permits.length > 0
            ? `Building permits are public records. The permit history for ${displayAddress} shows ${permits.length} permit${permits.length === 1 ? '' : 's'} on file, covering work that required inspection and sign-off.`
            : `Clearbuilt is building a record for every US address, sourced from licensed property data providers and, over time, documentation added directly by owners. No permit history is on file yet for ${displayAddress} — check back as coverage expands, or claim this property to add your own records.`}
        </p>
        <h2>Planning Work at This Address? Understand Your Contractor Payment Options</h2>
        <p>
          Traditional contractor payment arrangements require large upfront deposits before work is done. Escrow payment solves this: funds are deposited before work begins but held by a neutral third party and released to the contractor only as milestones are completed and verified. Clearbuilt connects homeowners with contractors who agree to work under escrow terms.
        </p>
      </div>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-logo">CLRB<span>LT</span></div>
          <div className="footer-links">
            <Link href="/create">How It Works</Link>
            <Link href="/master">For Contractors</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} Clearbuilt</div>
        </div>
      </footer>
    </div>
  );
}
