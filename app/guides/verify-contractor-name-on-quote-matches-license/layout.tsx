import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Name on the Quote Didn\'t Match the License. Here\'s How to Catch It. | CLRBLT',
  description: 'The license is real but the name doesn\'t match your quote. Here\'s the 4-document cross-check that catches borrowed credentials before you sign.',
  openGraph: {
    title: 'The Name on the Quote Didn\'t Match the License. Here\'s How to Catch It.',
    description: 'The license is real but the name doesn\'t match your quote. Here\'s the 4-document cross-check that catches borrowed credentials before you sign.',
    url: 'https://www.clrblt.com/guides/verify-contractor-name-on-quote-matches-license',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
