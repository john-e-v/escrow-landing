import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Site Conditions Clause That Stops \'You Should\'ve Known\' Disputes | CLRBLT',
  description: 'Copy this site conditions clause into your next contract to stop \'you should\'ve known\' disputes over hidden rock, rot, and soil issues you couldn\'t see at bid.',
  openGraph: {
    title: 'The Site Conditions Clause That Stops \'You Should\'ve Known\' Disputes',
    description: 'Copy this site conditions clause into your next contract to stop \'you should\'ve known\' disputes over hidden rock, rot, and soil issues you couldn\'t see at bid.',
    url: 'https://www.clrblt.com/guides/site-conditions-clause-contract',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
