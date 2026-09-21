import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Nocatee Homebuilder Who Took $8.7M and Left Homes Unfinished | CLRBLT',
  description: 'Florida homebuilder Spencer Calvert got 5 years in prison and $8.7M in restitution after abandoning Nocatee homes and misappropriating deposits.',
  openGraph: {
    title: 'The Nocatee Homebuilder Who Took $8.7M and Left Homes Unfinished',
    description: 'Florida homebuilder Spencer Calvert got 5 years in prison and $8.7M in restitution after abandoning Nocatee homes and misappropriating deposits.',
    url: 'https://www.clrblt.com/articles/spencer-calvert-pineapple-nocatee-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
