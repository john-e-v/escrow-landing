import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Is an Egress Window Worth It? Cost, ROI, and When It\'s Non-Negotiable | CLRBLT',
  description: 'Egress windows cost $2,500–$6,500 installed. Worth it if you\'re adding a basement bedroom; here\'s the ROI math and when it\'s legally non-negotiable.',
  openGraph: {
    title: 'Is an Egress Window Worth It? Cost, ROI, and When It\'s Non-Negotiable',
    description: 'Egress windows cost $2,500–$6,500 installed. Worth it if you\'re adding a basement bedroom; here\'s the ROI math and when it\'s legally non-negotiable.',
    url: 'https://www.clrblt.com/guides/egress-window-worth-it-basement',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
