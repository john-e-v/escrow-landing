import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scheduling Software vs. Shared Calendar: What Breaks When You Run 3 Jobs at Once | CLRBLT',
  description: 'Shared calendars break around the third concurrent job. Here\'s an honest comparison of scheduling software vs. shared calendars for contractors, and where each fails.',
  openGraph: {
    title: 'Scheduling Software vs. Shared Calendar: What Breaks When You Run 3 Jobs at Once',
    description: 'Shared calendars break around the third concurrent job. Here\'s an honest comparison of scheduling software vs. shared calendars for contractors, and where each fails.',
    url: 'https://www.clrblt.com/guides/scheduling-software-vs-shared-calendar',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
