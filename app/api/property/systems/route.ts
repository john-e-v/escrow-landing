/**
 * app/api/property/systems/route.ts
 *
 * GET  /api/property/systems?slug=...   — list documented systems for a property.
 * POST /api/property/systems            — add one (appliance/system record,
 *                                          down to model + serial number).
 *
 * The property must already exist (created via /api/property/claim) — this
 * is intentionally unauthenticated for now, matching the "claim is a
 * request, not a login" scope of this pass.
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  if (!prisma) return NextResponse.json({ error: 'Database not configured yet' }, { status: 503 });

  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

  const property = await prisma.property.findUnique({ where: { slug }, include: { systems: true } });
  if (!property) return NextResponse.json({ systems: [] });

  return NextResponse.json({ systems: property.systems });
}

export async function POST(req: NextRequest) {
  if (!prisma) return NextResponse.json({ error: 'Database not configured yet' }, { status: 503 });

  const body = (await req.json()) as {
    slug?: string;
    category?: string;
    name?: string;
    manufacturer?: string;
    modelNumber?: string;
    serialNumber?: string;
    installedDate?: string;
    notes?: string;
    addedByEmail?: string;
  };

  const { slug, category, name } = body;
  if (!slug || !category || !name) {
    return NextResponse.json({ error: 'Missing slug, category, or name' }, { status: 400 });
  }

  const property = await prisma.property.findUnique({ where: { slug } });
  if (!property) return NextResponse.json({ error: 'Claim this property before documenting systems' }, { status: 404 });

  const system = await prisma.propertySystem.create({
    data: {
      propertyId: property.id,
      category,
      name,
      manufacturer: body.manufacturer,
      modelNumber: body.modelNumber,
      serialNumber: body.serialNumber,
      installedDate: body.installedDate ? new Date(body.installedDate) : undefined,
      notes: body.notes,
      addedByEmail: body.addedByEmail,
    },
  });

  return NextResponse.json({ system });
}
