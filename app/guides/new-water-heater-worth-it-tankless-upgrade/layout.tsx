import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is Upgrading to Tankless Worth It When Your Tank Water Heater Dies? | CLRBLT',
  description: 'Usually no: tankless costs $1,500-$3,000 more to install and takes 8-12 years to break even. Here\'s when the upgrade actually pays and when to replace the tank.',
  openGraph: {
    title: 'Is Upgrading to Tankless Worth It When Your Tank Water Heater Dies?',
    description: 'Usually no: tankless costs $1,500-$3,000 more to install and takes 8-12 years to break even. Here\'s when the upgrade actually pays and when to replace the tank.',
    url: 'https://www.clrblt.com/guides/new-water-heater-worth-it-tankless-upgrade',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
