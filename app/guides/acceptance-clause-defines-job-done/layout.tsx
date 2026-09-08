import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Acceptance Clause That Defines \'Done\' Before the Dispute Starts | CLRBLT',
  description: 'Copy this acceptance clause to define exactly when a job is \'complete\'—so clients can\'t withhold final payment by claiming it\'s not done.',
  openGraph: {
    title: 'The Acceptance Clause That Defines \'Done\' Before the Dispute Starts',
    description: 'Copy this acceptance clause to define exactly when a job is \'complete\'—so clients can\'t withhold final payment by claiming it\'s not done.',
    url: 'https://www.clrblt.com/guides/acceptance-clause-defines-job-done',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
