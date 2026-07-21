import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '9 Contractor Red Flags to Spot in the First Meeting | CLRBLT',
  description: '9 contractor red flags to catch in the first meeting—from vague timelines to cash-only deposits. Screenshot this checklist before you meet anyone.',
  openGraph: {
    title: '9 Contractor Red Flags to Spot in the First Meeting',
    description: '9 contractor red flags to catch in the first meeting—from vague timelines to cash-only deposits. Screenshot this checklist before you meet anyone.',
    url: 'https://www.clrblt.com/guides/contractor-red-flags-first-meeting',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
