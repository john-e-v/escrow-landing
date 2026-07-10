import { PostHog } from 'posthog-node';

// Serverless-safe client: flush immediately so events aren't lost when the
// function freezes after responding. Call shutdown() after capturing.
export function createPostHogClient(): PostHog | null {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return null;
  return new PostHog(key, {
    host: 'https://us.i.posthog.com',
    flushAt: 1,
    flushInterval: 0,
  });
}
