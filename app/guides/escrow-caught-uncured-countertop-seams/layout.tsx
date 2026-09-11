import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Countertop Seams Lifted a Week After Install. Escrow Meant the Homeowner Held Firm. | CLRBLT',
  description: 'Quartz seams lifted a week after install. Because final payment sat in escrow, the homeowner forced a proper re-set before releasing the money.',
  openGraph: {
    title: 'The Countertop Seams Lifted a Week After Install. Escrow Meant the Homeowner Held Firm.',
    description: 'Quartz seams lifted a week after install. Because final payment sat in escrow, the homeowner forced a proper re-set before releasing the money.',
    url: 'https://www.clrblt.com/guides/escrow-caught-uncured-countertop-seams',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
