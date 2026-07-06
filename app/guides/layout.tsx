import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides — Cost, Timelines & Contractor Ops | CLRBLT',
  description: 'Real cost ranges, timelines, and vetting checklists for homeowners planning a project, plus payment and operations guidance for contractors.',
  openGraph: {
    title: 'Guides — Cost, Timelines & Contractor Ops | CLRBLT',
    description: 'Real cost ranges, timelines, and vetting checklists for homeowners — plus payment and ops guidance for contractors.',
    url: 'https://www.clrblt.com/guides',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
