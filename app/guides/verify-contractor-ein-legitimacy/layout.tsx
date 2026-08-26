import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Verify a Contractor\'s EIN and Business Registration Before You Hire | CLRBLT',
  description: 'In 10 minutes you can confirm a contractor\'s business is real: check the EIN, entity status, and Secretary of State registration. Here\'s the step-by-step.',
  openGraph: {
    title: 'How to Verify a Contractor\'s EIN and Business Registration Before You Hire',
    description: 'In 10 minutes you can confirm a contractor\'s business is real: check the EIN, entity status, and Secretary of State registration. Here\'s the step-by-step.',
    url: 'https://www.clrblt.com/guides/verify-contractor-ein-legitimacy',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
