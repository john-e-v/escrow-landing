import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Job Photos in the Cloud vs. Locked in an App: Where Your Evidence Actually Lives | CLRBLT',
  description: 'Photos win disputes only if you can find them. Generic cloud storage vs. field-app photo logs compared — and where each fails when a client challenges your work.',
  openGraph: {
    title: 'Job Photos in the Cloud vs. Locked in an App: Where Your Evidence Actually Lives',
    description: 'Photos win disputes only if you can find them. Generic cloud storage vs. field-app photo logs compared — and where each fails when a client challenges your work.',
    url: 'https://www.clrblt.com/guides/photo-storage-cloud-vs-app-silo',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
