import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants to Pay in Monthly Installments After the Job: Why That\'s a Loan, Not a Payment | CLRBLT',
  description: 'A client asking to pay in monthly installments after the job is done turns you into an unsecured lender. Here\'s the structural fix that gets you paid on completion.',
  openGraph: {
    title: 'The Client Wants to Pay in Monthly Installments After the Job: Why That\'s a Loan, Not a Payment',
    description: 'A client asking to pay in monthly installments after the job is done turns you into an unsecured lender. Here\'s the structural fix that gets you paid on completion.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-in-installments',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
