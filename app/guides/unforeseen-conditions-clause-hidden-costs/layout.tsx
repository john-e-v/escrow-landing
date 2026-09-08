import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Unforeseen Conditions Clause: Who Pays When You Open the Wall and It\'s Worse | CLRBLT',
  description: 'The exact unforeseen conditions clause to add before demo starts, so hidden rot, code issues, or damage don\'t become free work you eat.',
  openGraph: {
    title: 'The Unforeseen Conditions Clause: Who Pays When You Open the Wall and It\'s Worse',
    description: 'The exact unforeseen conditions clause to add before demo starts, so hidden rot, code issues, or damage don\'t become free work you eat.',
    url: 'https://www.clrblt.com/guides/unforeseen-conditions-clause-hidden-costs',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
