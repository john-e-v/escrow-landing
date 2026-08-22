import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Atlanta Contractor-Turned-Fraudster Who Ran a $55M Mortgage Scheme | CLRBLT',
  description: 'How Matthew Cox used forged documents and phantom properties to run a $55M mortgage and construction fraud scheme across Atlanta and Florida.',
  openGraph: {
    title: 'The Atlanta Contractor-Turned-Fraudster Who Ran a $55M Mortgage Scheme',
    description: 'How Matthew Cox used forged documents and phantom properties to run a $55M mortgage and construction fraud scheme across Atlanta and Florida.',
    url: 'https://www.clrblt.com/articles/matthew-cox-atlanta-mortgage-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
