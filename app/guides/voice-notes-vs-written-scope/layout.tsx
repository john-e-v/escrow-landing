import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voice Memos vs. Written Scope: What Actually Holds Up When a Job Goes Sideways | CLRBLT',
  description: 'Voice memos capture scope fast but rarely hold up in a dispute. Here\'s when to record, when to write it down, and how to make either one enforceable.',
  openGraph: {
    title: 'Voice Memos vs. Written Scope: What Actually Holds Up When a Job Goes Sideways',
    description: 'Voice memos capture scope fast but rarely hold up in a dispute. Here\'s when to record, when to write it down, and how to make either one enforceable.',
    url: 'https://www.clrblt.com/guides/voice-notes-vs-written-scope',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
