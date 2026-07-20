import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progress Billing vs. Lump Sum: Which Payment Structure Gets You Paid Faster? | CLRBLT',
  description: 'Lump-sum billing puts your entire payment at risk on the last day. Progress billing tied to milestones gets you paid throughout the job. Here\'s how to structure it.',
  openGraph: {
    title: 'Progress Billing vs. Lump Sum: Which Payment Structure Gets You Paid Faster?',
    description: 'Lump-sum billing puts your entire payment at risk on the last day. Progress billing tied to milestones gets you paid throughout the job. Here\'s how to structure it.',
    url: 'https://www.clrblt.com/guides/progress-billing-vs-lump-sum',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
