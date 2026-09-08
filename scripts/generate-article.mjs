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

// ─── 1. Ask Claude to research and plan the article ───────────────────────────
// Both calls get the web_search tool. Claude must find an actual, citable
// incident before writing anything — it is not allowed to invent one.
const WEB_SEARCH_TOOL = { type: 'web_search_20250305', name: 'web_search', max_uses: 5 };

function extractText(content) {
  return content
    .filter((b) => b.type === 'text')
    .map((b) => b.text)
    .join('');
}

function extractJson(text) {
  // The model may wrap JSON in prose when it has to explain search results;
  // pull out the last {...} block.
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error(`No JSON object found in response:\n${text}`);
  return JSON.parse(match[0]);
}

console.log('Researching a real case via web search...');

const planResponse = await client.messages.create({
  model: 'claude-opus-4-8',
  max_tokens: 4096,
  tools: [WEB_SEARCH_TOOL],
  messages: [{
    role: 'user',
    content: `You write articles for CLRBLT (clrblt.com), a platform that connects homeowners with contractors who use escrow-protected payments.

Articles cover REAL, DOCUMENTED cases of contractor fraud (taking deposits and disappearing, doing substandard work, insurance fraud) or legitimate contractors not being paid for completed work.

You MUST use the web_search tool to find an actual reported case — a real news article, court record, or state AG/DOJ/licensing-board press release naming a real, specific defendant: an individual person or a specific named company. Do NOT invent a name, dollar amount, or incident. Every URL you cite must be a URL actually returned by your web_search calls in this conversation — never a URL you recall or guess at.

REJECTED SHAPE — do not write this kind of article: a generic piece about "contractor fraud after [disaster]" that only cites AG consumer-alert pages, BBB warnings, or FEMA background, with no specific named defendant. A real disaster or a real general warning from a regulator is not a substitute for a specific prosecuted or reported case. If your searches for one angle turn up only general warnings and no named defendant, abandon that angle entirely and search a different state, disaster, or time period until you find an article, press release, or court record that names a specific person or company. Do not fall back to publishing the general-warnings version.

Existing articles (do not duplicate):
- ${existingTitles}
Existing slugs: ${existingSlugs}

Search for a NEW, real, undocumented-by-us case with a specific named defendant. Once you've found and verified one with real search results, respond with ONLY valid JSON (no markdown fences), as the last thing in your reply:
{
  "slug": "kebab-case-slug-max-6-words",
  "title": "Compelling headline under 90 chars",
  "tag": "one of: Homeowner Risk | Contractor Fraud | Contractor Rights | Insurance Fraud | Disaster Recovery",
  "excerpt": "2-sentence summary, 40-60 words",
  "metaDescription": "SEO meta description, under 155 chars",
  "defendantName": "the specific real person or company name at the center of the case, exactly as named in your sources — never generic like 'a contractor'",
  "event": "1-2 sentence description of the specific real event, as found in your search results",
  "location": "city/state or region",
  "year": "year the event occurred",
  "sources": [
    { "label": "Source name", "url": "https://actual-url-from-search-results.com/article" }
  ],
  "linkedinCaption": "150-300 words, professional, substantive, no link in the text",
  "xCaption": "one idea, under 280 chars, ends with a hook not a period",
  "facebookCaption": "80-150 words, conversational, ends with a question"
}`
  }]
});

const plan = extractJson(extractText(planResponse.content));
if (!plan.sources || plan.sources.length === 0) {
  throw new Error('Plan has no sources — refusing to generate an unsourced article.');
}
if (!plan.defendantName || /^(a|an|the)\s/i.test(plan.defendantName.trim())) {
  throw new Error(`Plan has no specific named defendant (got: "${plan.defendantName}") — refusing to generate a generic trend piece.`);
}
console.log(`Article: "${plan.title}"`);
console.log(`Defendant: ${plan.defendantName}`);
console.log(`Sources found: ${plan.sources.map((s) => s.url).join(', ')}`);

// ─── 2. Generate full article body ────────────────────────────────────────────
console.log('Writing article body...');

const bodyResponse = await client.messages.create({
  model: 'claude-opus-4-8',
  max_tokens: 4096,
  tools: [WEB_SEARCH_TOOL],
  messages: [{
    role: 'user',
    content: `Write a detailed, factual article for CLRBLT about this real, documented event:

Title: ${plan.title}
Defendant: ${plan.defendantName}
Event: ${plan.event}
Location: ${plan.location}, ${plan.year}
Sources already confirmed real: ${JSON.stringify(plan.sources)}

Use the web_search tool as needed to confirm additional details or find direct quotes from officials, prosecutors, or news coverage of this specific case. Do not paraphrase or invent quotes — only use a quote if you can attribute it to a specific real source you found via search, and give the real outlet/date. If no real quote is available, omit the quote entirely rather than fabricating one.

The article must:
- Be 600-900 words
- Name "${plan.defendantName}" explicitly in the body text (not just implied) — the first section must state their name, not refer to them only as "a contractor" or "the company." Every fact you attribute to them must come from the confirmed sources or your own web_search results, not invention.
- Cover: what happened, why it was easy for the fraud/non-payment to occur, what the investigation found (if any), and a section titled "What Escrow Would Have Changed" explaining how structural protection prevents this
- Use real statistics and named sources where possible
- End with a sources section listing only URLs that are either from the confirmed list above or that you found yourself via web_search in this conversation

Respond with ONLY valid JSON, no markdown fences, as the last thing in your reply:
{
  "sections": [
    {
      "heading": "Section heading or null for intro",
      "body": "Paragraphs separated by \\n\\n",
      "quote": null or { "text": "real quote text", "attribution": "role, real outlet, date" }
    }
  ],
  "sources": [
    { "label": "Display label", "url": "https://real-url.com" }
  ]
}`
  }]
});

const body = extractJson(extractText(bodyResponse.content));
if (!body.sources || body.sources.length === 0) {
  body.sources = plan.sources;
}

// Hard guard against the "generic body, name only in the slug" pattern —
// require the defendant's name to actually appear in the rendered text.
const bodyText = body.sections.map((s) => `${s.heading ?? ''} ${s.body}`).join(' ');
const nameToken = plan.defendantName.trim().split(/\s+/).pop().replace(/[^a-zA-Z0-9]/g, '');
if (!nameToken || !bodyText.toLowerCase().includes(nameToken.toLowerCase())) {
  throw new Error(`Defendant "${plan.defendantName}" does not appear in the generated body text — refusing to publish a genericized article.`);
}

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
