import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient(): PrismaClient | undefined {
  if (!process.env.DATABASE_URL) return undefined;
  const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
}

// Undefined until DATABASE_URL is set (Postgres attached in Vercel). Callers
// must treat DB access as best-effort until then — see lib/db-optional.ts.
export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production' && prisma) globalForPrisma.prisma = prisma;
