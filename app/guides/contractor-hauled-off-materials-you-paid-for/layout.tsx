import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You Paid for the Materials. The Contractor Loaded Them Onto the Next Job. | CLRBLT',
  description: '$11K in materials arrived, then disappeared onto another job. Why paying for materials up front doesn\'t make them yours — and the fix that does.',
  openGraph: {
    title: 'You Paid for the Materials. The Contractor Loaded Them Onto the Next Job.',
    description: '$11K in materials arrived, then disappeared onto another job. Why paying for materials up front doesn\'t make them yours — and the fix that does.',
    url: 'https://www.clrblt.com/guides/contractor-hauled-off-materials-you-paid-for',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
