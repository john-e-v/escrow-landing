import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants to \'Split\' the Final Payment Into Two: Why That\'s a Red Flag | CLRBLT',
  description: 'A client asking to split the final payment into two isn\'t a cash-flow request — it\'s a stall. Here\'s how to structure the close so the last check can\'t be delayed.',
  openGraph: {
    title: 'The Client Wants to \'Split\' the Final Payment Into Two: Why That\'s a Red Flag',
    description: 'A client asking to split the final payment into two isn\'t a cash-flow request — it\'s a stall. Here\'s how to structure the close so the last check can\'t be delayed.',
    url: 'https://www.clrblt.com/guides/client-wants-to-split-final-payment',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
