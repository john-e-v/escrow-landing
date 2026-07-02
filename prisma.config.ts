import { defineConfig } from 'prisma/config';

if (process.env.NODE_ENV !== 'production') {
  try {
    process.loadEnvFile('.env.local');
  } catch {
    // .env.local not present (e.g. CI) — rely on process.env directly
  }
}

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // Migrations/introspection need a direct (non-pooled) connection when
    // the attached Postgres provides one; falls back to the pooled URL.
    url: process.env.DIRECT_URL ?? process.env.DATABASE_URL,
  },
});
