import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required so PostHog API paths with trailing slashes reach the proxy intact.
  skipTrailingSlashRedirect: true,
  async redirects() {
    // These 7 articles were republished under corrected slugs after the
    // original invented the named individual; redirect any indexed/linked
    // old URLs to the corrected article instead of 404ing.
    const renamedArticles: [string, string][] = [
      ["benjamin-shaw-georgia-contractor-fraud", "atlanta-pool-contractor-fraud"],
      ["matthew-mancuso-washington-contractor-fraud", "bonney-lake-washington-contractor-fraud"],
      ["kansas-contractor-fraud-jerry-wilson", "wichita-kansas-contractor-fraud"],
      ["todd-brassner-utah-contractor-fraud", "centerville-utah-contractor-fraud"],
      ["roberto-vazquez-hurricane-michael-florida-fraud", "hurricane-michael-florida-contractor-fraud"],
      ["michael-esposito-tornado-kentucky-fraud", "kentucky-tornado-contractor-fraud"],
      ["andrew-esquibel-nebraska-siding-fraud", "omaha-nebraska-contractor-fraud"],
    ];
    return renamedArticles.map(([from, to]) => ({
      source: `/articles/${from}`,
      destination: `/articles/${to}`,
      permanent: true,
    }));
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },
};

export default nextConfig;
