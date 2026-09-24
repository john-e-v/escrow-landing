import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Dansville Contractor Who Took a $10K Deposit for a Disabled Homeowner\'s Lift | CLRBLT',
  description: 'James S. Johnson Jr. was charged with felony grand larceny after taking a $10K deposit for a wheelchair-access tram he never built in Urbana, NY.',
  openGraph: {
    title: 'The Dansville Contractor Who Took a $10K Deposit for a Disabled Homeowner\'s Lift',
    description: 'James S. Johnson Jr. was charged with felony grand larceny after taking a $10K deposit for a wheelchair-access tram he never built in Urbana, NY.',
    url: 'https://www.clrblt.com/articles/james-johnson-dansville-ny-contractor-fraud',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
