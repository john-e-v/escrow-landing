import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Says the Bank \'Hasn\'t Released the Draw Yet\': Why That\'s Not Your Cash Flow Problem | CLRBLT',
  description: 'A client blaming a bank draw delay is asking you to finance their loan gap. Here\'s how to structure payment so their lender\'s timeline stops being your problem.',
  openGraph: {
    title: 'The Client Says the Bank \'Hasn\'t Released the Draw Yet\': Why That\'s Not Your Cash Flow Problem',
    description: 'A client blaming a bank draw delay is asking you to finance their loan gap. Here\'s how to structure payment so their lender\'s timeline stops being your problem.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-when-financing-clears-bank',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
