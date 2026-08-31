import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Contractor Is Licensed — But Is It the Right License for Your Job? | CLRBLT',
  description: 'A license number isn\'t enough. Here\'s how to verify the license class, classification, and scope actually cover your specific project in under 10 minutes.',
  openGraph: {
    title: 'Your Contractor Is Licensed — But Is It the Right License for Your Job?',
    description: 'A license number isn\'t enough. Here\'s how to verify the license class, classification, and scope actually cover your specific project in under 10 minutes.',
    url: 'https://www.clrblt.com/guides/verify-contractor-license-covers-your-project',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
