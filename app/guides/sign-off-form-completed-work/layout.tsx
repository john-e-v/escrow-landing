import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Sign-Off Form That Ends \'I Never Approved That\' Disputes | CLRBLT',
  description: 'Copy-paste milestone sign-off form that documents client approval at every phase—so \'I never approved that\' never costs you a payment again.',
  openGraph: {
    title: 'The Sign-Off Form That Ends \'I Never Approved That\' Disputes',
    description: 'Copy-paste milestone sign-off form that documents client approval at every phase—so \'I never approved that\' never costs you a payment again.',
    url: 'https://www.clrblt.com/guides/sign-off-form-completed-work',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
