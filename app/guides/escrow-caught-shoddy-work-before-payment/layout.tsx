import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Inspector Failed the Job. Escrow Meant the Homeowner Hadn\'t Paid Yet. | CLRBLT',
  description: 'A basement finish failed inspection on egress and fire-blocking. Because the final payment sat in escrow, the homeowner paid $0 until re-inspection passed.',
  openGraph: {
    title: 'The Inspector Failed the Job. Escrow Meant the Homeowner Hadn\'t Paid Yet.',
    description: 'A basement finish failed inspection on egress and fire-blocking. Because the final payment sat in escrow, the homeowner paid $0 until re-inspection passed.',
    url: 'https://www.clrblt.com/guides/escrow-caught-shoddy-work-before-payment',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
