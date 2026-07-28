import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Where Your Job Files Actually Live: Shared Drive vs. Per-Job System | CLRBLT',
  description: 'A shared drive costs $0 but buries your evidence. Here\'s when a per-job file structure actually earns its keep, and what to keep in-house vs. outsource.',
  openGraph: {
    title: 'Where Your Job Files Actually Live: Shared Drive vs. Per-Job System',
    description: 'A shared drive costs $0 but buries your evidence. Here\'s when a per-job file structure actually earns its keep, and what to keep in-house vs. outsource.',
    url: 'https://www.clrblt.com/guides/document-storage-shared-drive-vs-job-file',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
