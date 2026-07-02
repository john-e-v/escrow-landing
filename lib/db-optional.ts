import { prisma } from './prisma';

// Runs a DB operation if Postgres is attached (DATABASE_URL set); no-ops
// otherwise so submissions/property routes keep working via email alone
// until the database is provisioned in Vercel.
export async function withDb<T>(fn: (db: NonNullable<typeof prisma>) => Promise<T>): Promise<T | undefined> {
  if (!prisma) return undefined;
  try {
    return await fn(prisma);
  } catch (err) {
    console.error('Database operation failed:', err);
    return undefined;
  }
}
