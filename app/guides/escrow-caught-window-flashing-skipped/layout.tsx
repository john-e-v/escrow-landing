import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Windows Went In Without Flashing. Escrow Meant the Homeowner Held Firm. | CLRBLT',
  description: 'New windows installed without proper flashing let water into the walls. Escrow meant the homeowner hadn\'t released final payment — and held the leverage to fix it.',
  openGraph: {
    title: 'The Windows Went In Without Flashing. Escrow Meant the Homeowner Held Firm.',
    description: 'New windows installed without proper flashing let water into the walls. Escrow meant the homeowner hadn\'t released final payment — and held the leverage to fix it.',
    url: 'https://www.clrblt.com/guides/escrow-caught-window-flashing-skipped',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
