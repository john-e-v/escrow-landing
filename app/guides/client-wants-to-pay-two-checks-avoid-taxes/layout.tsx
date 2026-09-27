import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Client Wants to Pay in Two Checks to \'Keep It Under Reporting\': Why That\'s Your Problem | CLRBLT',
  description: 'A client asking you to split checks to avoid reporting puts the tax and non-payment risk on you. Here\'s how to structure payment so it stays clean and enforceable.',
  openGraph: {
    title: 'The Client Wants to Pay in Two Checks to \'Keep It Under Reporting\': Why That\'s Your Problem',
    description: 'A client asking you to split checks to avoid reporting puts the tax and non-payment risk on you. Here\'s how to structure payment so it stays clean and enforceable.',
    url: 'https://www.clrblt.com/guides/client-wants-to-pay-two-checks-avoid-taxes',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
