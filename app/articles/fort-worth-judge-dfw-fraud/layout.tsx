import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Fort Worth Couple Who Took $4.8M for Custom Homes They Never Finished | CLRBLT',
  description: 'How Fort Worth\'s Christopher and Raquelle Judge defrauded 40+ homeowners of $4.8M through Judge DFW, taking payments for custom homes they never finished.',
  openGraph: {
    title: 'The Fort Worth Couple Who Took $4.8M for Custom Homes They Never Finished',
    description: 'How Fort Worth\'s Christopher and Raquelle Judge defrauded 40+ homeowners of $4.8M through Judge DFW, taking payments for custom homes they never finished.',
    url: 'https://www.clrblt.com/articles/fort-worth-judge-dfw-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
