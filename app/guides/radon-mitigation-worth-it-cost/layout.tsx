import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Radon Mitigation Worth It? Cost, Health Payback, and When to Skip It | CLRBLT',
  description: 'Yes — if your radon test hits 4.0 pCi/L or above. Mitigation runs $800–$2,500 and reduces a real cancer risk. Here\'s when it pays and when to wait.',
  openGraph: {
    title: 'Is Radon Mitigation Worth It? Cost, Health Payback, and When to Skip It',
    description: 'Yes — if your radon test hits 4.0 pCi/L or above. Mitigation runs $800–$2,500 and reduces a real cancer risk. Here\'s when it pays and when to wait.',
    url: 'https://www.clrblt.com/guides/radon-mitigation-worth-it-cost',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
