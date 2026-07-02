/**
 * app/api/admin/migrate/route.ts
 *
 * ONE-TIME bootstrap: adds streetAddress/city/state columns to Submission.
 * Generated via `prisma migrate diff --from-schema <prev> --to-schema prisma/schema.prisma --script`.
 *
 * Delete this route once confirmed applied — see the earlier occurrence of
 * this pattern in git history for context on why it exists at all (no
 * direct DB connection string in the sandbox that writes this code).
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const STATEMENTS = [
  `ALTER TABLE "Submission" ADD COLUMN "city" TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE "Submission" ADD COLUMN "state" TEXT NOT NULL DEFAULT ''`,
  `ALTER TABLE "Submission" ADD COLUMN "streetAddress" TEXT NOT NULL DEFAULT ''`,
];

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret');
  if (!secret || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!prisma) return NextResponse.json({ error: 'Database not configured yet' }, { status: 503 });

  const results: { statement: string; ok: boolean; error?: string }[] = [];
  for (const statement of STATEMENTS) {
    try {
      await prisma.$executeRawUnsafe(statement);
      results.push({ statement, ok: true });
    } catch (err) {
      results.push({ statement, ok: false, error: err instanceof Error ? err.message : String(err) });
    }
  }

  return NextResponse.json({ results });
}
