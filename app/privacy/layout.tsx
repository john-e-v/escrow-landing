import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — CLRBLT',
  description: 'CLRBLT privacy policy. We connect homeowners and contractors; escrow funds are held by Paykeeper (paykeeper.com). Learn what data we collect and how it is used.',
  openGraph: {
    title: 'Privacy Policy — CLRBLT',
    url: 'https://www.clrblt.com/privacy',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
