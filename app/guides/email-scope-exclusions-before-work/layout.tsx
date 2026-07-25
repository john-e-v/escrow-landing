import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Exclusions List That Stops Free Work: What to Put in Writing Before Day 1 | CLRBLT',
  description: 'The copy-paste exclusions clause that stops scope creep. List what your bid does NOT cover before day 1, so no client can claim it was \'always included.\'',
  openGraph: {
    title: 'The Exclusions List That Stops Free Work: What to Put in Writing Before Day 1',
    description: 'The copy-paste exclusions clause that stops scope creep. List what your bid does NOT cover before day 1, so no client can claim it was \'always included.\'',
    url: 'https://www.clrblt.com/guides/email-scope-exclusions-before-work',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
