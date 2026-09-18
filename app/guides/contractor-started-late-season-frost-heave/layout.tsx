import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Fence Posts Weren\'t Set Below Frost Line. By Spring, Half the Fence Leaned. | CLRBLT',
  description: 'A $6,800 fence heaved out of the ground by spring because posts were set above frost line. Here\'s why it happened and how milestone payment would have stopped it.',
  openGraph: {
    title: 'The Fence Posts Weren\'t Set Below Frost Line. By Spring, Half the Fence Leaned.',
    description: 'A $6,800 fence heaved out of the ground by spring because posts were set above frost line. Here\'s why it happened and how milestone payment would have stopped it.',
    url: 'https://www.clrblt.com/guides/contractor-started-late-season-frost-heave',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
