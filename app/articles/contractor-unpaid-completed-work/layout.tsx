import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Work Done, Payment Denied: The Contractor's Side of the Payment Crisis | CLRBLT",
  description: "Over 50% of residential contractors have experienced non-payment for completed work. A documented look at the other side of the payment crisis — and how escrow protects contractors too.",
  openGraph: {
    title: "Work Done, Payment Denied: Contractors Who Weren't Paid",
    description: "The payment crisis cuts both ways. Documented cases of contractors who completed work and were never paid.",
    url: 'https://www.clrblt.com/articles/contractor-unpaid-completed-work',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
