/**
 * Daily guide generator for clrblt.com.
 * Called by GitHub Actions each day. Generates 3 posts per run, rotating
 * through the longtail SEO content pillars (A-G, see pillars.mjs) — each
 * post is a self-contained page written directly to app/guides/{slug}/,
 * committed with no review gate (publish IS the commit), and distributed
 * to whichever social platforms have credentials configured.
 *
 * Requires: ANTHROPIC_API_KEY env var
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pillarsForDate } from './pillars.mjs';
import { distribute } from './distribute.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const guidesPath = path.join(ROOT, 'data', 'guides.json');
let guides = JSON.parse(fs.readFileSync(guidesPath, 'utf8'));

const today = new Date();
const dateLabel = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

function escapeJsx(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function renderSection(section) {
  const paragraphs = section.body.split('\n\n').map((p) =>
    `            <p>${escapeJsx(p.trim())}</p>`
  ).join('\n');

  const quote = section.quote ? `
            <blockquote className="article-quote">
              ${escapeJsx(section.quote.text)}
              <cite>— ${escapeJsx(section.quote.attribution)}</cite>
            </blockquote>` : '';

  const heading = section.heading ? `\n            <h2>${escapeJsx(section.heading)}</h2>` : '';

  return `${heading}\n${paragraphs}${quote}`;
}

async function generateOne(pillar) {
  console.log(`\n[Pillar ${pillar.letter}] ${pillar.name}`);

  const existingTitles = guides.map((g) => g.title).join('\n- ');
  const existingSlugs = guides.map((g) => g.slug).join(', ');

  // ─── 1. Plan the post (topic + metadata + platform captions) ───────────────
  const planResponse = await client.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 1536,
    messages: [{
      role: 'user',
      content: `You write for clrblt.com, a platform connecting homeowners with contractors who accept escrow-protected payments.

${pillar.contentRules}

Real search-intent pattern this pillar targets: ${pillar.intentPattern}
Format: ${pillar.format}
Example angles (for inspiration — do not just copy one verbatim, and do not repeat a topic already covered):
- ${pillar.examples.join('\n- ') || '(no fixed examples for this format — invent a fitting one)'}

Existing guides (do not duplicate the topic):
- ${existingTitles || '(none yet)'}
Existing slugs: ${existingSlugs || '(none yet)'}

Choose a NEW specific topic for today's post. Respond with ONLY valid JSON, no markdown fences:
{
  "slug": "kebab-case-slug-max-6-words",
  "title": "Compelling headline under 90 chars, matching the real search query",
  "tag": "short 2-4 word label for this post, e.g. 'Cost & ROI' or 'Contractor Ops'",
  "excerpt": "2-sentence summary, 40-60 words",
  "metaDescription": "SEO meta description under 155 chars, opening with the real number/verdict if applicable",
  "linkedinCaption": "150-300 words, professional, substantive, no link in the text",
  "xCaption": "one idea, under 280 chars, ends with a hook not a period",
  "facebookCaption": "80-150 words, conversational, ends with a question"
}`
    }]
  });

  const plan = JSON.parse(planResponse.content[0].text);
  console.log(`  "${plan.title}"`);

  // ─── 2. Generate full post body ─────────────────────────────────────────────
  const bodyResponse = await client.messages.create({
    model: 'claude-opus-4-8',
    max_tokens: 3000,
    messages: [{
      role: 'user',
      content: `Write the full post body for clrblt.com.

${pillar.contentRules}

Title: ${plan.title}
Excerpt: ${plan.excerpt}

The body must:
- Be 400-700 words
- Open with a real number, a real verdict, or the first line of a checklist — on line one, not after a scene-setting intro
- Match the format described above for this pillar
- End with a natural, non-pitchy lead-in to the CTA described in the pillar rules

Respond with ONLY valid JSON, no markdown fences:
{
  "sections": [
    {
      "heading": "Section heading or null for intro",
      "body": "Paragraphs separated by \\n\\n",
      "quote": null or { "text": "quote text", "attribution": "role/context" }
    }
  ],
  "ctaText": "Button text matching the pillar's CTA",
  "ctaUrl": "/create or /master, matching the pillar's CTA"
}`
    }]
  });

  const body = JSON.parse(bodyResponse.content[0].text);

  // ─── 3. Build the page.tsx file ─────────────────────────────────────────────
  const sectionsJsx = body.sections.map(renderSection).join('\n\n');
  const ctaUrl = body.ctaUrl || (pillar.audience === 'contractor' ? '/master' : '/create');
  const ctaText = body.ctaText || 'Get Escrow-Protected Bids';

  const pageContent = `import Link from 'next/link';

export default function Guide() {
  return (
    <>
      <nav className="navbar scrolled">
        <div className="container nav-inner">
          <a href="/" className="logo">CLRBL<span>T</span></a>
          <div className="nav-links">
            <a href="/guides">Guides</a>
            <a href="/" className="nav-cta">Get Started</a>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ paddingBottom: 40, paddingTop: 120 }}>
        <div className="container hero-content">
          <div className="hero-badge">${escapeJsx(plan.tag)} · ${dateLabel}</div>
          <h1>${escapeJsx(plan.title)}</h1>
          <p className="hero-subtitle">${escapeJsx(plan.excerpt)}</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">
${sectionsJsx}
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="${ctaUrl}" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>${escapeJsx(ctaText)} →</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div className="footer-logo">CLRBL<span>T</span></div>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/guides">Guides</a>
            <a href="/articles">Articles</a>
            <a href="/contact">Contact</a>
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
`;

  const layoutContent = `import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${plan.title.replace(/'/g, "\\'")} | CLRBLT',
  description: '${plan.metaDescription.replace(/'/g, "\\'")}',
  openGraph: {
    title: '${plan.title.replace(/'/g, "\\'")}',
    description: '${plan.metaDescription.replace(/'/g, "\\'")}',
    url: 'https://www.clrblt.com/guides/${plan.slug}',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;

  // ─── 4. Write files ─────────────────────────────────────────────────────────
  const guideDir = path.join(ROOT, 'app', 'guides', plan.slug);
  fs.mkdirSync(guideDir, { recursive: true });
  fs.writeFileSync(path.join(guideDir, 'page.tsx'), pageContent);
  fs.writeFileSync(path.join(guideDir, 'layout.tsx'), layoutContent);

  guides = [
    ...guides,
    {
      slug: plan.slug,
      title: plan.title,
      date: dateLabel,
      excerpt: plan.excerpt,
      tag: plan.tag,
      pillar: pillar.letter,
      audience: pillar.audience,
    },
  ];
  fs.writeFileSync(guidesPath, JSON.stringify(guides, null, 2) + '\n');

  console.log(`  ✓ Written: app/guides/${plan.slug}/`);

  // ─── 5. Distribute ───────────────────────────────────────────────────────────
  const results = await distribute({
    url: `https://www.clrblt.com/guides/${plan.slug}`,
    linkedinCaption: plan.linkedinCaption,
    xCaption: plan.xCaption,
    facebookCaption: plan.facebookCaption,
  });
  results.forEach((r) => console.log(`  ${r.platform}: ${r.status} — ${r.detail}`));
}

async function main() {
  const pillars = pillarsForDate(today, 3);
  console.log(`Today's pillars: ${pillars.map((p) => p.letter).join(', ')}`);

  for (const pillar of pillars) {
    try {
      await generateOne(pillar);
    } catch (err) {
      console.error(`[Pillar ${pillar.letter}] ✗ Failed:`, err instanceof Error ? err.message : err);
    }
    // Brief pause between calls to avoid rate limits.
    await new Promise((r) => setTimeout(r, 1500));
  }

  console.log(`\n✓ Updated: data/guides.json (${guides.length} total guides)`);
}

main();
