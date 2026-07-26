import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Delay Clause That Protects You When the Client (or Weather) Stalls the Job | CLRBLT',
  description: 'Copy this exact delay clause and delay-notice text so client-caused and weather stalls never cost you money or trigger a penalty claim you didn\'t earn.',
  openGraph: {
    title: 'The Delay Clause That Protects You When the Client (or Weather) Stalls the Job',
    description: 'Copy this exact delay clause and delay-notice text so client-caused and weather stalls never cost you money or trigger a penalty claim you didn\'t earn.',
    url: 'https://www.clrblt.com/guides/delay-clause-weather-client-caused',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
