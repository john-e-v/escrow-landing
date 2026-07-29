import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Contractor \'Upgraded\' Your Job Without Asking. Now You Owe $6K. | CLRBLT',
  description: 'A contractor swapped in a $6,200 \'upgrade\' nobody approved, then billed for it. Why unapproved scope sticks, and the milestone structure that stops it.',
  openGraph: {
    title: 'The Contractor \'Upgraded\' Your Job Without Asking. Now You Owe $6K.',
    description: 'A contractor swapped in a $6,200 \'upgrade\' nobody approved, then billed for it. Why unapproved scope sticks, and the milestone structure that stops it.',
    url: 'https://www.clrblt.com/guides/contractor-added-scope-you-didnt-approve',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
