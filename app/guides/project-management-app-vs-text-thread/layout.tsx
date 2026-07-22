import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Management App vs. Text Thread: What Actually Keeps a Job on Track | CLRBLT',
  description: 'The text thread is free and everyone already uses it. A project management app costs $40-200/mo per user. Here\'s when each actually keeps a job on track.',
  openGraph: {
    title: 'Project Management App vs. Text Thread: What Actually Keeps a Job on Track',
    description: 'The text thread is free and everyone already uses it. A project management app costs $40-200/mo per user. Here\'s when each actually keeps a job on track.',
    url: 'https://www.clrblt.com/guides/project-management-app-vs-text-thread',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
