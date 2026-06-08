import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'CLRBLT — Escrow-Protected Payments for Home Projects',
  description: 'Submit your home project and get matched with contractors who accept escrow payments. Funds are held securely until the work is done right. Powered by Paykeeper.',
  metadataBase: new URL('https://www.clrblt.com'),
  openGraph: {
    siteName: 'CLRBLT',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.google.com/recaptcha/api.js`}
          strategy="lazyOnload"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
