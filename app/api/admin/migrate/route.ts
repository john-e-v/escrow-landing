/**
 * app/api/admin/migrate/route.ts
 *
 * ONE-TIME bootstrap: creates the Property/Permit/PropertySystem/
 * PropertyOwner/Submission tables in the attached Postgres database.
 * Generated via `prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script`.
 *
 * This exists because the sandbox that wrote this code has no direct
 * connection string for the live database — only the deployed function
 * does. Delete this route once the schema is confirmed applied; it is not
 * meant to stay live (running arbitrary DDL, even admin-gated, is a
 * one-time convenience, not a permanent feature).
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const STATEMENTS = [
  `CREATE SCHEMA IF NOT EXISTS "public"`,
  `CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "county" TEXT,
    "slug" TEXT NOT NULL,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "yearBuilt" INTEGER,
    "lotSizeSqft" INTEGER,
    "heatedSqft" INTEGER,
    "bedrooms" INTEGER,
    "bathrooms" DOUBLE PRECISION,
    "propertyType" TEXT,
    "parcelNumber" TEXT,
    "assessedValue" INTEGER,
    "lastSaleYear" INTEGER,
    "dataSource" TEXT,
    "dataSyncedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
  )`,
  `CREATE TABLE "Permit" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "permitNumber" TEXT,
    "permitType" TEXT NOT NULL,
    "description" TEXT,
    "issuedDate" TIMESTAMP(3),
    "finaledDate" TIMESTAMP(3),
    "status" TEXT NOT NULL,
    "valueCents" INTEGER,
    "contractorName" TEXT,
    "source" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Permit_pkey" PRIMARY KEY ("id")
  )`,
  `CREATE TABLE "PropertySystem" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "manufacturer" TEXT,
    "modelNumber" TEXT,
    "serialNumber" TEXT,
    "installedDate" TIMESTAMP(3),
    "warrantyExpiresAt" TIMESTAMP(3),
    "notes" TEXT,
    "photoUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "addedByEmail" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "PropertySystem_pkey" PRIMARY KEY ("id")
  )`,
  `CREATE TABLE "PropertyOwner" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "verifiedAt" TIMESTAMP(3),
    CONSTRAINT "PropertyOwner_pkey" PRIMARY KEY ("id")
  )`,
  `CREATE TABLE "Submission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "projectType" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending_payment',
    "stripeSessionId" TEXT,
    "amountPaidCents" INTEGER,
    "propertyId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
  )`,
  `CREATE UNIQUE INDEX "Property_slug_key" ON "Property"("slug")`,
  `CREATE INDEX "Property_state_city_zip_idx" ON "Property"("state", "city", "zip")`,
  `CREATE INDEX "Permit_propertyId_idx" ON "Permit"("propertyId")`,
  `CREATE INDEX "PropertySystem_propertyId_idx" ON "PropertySystem"("propertyId")`,
  `CREATE INDEX "PropertyOwner_propertyId_idx" ON "PropertyOwner"("propertyId")`,
  `CREATE UNIQUE INDEX "PropertyOwner_propertyId_email_key" ON "PropertyOwner"("propertyId", "email")`,
  `CREATE UNIQUE INDEX "Submission_stripeSessionId_key" ON "Submission"("stripeSessionId")`,
  `CREATE INDEX "Submission_email_idx" ON "Submission"("email")`,
  `CREATE INDEX "Submission_status_idx" ON "Submission"("status")`,
  `ALTER TABLE "Permit" ADD CONSTRAINT "Permit_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
  `ALTER TABLE "PropertySystem" ADD CONSTRAINT "PropertySystem_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
  `ALTER TABLE "PropertyOwner" ADD CONSTRAINT "PropertyOwner_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
  `ALTER TABLE "Submission" ADD CONSTRAINT "Submission_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE SET NULL ON UPDATE CASCADE`,
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
      results.push({ statement: statement.slice(0, 60), ok: true });
    } catch (err) {
      results.push({ statement: statement.slice(0, 60), ok: false, error: err instanceof Error ? err.message : String(err) });
    }
  }

  return NextResponse.json({ results });
}
