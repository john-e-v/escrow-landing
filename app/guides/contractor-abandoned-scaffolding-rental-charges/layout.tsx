import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Left Rented Scaffolding On Your Job. Now the Rental Company Wants You to Pay. | CLRBLT',
  description: 'A contractor left rented scaffolding on-site and vanished, and the $3,400 unpaid tab landed on the homeowner. Here\'s why it happens and how to prevent it.',
  openGraph: {
    title: 'The Contractor Left Rented Scaffolding On Your Job. Now the Rental Company Wants You to Pay.',
    description: 'A contractor left rented scaffolding on-site and vanished, and the $3,400 unpaid tab landed on the homeowner. Here\'s why it happens and how to prevent it.',
    url: 'https://www.clrblt.com/guides/contractor-abandoned-scaffolding-rental-charges',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
