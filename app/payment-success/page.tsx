import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

interface PageProps {
  searchParams: Promise<{ session_id?: string }>;
}

async function getPropertySlug(sessionId: string | undefined) {
  if (!prisma || !sessionId) return null;
  try {
    const submission = await prisma.submission.findUnique({
      where: { stripeSessionId: sessionId },
      include: { property: true },
    });
    return submission?.property?.slug ?? null;
  } catch (err) {
    console.error('Failed to load submission for payment-success page:', err);
    return null;
  }
}

export default async function PaymentSuccess({ searchParams }: PageProps) {
  const { session_id } = await searchParams;
  const propertySlug = await getPropertySlug(session_id);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-12 max-w-lg text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Submitted!</h1>
        <p className="text-gray-600 mb-8">
          Your project has been submitted. Qualified contractors will review your details
          and reach out with quotes within 48 hours.
        </p>
        {propertySlug && (
          <p className="text-gray-600 mb-8 -mt-4">
            We&apos;ve also started a page for your property —{' '}
            <Link href={`/property/${propertySlug}`} className="text-blue-600 underline">
              view it here
            </Link>{' '}
            and claim it to document your home&apos;s systems and appliances for future work.
          </p>
        )}
        <Link href="/">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
