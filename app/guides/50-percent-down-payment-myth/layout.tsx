import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why 50% Down Doesn\'t Protect You the Way You Think | CLRBLT',
  description: '50% down doesn\'t protect contractors — it just moves the exposure to the back half of the job. Here\'s the milestone structure that actually does.',
  openGraph: {
    title: 'Why 50% Down Doesn\'t Protect You the Way You Think',
    description: '50% down doesn\'t protect contractors — it just moves the exposure to the back half of the job. Here\'s the milestone structure that actually does.',
    url: 'https://www.clrblt.com/guides/50-percent-down-payment-myth',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
