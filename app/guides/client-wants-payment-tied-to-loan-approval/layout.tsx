import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Says They\'ll Pay \'When the HELOC Comes Through\': Why That\'s Not Your Problem | CLRBLT',
  description: 'A client tying payment to their HELOC or loan approval is asking you to finance their project. Here\'s how to structure the job so you\'re never waiting on their bank.',
  openGraph: {
    title: 'The Client Says They\'ll Pay \'When the HELOC Comes Through\': Why That\'s Not Your Problem',
    description: 'A client tying payment to their HELOC or loan approval is asking you to finance their project. Here\'s how to structure the job so you\'re never waiting on their bank.',
    url: 'https://www.clrblt.com/guides/client-wants-payment-tied-to-loan-approval',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
