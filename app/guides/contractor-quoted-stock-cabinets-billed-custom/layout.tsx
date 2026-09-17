import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Cabinets Were \'Custom\' on the Invoice — But Stock on the Wall | CLRBLT',
  description: 'A $9,400 gap: the contractor billed custom cabinets and installed stock. Why vague material specs invite this swap and how to lock it before you pay.',
  openGraph: {
    title: 'The Cabinets Were \'Custom\' on the Invoice — But Stock on the Wall',
    description: 'A $9,400 gap: the contractor billed custom cabinets and installed stock. Why vague material specs invite this swap and how to lock it before you pay.',
    url: 'https://www.clrblt.com/guides/contractor-quoted-stock-cabinets-billed-custom',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
