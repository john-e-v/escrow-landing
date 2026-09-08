import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estimating Software vs. Takeoff Tool: Where Your Bid Actually Comes Together | CLRBLT',
  description: 'Takeoff tools count quantities; estimating software prices them. Here\'s where the handoff breaks, what overlaps, and how to avoid paying twice for the same bid workflow.',
  openGraph: {
    title: 'Estimating Software vs. Takeoff Tool: Where Your Bid Actually Comes Together',
    description: 'Takeoff tools count quantities; estimating software prices them. Here\'s where the handoff breaks, what overlaps, and how to avoid paying twice for the same bid workflow.',
    url: 'https://www.clrblt.com/guides/estimating-software-vs-takeoff-tool',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
