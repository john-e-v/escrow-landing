import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hurricane Ian's Roofing Scammers: Assignment of Benefits Fraud in Southwest Florida | CLRBLT",
  description: "Following Hurricane Ian, fraudulent roofing contractors used Assignment of Benefits agreements to collect insurance payouts while doing little or no work. How it happened and what structural protection prevents it.",
  openGraph: {
    title: "Hurricane Ian Roofing Fraud: AOB Scams in Southwest Florida",
    description: "How fraudulent contractors exploited Assignment of Benefits agreements to steal insurance payouts from Ian victims.",
    url: 'https://www.clrblt.com/articles/florida-ian-roofing-scam',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
