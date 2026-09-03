import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting Software vs. Payroll Add-On: Where Crew Costs Actually Get Buried | CLRBLT',
  description: 'Payroll add-ons hide crew costs inside overhead. Here\'s where accounting-integrated payroll breaks job-level labor tracking, and when a standalone approach wins.',
  openGraph: {
    title: 'Accounting Software vs. Payroll Add-On: Where Crew Costs Actually Get Buried',
    description: 'Payroll add-ons hide crew costs inside overhead. Here\'s where accounting-integrated payroll breaks job-level labor tracking, and when a standalone approach wins.',
    url: 'https://www.clrblt.com/guides/accounting-software-vs-payroll-add-on',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
