import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Left Your House Open to the Elements Over Winter. Who Pays the Damage? | CLRBLT',
  description: 'A stalled addition left open over winter added $18K in water and mold damage. Here\'s who actually pays when a contractor abandons an exposed job.',
  openGraph: {
    title: 'The Contractor Left Your House Open to the Elements Over Winter. Who Pays the Damage?',
    description: 'A stalled addition left open over winter added $18K in water and mold damage. Here\'s who actually pays when a contractor abandons an exposed job.',
    url: 'https://www.clrblt.com/guides/contractor-abandoned-job-winter-cold',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
