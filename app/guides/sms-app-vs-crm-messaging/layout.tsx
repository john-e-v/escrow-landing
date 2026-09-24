import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Texting Clients From Your Phone vs. a CRM: Where Your Records Actually Vanish | CLRBLT',
  description: 'Personal-phone texts vanish when a crew member leaves and can\'t be searched in a dispute. Here\'s the real tradeoff vs. CRM messaging for contractors.',
  openGraph: {
    title: 'Texting Clients From Your Phone vs. a CRM: Where Your Records Actually Vanish',
    description: 'Personal-phone texts vanish when a crew member leaves and can\'t be searched in a dispute. Here\'s the real tradeoff vs. CRM messaging for contractors.',
    url: 'https://www.clrblt.com/guides/sms-app-vs-crm-messaging',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
