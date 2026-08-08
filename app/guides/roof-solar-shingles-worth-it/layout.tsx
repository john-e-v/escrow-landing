import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Are Solar Shingles Worth It? Cost, Payback, and When Panels Win Instead | CLRBLT',
  description: 'Solar shingles cost $40K-$70K vs. $20K-$30K for panels. They\'re only worth it if you\'re replacing the roof anyway — here\'s the full payback math.',
  openGraph: {
    title: 'Are Solar Shingles Worth It? Cost, Payback, and When Panels Win Instead',
    description: 'Solar shingles cost $40K-$70K vs. $20K-$30K for panels. They\'re only worth it if you\'re replacing the roof anyway — here\'s the full payback math.',
    url: 'https://www.clrblt.com/guides/roof-solar-shingles-worth-it',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
