import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Spot Fake Contractor Reviews Before You Trust the 5 Stars | CLRBLT',
  description: '5 checks to spot fake contractor reviews before you hire: date clustering, generic language, unverified profiles, and the one pattern real reviews always show.',
  openGraph: {
    title: 'How to Spot Fake Contractor Reviews Before You Trust the 5 Stars',
    description: '5 checks to spot fake contractor reviews before you hire: date clustering, generic language, unverified profiles, and the one pattern real reviews always show.',
    url: 'https://www.clrblt.com/guides/check-contractor-online-reviews-fake',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
