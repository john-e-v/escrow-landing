import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Liquidated Damages Clause: Cap Your Late-Finish Exposure Before You Sign | CLRBLT',
  description: 'A liquidated damages clause caps your late-finish penalty at a fixed daily rate. Copy the exact contract language that stops open-ended delay claims cold.',
  openGraph: {
    title: 'The Liquidated Damages Clause: Cap Your Late-Finish Exposure Before You Sign',
    description: 'A liquidated damages clause caps your late-finish penalty at a fixed daily rate. Copy the exact contract language that stops open-ended delay claims cold.',
    url: 'https://www.clrblt.com/guides/liquidated-damages-clause-late-completion',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
