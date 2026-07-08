/**
 * ONE-TIME: clears dataSyncedAt for a given property slug so the next page
 * view re-syncs from the county source immediately instead of waiting out
 * the normal 7-day cache. Delete this route once used — see the pattern
 * this follows in git history (the earlier one-time migration routes).
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret');
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!prisma) return NextResponse.json({ error: 'Database not configured yet' }, { status: 503 });

  const { slug } = await req.json();
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

  const property = await prisma.property.update({
    where: { slug },
    data: { dataSyncedAt: null },
  });

  return NextResponse.json({ ok: true, property });
}
