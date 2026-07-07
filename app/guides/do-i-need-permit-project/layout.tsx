import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Do You Need a Permit? A Room-by-Room Checklist Before You Hire | CLRBLT',
  description: '9 out of 10 permit problems trace back to one skipped step. Here\'s which projects need a permit, who pulls it, and how to verify before work begins.',
  openGraph: {
    title: 'Do You Need a Permit? A Room-by-Room Checklist Before You Hire',
    description: '9 out of 10 permit problems trace back to one skipped step. Here\'s which projects need a permit, who pulls it, and how to verify before work begins.',
    url: 'https://www.clrblt.com/guides/do-i-need-permit-project',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
