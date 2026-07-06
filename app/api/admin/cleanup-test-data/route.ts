/**
 * ONE-TIME: removes the specific test properties/submissions created while
 * verifying the checkout->property and county-sync features. Admin-gated,
 * meant to be deleted right after use — see prior migration-route commits
 * for the same pattern.
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const TEST_SLUGS = [
  'co/thornton/2847-ridgecrest-drive-80229',
  'co/boulder/42-verification-lane-80301',
  'co/thornton/13838-downing-st-80229',
];
const TEST_EMAILS = ['claude-test@clrblt.com', 'claude-e2e-test@clrblt.com'];

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret');
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!prisma) return NextResponse.json({ error: 'Database not configured yet' }, { status: 503 });

  const submissions = await prisma.submission.deleteMany({ where: { email: { in: TEST_EMAILS } } });
  const properties = await prisma.property.deleteMany({ where: { slug: { in: TEST_SLUGS } } });

  return NextResponse.json({ deletedSubmissions: submissions.count, deletedProperties: properties.count });
}
