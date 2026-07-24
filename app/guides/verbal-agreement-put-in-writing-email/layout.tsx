import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Confirmation Email That Turns a Verbal \'Yes\' Into a Binding Record | CLRBLT',
  description: 'The copy-paste email that turns a client\'s verbal \'yes\' into a documented record. Send it within 2 hours of any on-site agreement to prevent disputes.',
  openGraph: {
    title: 'The Confirmation Email That Turns a Verbal \'Yes\' Into a Binding Record',
    description: 'The copy-paste email that turns a client\'s verbal \'yes\' into a documented record. Send it within 2 hours of any on-site agreement to prevent disputes.',
    url: 'https://www.clrblt.com/guides/verbal-agreement-put-in-writing-email',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
