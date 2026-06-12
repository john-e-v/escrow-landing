import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Texas Contractor Who Bilked Storm Victims Out of Millions | CLRBLT',
  description: 'How a Texas storm-restoration contractor took insurance money and deposits for work never finished, leaving homeowners with losses and legal battles.',
  openGraph: {
    title: 'The Texas Contractor Who Bilked Storm Victims Out of Millions',
    description: 'How a Texas storm-restoration contractor took insurance money and deposits for work never finished, leaving homeowners with losses and legal battles.',
    url: 'https://www.clrblt.com/articles/horizon-restoration-texas-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
