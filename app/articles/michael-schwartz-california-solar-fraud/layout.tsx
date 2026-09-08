import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The California Solar Installer Who Took $10M and Left Systems Dark | CLRBLT',
  description: 'How a California solar installer collected millions from homeowners for systems that were never completed, connected, or turned on.',
  openGraph: {
    title: 'The California Solar Installer Who Took $10M and Left Systems Dark',
    description: 'How a California solar installer collected millions from homeowners for systems that were never completed, connected, or turned on.',
    url: 'https://www.clrblt.com/articles/michael-schwartz-california-solar-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
