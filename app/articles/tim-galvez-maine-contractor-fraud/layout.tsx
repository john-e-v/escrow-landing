import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Portland Contractor Who Took $380K From Maine Homeowners — Then Pleaded Guilty | CLRBLT',
  description: 'Portland contractor Tim Galvez took $380K+ in deposits from Maine homeowners, abandoned projects, and pleaded guilty to felony theft in 2026.',
  openGraph: {
    title: 'The Portland Contractor Who Took $380K From Maine Homeowners — Then Pleaded Guilty',
    description: 'Portland contractor Tim Galvez took $380K+ in deposits from Maine homeowners, abandoned projects, and pleaded guilty to felony theft in 2026.',
    url: 'https://www.clrblt.com/articles/tim-galvez-maine-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
