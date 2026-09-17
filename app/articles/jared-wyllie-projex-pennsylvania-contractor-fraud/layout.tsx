import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Pottstown Contractor Who Took $156K and Left Homes in Ruins | CLRBLT',
  description: 'How Jared Wyllie (PROjex, LLC) took $156K from PA homeowners with a fake contractor license and drew 3-6 years in state prison.',
  openGraph: {
    title: 'The Pottstown Contractor Who Took $156K and Left Homes in Ruins',
    description: 'How Jared Wyllie (PROjex, LLC) took $156K from PA homeowners with a fake contractor license and drew 3-6 years in state prison.',
    url: 'https://www.clrblt.com/articles/jared-wyllie-projex-pennsylvania-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
