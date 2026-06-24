import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The North Carolina Contractor Who Took Over $1.5M From Homeowners | CLRBLT',
  description: 'How a North Carolina contractor took over $1.5M in deposits from homeowners for homes never built, leading to fraud charges and criminal indictment.',
  openGraph: {
    title: 'The North Carolina Contractor Who Took Over $1.5M From Homeowners',
    description: 'How a North Carolina contractor took over $1.5M in deposits from homeowners for homes never built, leading to fraud charges and criminal indictment.',
    url: 'https://www.clrblt.com/articles/marcus-padgett-north-carolina-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
