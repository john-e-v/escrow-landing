/**
 * app/api/property/claim/route.ts
 *
 * POST /api/property/claim
 * Body: { slug: string; name: string; email: string }
 *
 * Creates the Property row if it doesn't exist yet (so claiming is how a
 * page with no licensed data can still get documented), and records a
 * PropertyOwner claim request. Verification is a manual admin step for now
 * rather than a full auth/session flow.
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { parsePropertySlug } from '@/lib/property';

export async function POST(req: NextRequest) {
  if (!prisma) return NextResponse.json({ error: 'Database not configured yet' }, { status: 503 });

  const { slug, name, email } = (await req.json()) as { slug?: string; name?: string; email?: string };
  if (!slug || !email) return NextResponse.json({ error: 'Missing slug or email' }, { status: 400 });

  const { state, city, street, zip, cityName, stateCode } = parsePropertySlug(slug);
  if (!state || !city || !street) return NextResponse.json({ error: 'Invalid property slug' }, { status: 400 });

  const property = await prisma.property.upsert({
    where: { slug },
    update: {},
    create: {
      slug,
      streetAddress: street,
      city: cityName,
      state: stateCode,
      zip: zip ?? '',
      dataSource: 'manual',
    },
  });

  const owner = await prisma.propertyOwner.upsert({
    where: { propertyId_email: { propertyId: property.id, email } },
    update: { name },
    create: { propertyId: property.id, email, name },
  });

  return NextResponse.json({ property, owner });
}
