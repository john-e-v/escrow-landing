import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Verify a Contractor\'s Portfolio Photos Are Actually Their Work | CLRBLT',
  description: 'In under 10 minutes you can prove whether a contractor\'s portfolio photos are real. Run these reverse-image searches, requests, and questions before you sign.',
  openGraph: {
    title: 'How to Verify a Contractor\'s Portfolio Photos Are Actually Their Work',
    description: 'In under 10 minutes you can prove whether a contractor\'s portfolio photos are real. Run these reverse-image searches, requests, and questions before you sign.',
    url: 'https://www.clrblt.com/guides/verify-contractor-photos-are-real-work',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
