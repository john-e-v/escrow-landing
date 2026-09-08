import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Notice Clause That Forces Complaints in Writing Before They Become Disputes | CLRBLT',
  description: 'The notice clause that requires clients to submit complaints in writing within 5 days—so verbal gripes can\'t become surprise disputes. Copy-paste text inside.',
  openGraph: {
    title: 'The Notice Clause That Forces Complaints in Writing Before They Become Disputes',
    description: 'The notice clause that requires clients to submit complaints in writing within 5 days—so verbal gripes can\'t become surprise disputes. Copy-paste text inside.',
    url: 'https://www.clrblt.com/guides/notice-clause-written-complaints-required',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
