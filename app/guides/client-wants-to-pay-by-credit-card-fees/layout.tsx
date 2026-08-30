import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants to Pay the Final Bill by Credit Card: Who Eats the 3%? | CLRBLT',
  description: 'A 3% card fee on an $18K final bill costs you $540 — and opens a 120-day chargeback window. Here\'s how to get paid without eating the fee or the dispute risk.',
  openGraph: {
    title: 'The Client Wants to Pay the Final Bill by Credit Card: Who Eats the 3%?',
    description: 'A 3% card fee on an $18K final bill costs you $540 — and opens a 120-day chargeback window. Here\'s how to get paid without eating the fee or the dispute risk.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-by-credit-card-fees',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
