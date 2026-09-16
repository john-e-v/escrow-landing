import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GPS Fleet Tracking vs. Crew Check-In Texts: What Actually Tells You Where Your Trucks Are | CLRBLT',
  description: 'GPS fleet tracking runs $20-40/vehicle/month. For most small crews, a disciplined check-in text does the same job for free. Here\'s the real tradeoff.',
  openGraph: {
    title: 'GPS Fleet Tracking vs. Crew Check-In Texts: What Actually Tells You Where Your Trucks Are',
    description: 'GPS fleet tracking runs $20-40/vehicle/month. For most small crews, a disciplined check-in text does the same job for free. Here\'s the real tradeoff.',
    url: 'https://www.clrblt.com/guides/gps-tracking-app-vs-check-in-text',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
