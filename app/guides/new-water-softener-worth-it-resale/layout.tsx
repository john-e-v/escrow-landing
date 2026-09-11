import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is a Whole-House Water Softener Worth It? Cost, Payback, and When to Skip It | CLRBLT',
  description: 'It depends on your water hardness: a $1,500–$4,000 softener pays back in 5–8 years in hard-water areas but adds near-zero resale value. See the math.',
  openGraph: {
    title: 'Is a Whole-House Water Softener Worth It? Cost, Payback, and When to Skip It',
    description: 'It depends on your water hardness: a $1,500–$4,000 softener pays back in 5–8 years in hard-water areas but adds near-zero resale value. See the math.',
    url: 'https://www.clrblt.com/guides/new-water-softener-worth-it-resale',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
