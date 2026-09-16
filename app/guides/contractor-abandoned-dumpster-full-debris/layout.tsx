import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor Left a Full Dumpster in Your Driveway. Now the Rental Company Bills You. | CLRBLT',
  description: 'A contractor left a full dumpster in the driveway and disappeared. Here\'s the $2,300 the homeowner got billed for and the payment structure that would have prevented it.',
  openGraph: {
    title: 'The Contractor Left a Full Dumpster in Your Driveway. Now the Rental Company Bills You.',
    description: 'A contractor left a full dumpster in the driveway and disappeared. Here\'s the $2,300 the homeowner got billed for and the payment structure that would have prevented it.',
    url: 'https://www.clrblt.com/guides/contractor-abandoned-dumpster-full-debris',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
