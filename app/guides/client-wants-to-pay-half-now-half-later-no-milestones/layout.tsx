import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants to Pay Half Now, Half \'When It\'s Done\' — With Nothing In Between | CLRBLT',
  description: 'A 50/50 split with nothing in between exposes your whole labor cost for the full job. Here\'s how milestone releases keep you carrying only one stage of risk.',
  openGraph: {
    title: 'The Client Wants to Pay Half Now, Half \'When It\'s Done\' — With Nothing In Between',
    description: 'A 50/50 split with nothing in between exposes your whole labor cost for the full job. Here\'s how milestone releases keep you carrying only one stage of risk.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-half-now-half-later-no-milestones',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
