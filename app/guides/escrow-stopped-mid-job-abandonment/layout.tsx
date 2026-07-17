import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Framer Walked Off at 60%. Escrow Meant the Homeowner Didn\'t Lose a Dime. | CLRBLT',
  description: 'A framer abandoned an ADU job at 60%. Because payment sat in escrow tied to milestones, the homeowner lost $0 instead of the usual $18K. Here\'s the mechanism.',
  openGraph: {
    title: 'The Framer Walked Off at 60%. Escrow Meant the Homeowner Didn\'t Lose a Dime.',
    description: 'A framer abandoned an ADU job at 60%. Because payment sat in escrow tied to milestones, the homeowner lost $0 instead of the usual $18K. Here\'s the mechanism.',
    url: 'https://www.clrblt.com/guides/escrow-stopped-mid-job-abandonment',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
