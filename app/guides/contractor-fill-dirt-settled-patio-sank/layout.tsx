import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Fill Dirt Settled and Your New Patio Sank 4 Inches. Who Pays? | CLRBLT',
  description: 'A patio sank 4 inches in 8 months because fill dirt was never compacted. Here\'s why the homeowner ate a $19K repair and how to avoid it.',
  openGraph: {
    title: 'The Fill Dirt Settled and Your New Patio Sank 4 Inches. Who Pays?',
    description: 'A patio sank 4 inches in 8 months because fill dirt was never compacted. Here\'s why the homeowner ate a $19K repair and how to avoid it.',
    url: 'https://www.clrblt.com/guides/contractor-fill-dirt-settled-patio-sank',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
