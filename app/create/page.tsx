'use client';

import { AgreementCreation } from '../../src/components/AgreementCreation';

// Remove the async keyword - we don't need it here
export default function CreatePage() {
  return (
    <div className="w-full">
      <AgreementCreation />
    </div>
  );
}