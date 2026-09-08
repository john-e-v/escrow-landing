import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dispatch Software vs. Group Text: What Breaks When You Send Crews to 5 Sites | CLRBLT',
  description: 'A group text handles 2 crews fine. At 5 sites it starts costing you truck rolls and no-shows. Here\'s where dispatch software pays off—and where it\'s overkill.',
  openGraph: {
    title: 'Dispatch Software vs. Group Text: What Breaks When You Send Crews to 5 Sites',
    description: 'A group text handles 2 crews fine. At 5 sites it starts costing you truck rolls and no-shows. Here\'s where dispatch software pays off—and where it\'s overkill.',
    url: 'https://www.clrblt.com/guides/dispatch-software-vs-group-text-crew',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
