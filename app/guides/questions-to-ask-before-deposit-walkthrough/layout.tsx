import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Pre-Deposit Walkthrough: 8 Questions to Ask Before You Hand Over a Dime | CLRBLT',
  description: '8 questions to ask a contractor during the on-site walkthrough before you pay a deposit. The exact script, plus the one answer that should end the conversation.',
  openGraph: {
    title: 'The Pre-Deposit Walkthrough: 8 Questions to Ask Before You Hand Over a Dime',
    description: '8 questions to ask a contractor during the on-site walkthrough before you pay a deposit. The exact script, plus the one answer that should end the conversation.',
    url: 'https://www.clrblt.com/guides/questions-to-ask-before-deposit-walkthrough',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
