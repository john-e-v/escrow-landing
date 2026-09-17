import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Management App vs. Email Folder: Where Your Signed Docs Actually Break | CLRBLT',
  description: 'An email folder holds your contracts until a dispute needs proof of version and timestamp. Here\'s where document storage breaks and what a purpose-built system fixes.',
  openGraph: {
    title: 'Contract Management App vs. Email Folder: Where Your Signed Docs Actually Break',
    description: 'An email folder holds your contracts until a dispute needs proof of version and timestamp. Here\'s where document storage breaks and what a purpose-built system fixes.',
    url: 'https://www.clrblt.com/guides/contract-management-app-vs-email-folder',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
