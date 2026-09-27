import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Brigantine Contractor Who Faked Officials\' Voices to Steal $361K | CLRBLT',
  description: 'Police say Kevin Crafton stole $361K from NJ homeowners, faking fees and impersonating officials by phone — a decade after a prior fraud conviction.',
  openGraph: {
    title: 'The Brigantine Contractor Who Faked Officials\' Voices to Steal $361K',
    description: 'Police say Kevin Crafton stole $361K from NJ homeowners, faking fees and impersonating officials by phone — a decade after a prior fraud conviction.',
    url: 'https://www.clrblt.com/articles/kevin-crafton-brigantine-nj-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
