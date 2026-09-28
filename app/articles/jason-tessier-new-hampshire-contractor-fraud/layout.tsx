import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Derry Contractor Who Stole $60K From a Fire Victim Rebuilding Her Home | CLRBLT',
  description: 'Jason Tessier took $108K to rebuild a NH fire victim\'s home, stole $60,563, and was sentenced to 2½ to 7 years in state prison for contractor fraud.',
  openGraph: {
    title: 'The Derry Contractor Who Stole $60K From a Fire Victim Rebuilding Her Home',
    description: 'Jason Tessier took $108K to rebuild a NH fire victim\'s home, stole $60,563, and was sentenced to 2½ to 7 years in state prison for contractor fraud.',
    url: 'https://www.clrblt.com/articles/jason-tessier-new-hampshire-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
