import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Portal vs. Email Updates: What Homeowners Actually Read | CLRBLT',
  description: 'Client portals get abandoned after the first login. Here\'s when a portal beats email updates for homeowners — and when it just adds friction.',
  openGraph: {
    title: 'Client Portal vs. Email Updates: What Homeowners Actually Read',
    description: 'Client portals get abandoned after the first login. Here\'s when a portal beats email updates for homeowners — and when it just adds friction.',
    url: 'https://www.clrblt.com/guides/client-portal-vs-email-updates',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
