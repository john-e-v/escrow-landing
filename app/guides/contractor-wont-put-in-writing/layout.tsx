import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5 Things a Contractor Should Never Refuse to Put in Writing | CLRBLT',
  description: '5 things every contractor should put in writing before you hire: scope, start/finish dates, payment schedule, change-order process, and cleanup. Refusal is the red flag.',
  openGraph: {
    title: '5 Things a Contractor Should Never Refuse to Put in Writing',
    description: '5 things every contractor should put in writing before you hire: scope, start/finish dates, payment schedule, change-order process, and cleanup. Refusal is the red flag.',
    url: 'https://www.clrblt.com/guides/contractor-wont-put-in-writing',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
