import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Epoxy Garage Floor Peeled in a Year. Here\'s Who Actually Pays | CLRBLT',
  description: 'A $4,200 epoxy garage floor peeled in 11 months because the contractor skipped moisture testing and prep. Here\'s who pays and how to avoid it.',
  openGraph: {
    title: 'Your Epoxy Garage Floor Peeled in a Year. Here\'s Who Actually Pays',
    description: 'A $4,200 epoxy garage floor peeled in 11 months because the contractor skipped moisture testing and prep. Here\'s who pays and how to avoid it.',
    url: 'https://www.clrblt.com/guides/epoxy-garage-floor-peeled-blame',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
