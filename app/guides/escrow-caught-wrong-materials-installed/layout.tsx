import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Installed the Cheaper Fixtures. Escrow Meant the Homeowner Caught It Before Paying. | CLRBLT',
  description: 'A contractor swapped in $7K worth of cheaper materials. Escrow kept the final payment unreleased, so the homeowner had leverage to force the correction.',
  openGraph: {
    title: 'The Contractor Installed the Cheaper Fixtures. Escrow Meant the Homeowner Caught It Before Paying.',
    description: 'A contractor swapped in $7K worth of cheaper materials. Escrow kept the final payment unreleased, so the homeowner had leverage to force the correction.',
    url: 'https://www.clrblt.com/guides/escrow-caught-wrong-materials-installed',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
