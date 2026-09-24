import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Back-Charged You for a Delay You Didn\'t Cause | CLRBLT',
  description: 'A $3,200 back-charge for a delay the contractor caused. Here\'s how a vague delay clause shifts standby costs onto the homeowner and how milestone escrow blocks it.',
  openGraph: {
    title: 'The Contractor Back-Charged You for a Delay You Didn\'t Cause',
    description: 'A $3,200 back-charge for a delay the contractor caused. Here\'s how a vague delay clause shifts standby costs onto the homeowner and how milestone escrow blocks it.',
    url: 'https://www.clrblt.com/guides/contractor-backcharged-you-for-delay-you-didnt-cause',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
