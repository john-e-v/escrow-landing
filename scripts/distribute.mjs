/**
 * distribute.mjs
 * Native social distribution for GitHub Actions content scripts — plain
 * Node ESM (no bundler, no TS), so it can run in generate-article.mjs and
 * generate-guide.mjs the same way.
 *
 * Mirrors lib/distribute.ts's LinkedIn/X/Facebook logic (kept in sync by
 * hand — that file serves the Next.js app's own distribution path for the
 * markdown content engine, this one serves the git-commit-as-publish
 * scripts). Instagram and YouTube aren't included for the same reason
 * noted there: neither has a plain-text-post API. A video-generation step
 * is a separate, later project.
 *
 * Required env vars (only platforms with vars set are attempted):
 *   LINKEDIN_ACCESS_TOKEN, LINKEDIN_AUTHOR_URN
 *   X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_SECRET
 *   FACEBOOK_PAGE_ID, FACEBOOK_PAGE_ACCESS_TOKEN
 */

import crypto from 'crypto';

async function postToLinkedIn({ linkedinCaption, url }) {
  const token = process.env.LINKEDIN_ACCESS_TOKEN;
  const author = process.env.LINKEDIN_AUTHOR_URN;
  if (!token || !author) {
    return { platform: 'linkedin', status: 'skipped', detail: 'LINKEDIN_ACCESS_TOKEN or LINKEDIN_AUTHOR_URN not set' };
  }

  const body = {
    author,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: { text: `${linkedinCaption}\n\n${url}` },
        shareMediaCategory: 'NONE',
      },
    },
    visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
  };

  const res = await fetch('https://api.linkedin.com/v2/ugcPosts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) return { platform: 'linkedin', status: 'error', detail: `${res.status} ${await res.text()}` };
  return { platform: 'linkedin', status: 'posted', detail: res.headers.get('x-restli-id') ?? 'ok' };
}

function oauth1Header(method, url, consumerKey, consumerSecret, accessToken, accessSecret) {
  const oauthParams = {
    oauth_consumer_key: consumerKey,
    oauth_nonce: crypto.randomBytes(16).toString('hex'),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: accessToken,
    oauth_version: '1.0',
  };

  const encode = (s) => encodeURIComponent(s).replace(/[!*'()]/g, (c) => '%' + c.charCodeAt(0).toString(16).toUpperCase());

  const paramString = Object.keys(oauthParams)
    .sort()
    .map((k) => `${encode(k)}=${encode(oauthParams[k])}`)
    .join('&');

  const signatureBase = [method.toUpperCase(), encode(url), encode(paramString)].join('&');
  const signingKey = `${encode(consumerSecret)}&${encode(accessSecret)}`;
  const signature = crypto.createHmac('sha1', signingKey).update(signatureBase).digest('base64');

  const headerParams = { ...oauthParams, oauth_signature: signature };
  return (
    'OAuth ' +
    Object.keys(headerParams)
      .sort()
      .map((k) => `${encode(k)}="${encode(headerParams[k])}"`)
      .join(', ')
  );
}

async function postToX({ xCaption }) {
  const consumerKey = process.env.X_API_KEY;
  const consumerSecret = process.env.X_API_SECRET;
  const accessToken = process.env.X_ACCESS_TOKEN;
  const accessSecret = process.env.X_ACCESS_SECRET;
  if (!consumerKey || !consumerSecret || !accessToken || !accessSecret) {
    return { platform: 'x', status: 'skipped', detail: 'X_API_KEY/X_API_SECRET/X_ACCESS_TOKEN/X_ACCESS_SECRET not fully set' };
  }

  const url = 'https://api.twitter.com/2/tweets';
  const authHeader = oauth1Header('POST', url, consumerKey, consumerSecret, accessToken, accessSecret);

  const res = await fetch(url, {
    method: 'POST',
    headers: { Authorization: authHeader, 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: xCaption }),
  });

  if (!res.ok) return { platform: 'x', status: 'error', detail: `${res.status} ${await res.text()}` };
  const data = await res.json();
  return { platform: 'x', status: 'posted', detail: data?.data?.id ?? 'ok' };
}

async function postToFacebook({ facebookCaption, url }) {
  const pageId = process.env.FACEBOOK_PAGE_ID;
  const pageToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  if (!pageId || !pageToken) {
    return { platform: 'facebook', status: 'skipped', detail: 'FACEBOOK_PAGE_ID or FACEBOOK_PAGE_ACCESS_TOKEN not set' };
  }

  const params = new URLSearchParams({
    message: `${facebookCaption}\n\n${url}`,
    access_token: pageToken,
  });

  const res = await fetch(`https://graph.facebook.com/v19.0/${pageId}/feed`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  if (!res.ok) return { platform: 'facebook', status: 'error', detail: `${res.status} ${await res.text()}` };
  const data = await res.json();
  return { platform: 'facebook', status: 'posted', detail: data?.id ?? 'ok' };
}

/**
 * @param {{ url: string, linkedinCaption: string, xCaption: string, facebookCaption: string }} post
 */
export async function distribute(post) {
  const results = await Promise.all([
    postToLinkedIn(post).catch((e) => ({ platform: 'linkedin', status: 'error', detail: String(e) })),
    postToX(post).catch((e) => ({ platform: 'x', status: 'error', detail: String(e) })),
    postToFacebook(post).catch((e) => ({ platform: 'facebook', status: 'error', detail: String(e) })),
  ]);

  results.push(
    { platform: 'instagram', status: 'skipped', detail: 'No media pipeline yet — Instagram requires an image/video attached to every post.' },
    { platform: 'youtube', status: 'skipped', detail: 'No media pipeline yet — YouTube’s public API only supports video upload.' }
  );

  return results;
}
