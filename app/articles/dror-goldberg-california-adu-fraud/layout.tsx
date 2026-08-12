import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The California ADU Builder Who Took Over $6M From Homeowners | CLRBLT',
  description: 'A California ADU contractor collected over $6M from homeowners for accessory dwelling units then abandoned projects across LA, leaving liens and ruins.',
  openGraph: {
    title: 'The California ADU Builder Who Took Over $6M From Homeowners',
    description: 'A California ADU contractor collected over $6M from homeowners for accessory dwelling units then abandoned projects across LA, leaving liens and ruins.',
    url: 'https://www.clrblt.com/articles/dror-goldberg-california-adu-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
