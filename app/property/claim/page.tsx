import Link from 'next/link';
import { parsePropertySlug } from '@/lib/property';
import { ClaimForm } from './ClaimForm';
import '../styles.css';

interface PageProps {
  searchParams: Promise<{ slug?: string }>;
}

export default async function ClaimPropertyPage({ searchParams }: PageProps) {
  const { slug } = await searchParams;

  if (!slug) {
    return (
      <div className="property-page">
        <nav className="nav">
          <Link href="/" className="nav-logo">CLRB<span>LT</span></Link>
        </nav>
        <div className="lookup-wrap">
          <p className="form-subtitle">
            Missing property. Go back to the property page and click &quot;Claim This Property&quot; again, or <Link href="/property">look one up</Link>.
          </p>
        </div>
      </div>
    );
  }

  const { street, cityName, stateCode, zip } = parsePropertySlug(slug);
  const displayAddress = `${street}, ${cityName} ${stateCode}${zip ? ' ' + zip : ''}`;

  return (
    <div className="property-page">
      <nav className="nav">
        <Link href="/" className="nav-logo">CLRB<span>LT</span></Link>
        <div className="nav-right">
          <Link href={`/property/${slug}`} className="nav-link">Back to Property</Link>
          <Link href="/create" className="nav-cta">Get Escrow Bids</Link>
        </div>
      </nav>

      <div className="lookup-wrap">
        <div className="address-eyebrow">Claim Property</div>
        <h1 className="form-title">{displayAddress}</h1>
        <p className="form-subtitle">
          Document your home&apos;s systems and appliances — down to the model number — so the record is ready for future work or an insurance claim.
        </p>
        <div className="form-card">
          <ClaimForm slug={slug} displayAddress={displayAddress} />
        </div>
      </div>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-logo">CLRB<span>LT</span></div>
          <div className="footer-links">
            <Link href="/create">How It Works</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} Clearbuilt</div>
        </div>
      </footer>
    </div>
  );
}
