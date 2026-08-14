import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Contractor Vanished for Three Weeks — He Took a Bigger Job | CLRBLT',
  description: 'Contractors juggle jobs and park the slow-payers. Here\'s why your crew keeps vanishing for a week at a time — and the milestone structure that keeps you first in line.',
  openGraph: {
    title: 'Your Contractor Vanished for Three Weeks — He Took a Bigger Job',
    description: 'Contractors juggle jobs and park the slow-payers. Here\'s why your crew keeps vanishing for a week at a time — and the milestone structure that keeps you first in line.',
    url: 'https://www.clrblt.com/guides/contractor-pulled-off-job-better-paying',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
