/**
 * Daily article generator for CLRBLT.
 * Called by GitHub Actions each day. Uses Claude to research and write a new
 * documented article about contractor fraud or non-payment, then commits it.
 *
 * Requires: ANTHROPIC_API_KEY env var
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { distribute } from './distribute.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Load existing articles to avoid duplicates
const articlesPath = path.join(ROOT, 'data', 'articles.json');
const existing = JSON.parse(fs.readFileSync(articlesPath, 'utf8'));
const existingSlugs = existing.map(a => a.slug).join(', ');
const existingTitles = existing.map(a => a.title).join('\n- ');

const today = new Date();
const dateLabel = today.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

// ─── 1. Ask Claude to plan the article ────────────────────────────────────────
console.log('Generating article plan...');

const planResponse = await client.messages.create({
  model: 'claude-opus-4-8',
  max_tokens: 1536,
  messages: [{
    role: 'user',
    content: `You write articles for CLRBLT (clrblt.com), a platform that connects homeowners with contractors who use escrow-protected payments.

Articles cover REAL, DOCUMENTED cases of contractor fraud (taking deposits and disappearing, doing substandard work, insurance fraud) or legitimate contractors not being paid for completed work. Every article must reference real events with real sources.

Existing articles (do not duplicate):
- ${existingTitles}
Existing slugs: ${existingSlugs}

Choose a NEW topic. Respond with ONLY valid JSON, no markdown:
{
  "slug": "kebab-case-slug-max-6-words",
  "title": "Compelling headline under 90 chars",
  "tag": "one of: Homeowner Risk | Contractor Fraud | Contractor Rights | Insurance Fraud | Disaster Recovery",
  "excerpt": "2-sentence summary, 40-60 words",
  "metaDescription": "SEO meta description, under 155 chars",
  "event": "1-2 sentence description of the specific real event to cover",
  "location": "city/state or region",
  "year": "year the event occurred",
  "sources": [
    { "label": "Source name", "url": "https://real-url.com/article" }
  ],
  "linkedinCaption": "150-300 words, professional, substantive, no link in the text",
  "xCaption": "one idea, under 280 chars, ends with a hook not a period",
  "facebookCaption": "80-150 words, conversational, ends with a question"
}`
  }]
});

const plan = JSON.parse(planResponse.content[0].text);
console.log(`Article: "${plan.title}"`);

// ─── 2. Generate full article body ────────────────────────────────────────────
console.log('Writing article body...');

const bodyResponse = await client.messages.create({
  model: 'claude-opus-4-8',
  max_tokens: 3000,
  messages: [{
    role: 'user',
    content: `Write a detailed, factual article for CLRBLT about this real event:

Title: ${plan.title}
Event: ${plan.event}
Location: ${plan.location}, ${plan.year}

The article must:
- Be 600-900 words
- Cover: what happened, why it was easy for the fraud/non-payment to occur, what the investigation found (if any), and a section titled "What Escrow Would Have Changed" explaining how structural protection prevents this
- Use real statistics and named sources where possible
- Include 1-2 pull quotes (realistic paraphrases from press reports or officials, attributed to a role/outlet)
- End with a sources section

Respond with ONLY valid JSON, no markdown fences:
{
  "sections": [
    {
      "heading": "Section heading or null for intro",
      "body": "Paragraphs separated by \\n\\n",
      "quote": null or { "text": "quote text", "attribution": "role, outlet, date" }
    }
  ],
  "sources": [
    { "label": "Display label", "url": "https://url.com" }
  ]
}`
  }]
});

const body = JSON.parse(bodyResponse.content[0].text);

// ─── 3. Build the page.tsx file ───────────────────────────────────────────────

function escapeJsx(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function renderSection(section) {
  const paragraphs = section.body.split('\n\n').map(p =>
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

const sectionsJsx = body.sections.map(renderSection).join('\n\n');

const sourcesJsx = (body.sources || plan.sources || []).map(s =>
  `              <li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${escapeJsx(s.label)}</a></li>`
).join('\n');

const pageContent = `import Link from 'next/link';

export default function Article() {
  return (
    <>
      <nav className="navbar scrolled">
        <div className="container nav-inner">
          <a href="/" className="logo">CLRBL<span>T</span></a>
          <div className="nav-links">
            <a href="/articles">Articles</a>
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

            <h2>Sources</h2>
            <ul className="article-sources">
${sourcesJsx}
            </ul>
          </div>

          <div className="article-footer">
            <Link href="/articles" className="article-back">← Back to Articles</Link>
            <a href="/" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Submit a Project Safely →</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-content">
          <div className="footer-logo">CLRBL<span>T</span></div>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/articles">Articles</a>
            <a href="/guides">Guides</a>
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
    url: 'https://www.clrblt.com/articles/${plan.slug}',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`;

// ─── 4. Write files ───────────────────────────────────────────────────────────
const articleDir = path.join(ROOT, 'app', 'articles', plan.slug);
fs.mkdirSync(articleDir, { recursive: true });
fs.writeFileSync(path.join(articleDir, 'page.tsx'), pageContent);
fs.writeFileSync(path.join(articleDir, 'layout.tsx'), layoutContent);

// Update articles.json
const updated = [
  ...existing,
  {
    slug: plan.slug,
    title: plan.title,
    date: dateLabel,
    excerpt: plan.excerpt,
    tag: plan.tag,
  }
];
fs.writeFileSync(articlesPath, JSON.stringify(updated, null, 2) + '\n');

console.log(`✓ Written: app/articles/${plan.slug}/page.tsx`);
console.log(`✓ Written: app/articles/${plan.slug}/layout.tsx`);
console.log(`✓ Updated: data/articles.json (${updated.length} total articles)`);

// ─── 5. Distribute ─────────────────────────────────────────────────────────────
console.log('Distributing...');
const distResults = await distribute({
  url: `https://www.clrblt.com/articles/${plan.slug}`,
  linkedinCaption: plan.linkedinCaption,
  xCaption: plan.xCaption,
  facebookCaption: plan.facebookCaption,
});
distResults.forEach((r) => console.log(`  ${r.platform}: ${r.status} — ${r.detail}`));
