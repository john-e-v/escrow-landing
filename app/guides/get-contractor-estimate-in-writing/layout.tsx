import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What Every Contractor Estimate Must Include Before You Sign | CLRBLT',
  description: '9 things every written contractor estimate must include before you sign: scope, materials, payment schedule, timeline, and the exclusions that cause overruns.',
  openGraph: {
    title: 'What Every Contractor Estimate Must Include Before You Sign',
    description: '9 things every written contractor estimate must include before you sign: scope, materials, payment schedule, timeline, and the exclusions that cause overruns.',
    url: 'https://www.clrblt.com/guides/get-contractor-estimate-in-writing',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
