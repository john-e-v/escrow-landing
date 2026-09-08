import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Vet a Contractor\'s Estimate in 10 Minutes: The Line-by-Line Gut Check | CLRBLT',
  description: '10 things to check on a contractor\'s estimate before you sign: allowances, exclusions, payment schedule, and the one vague line that hides a budget blowout.',
  openGraph: {
    title: 'How to Vet a Contractor\'s Estimate in 10 Minutes: The Line-by-Line Gut Check',
    description: '10 things to check on a contractor\'s estimate before you sign: allowances, exclusions, payment schedule, and the one vague line that hides a budget blowout.',
    url: 'https://www.clrblt.com/guides/questions-to-ask-contractor-references',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
