import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Punch-List Clause That Caps What Counts as \'Not Done\' | CLRBLT',
  description: 'Copy-paste punch-list clause that caps what counts as incomplete work, sets a 10-day cure window, and stops clients from withholding final payment over trivial items.',
  openGraph: {
    title: 'The Punch-List Clause That Caps What Counts as \'Not Done\'',
    description: 'Copy-paste punch-list clause that caps what counts as incomplete work, sets a 10-day cure window, and stops clients from withholding final payment over trivial items.',
    url: 'https://www.clrblt.com/guides/punch-list-clause-defines-completion',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
