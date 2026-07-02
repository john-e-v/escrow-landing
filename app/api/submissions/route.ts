/**
 * app/api/submissions/route.ts
 *
 * GET   — list stored project submissions for the admin view.
 * PATCH — edit a submission's details (name/email/phone/zip/projectType/
 *         budget/description/status).
 *
 * Protected: x-admin-secret header must match ADMIN_SECRET env var, same
 * pattern as /api/approve and /api/generate.
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const EDITABLE_FIELDS = ['name', 'email', 'phone', 'zip', 'projectType', 'budget', 'description', 'status'] as const;

function authorized(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret');
  return Boolean(secret) && secret === process.env.ADMIN_SECRET;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!prisma) return NextResponse.json({ error: 'Database not configured yet' }, { status: 503 });

  const submissions = await prisma.submission.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json({ submissions });
}

export async function PATCH(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!prisma) return NextResponse.json({ error: 'Database not configured yet' }, { status: 503 });

  const body = (await req.json()) as { id?: string } & Record<string, unknown>;
  const { id, ...updates } = body;
  if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });

  const data = Object.fromEntries(
    Object.entries(updates).filter(([key]) => (EDITABLE_FIELDS as readonly string[]).includes(key))
  );

  const submission = await prisma.submission.update({ where: { id }, data });
  return NextResponse.json({ submission });
}
