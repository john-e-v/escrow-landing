import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Arkansas Contractor Who Took Storm Deposits From Tornado Victims | CLRBLT',
  description: 'How an Arkansas contractor collected roofing deposits from 2023 tornado victims and left jobs undone, prompting state fraud charges.',
  openGraph: {
    title: 'The Arkansas Contractor Who Took Storm Deposits From Tornado Victims',
    description: 'How an Arkansas contractor collected roofing deposits from 2023 tornado victims and left jobs undone, prompting state fraud charges.',
    url: 'https://www.clrblt.com/articles/spady-roofing-arkansas-tornado-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
