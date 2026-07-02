import { parsePropertySlug } from '@/lib/property';
import { ClaimForm } from './ClaimForm';

interface PageProps {
  searchParams: Promise<{ slug?: string }>;
}

export default async function ClaimPropertyPage({ searchParams }: PageProps) {
  const { slug } = await searchParams;

  if (!slug) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <p className="text-gray-600">Missing property. Go back to the property page and click &quot;Claim This Property&quot; again.</p>
      </div>
    );
  }

  const { street, cityName, stateCode, zip } = parsePropertySlug(slug);
  const displayAddress = `${street}, ${cityName} ${stateCode}${zip ? ' ' + zip : ''}`;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full max-w-xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Claim {displayAddress}</h1>
          <p className="text-gray-500 mb-8">
            Document your home&apos;s systems and appliances — down to the model number — so the record is ready for future work or an insurance claim.
          </p>
          <ClaimForm slug={slug} displayAddress={displayAddress} />
        </div>
      </div>
    </div>
  );
}
