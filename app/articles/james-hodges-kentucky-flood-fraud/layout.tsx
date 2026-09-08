import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Kentucky Contractor Who Exploited Eastern Kentucky Flood Victims | CLRBLT',
  description: 'How contractor fraud targeted Eastern Kentucky\'s 2022 flood victims, taking rebuilding funds and leaving homes unrepaired after historic flooding.',
  openGraph: {
    title: 'The Kentucky Contractor Who Exploited Eastern Kentucky Flood Victims',
    description: 'How contractor fraud targeted Eastern Kentucky\'s 2022 flood victims, taking rebuilding funds and leaving homes unrepaired after historic flooding.',
    url: 'https://www.clrblt.com/articles/james-hodges-kentucky-flood-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
