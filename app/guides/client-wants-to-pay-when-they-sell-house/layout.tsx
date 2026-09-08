import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Says They\'ll Pay \'When the House Sells\': Why That\'s Not a Payment Plan | CLRBLT',
  description: 'A client wanting to pay \'when the house sells\' is asking you to finance their listing. Here\'s why you refuse it and how escrow gets you paid on completion.',
  openGraph: {
    title: 'The Client Says They\'ll Pay \'When the House Sells\': Why That\'s Not a Payment Plan',
    description: 'A client wanting to pay \'when the house sells\' is asking you to finance their listing. Here\'s why you refuse it and how escrow gets you paid on completion.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-when-they-sell-house',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
