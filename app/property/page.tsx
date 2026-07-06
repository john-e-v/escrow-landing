import type { Metadata } from 'next';
import Link from 'next/link';
import { PropertyLookupForm } from './PropertyLookupForm';
import './styles.css';

export const metadata: Metadata = {
  title: 'Look Up a Property — Permit History & Records | Clearbuilt',
  description: 'Find the Clearbuilt page for any US address — permit history, assessor records, and owner-documented systems and appliances.',
};

export default function PropertyLookupPage() {
  return (
    <div className="property-page">
      <nav className="nav">
        <Link href="/" className="nav-logo">CLRB<span>LT</span></Link>
        <div className="nav-right">
          <Link href="/create" className="nav-link">How It Works</Link>
          <Link href="/master" className="nav-link">For Contractors</Link>
          <Link href="/create" className="nav-cta">Get Escrow Bids</Link>
        </div>
      </nav>

      <div className="lookup-wrap">
        <div className="address-eyebrow">Property Records</div>
        <h1 className="form-title">Look up a property</h1>
        <p className="form-subtitle">
          Every US address gets a page — permit history, assessor records, and whatever the owner has documented. Enter an address to find or start one.
        </p>
        <div className="form-card">
          <PropertyLookupForm />
        </div>
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
