import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You Prepaid the Appliance Package. The Contractor Never Ordered It. | CLRBLT',
  description: 'A homeowner lost $9,400 on a prepaid appliance package the contractor never ordered. Here\'s exactly how it happens and the escrow fix that prevents it.',
  openGraph: {
    title: 'You Prepaid the Appliance Package. The Contractor Never Ordered It.',
    description: 'A homeowner lost $9,400 on a prepaid appliance package the contractor never ordered. Here\'s exactly how it happens and the escrow fix that prevents it.',
    url: 'https://www.clrblt.com/guides/contractor-vanished-with-appliance-package',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
