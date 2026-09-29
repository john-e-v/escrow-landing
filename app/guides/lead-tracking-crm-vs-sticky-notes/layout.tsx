import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lead Tracking in a CRM vs. Sticky Notes: Where Your Follow-Ups Actually Die | CLRBLT',
  description: 'The average contractor loses 30-40% of warm leads to missed follow-up. Here\'s how CRM lead tracking beats sticky notes — and where it still falls short.',
  openGraph: {
    title: 'Lead Tracking in a CRM vs. Sticky Notes: Where Your Follow-Ups Actually Die',
    description: 'The average contractor loses 30-40% of warm leads to missed follow-up. Here\'s how CRM lead tracking beats sticky notes — and where it still falls short.',
    url: 'https://www.clrblt.com/guides/lead-tracking-crm-vs-sticky-notes',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
