/**
 * pillars.mjs
 * The clrblt.com longtail SEO content strategy — homeowner pre-project
 * research (A-D) and contractor admin/ops software shopping (E-G), plus a
 * lower-frequency cross-audience bridge format.
 *
 * Each pillar's promptBody plugs into a shared plan+body two-step
 * generation, matching the existing generate-article.mjs pattern. Every
 * pillar requires the post to open with a real number, checklist, or
 * verdict tied to an actual search query — never just a hook.
 */

export const VOICE = `You write for clrblt.com, a platform that connects homeowners with contractors who accept escrow-protected payments (Paykeeper).

VOICE: Grounded, direct, never performative or preachy. Short sentences. No jargon without explaining it. No hedging. The reader is a capable adult figuring out a real decision — treat them that way.

THE EDITORIAL THREAD: every piece of software a company uses can be built in-house and tailored to its needs — except one: the escrow payment system, which must be third-party to be legitimate. That is the structural insight clrblt.com is built on. Work this in only where the post's own logic leads there naturally — never as a bolted-on pitch.

FORMAT RULE THAT MATTERS MOST: the post must open with a real number, a real verdict, or the first line of a checklist — not a scene-setting hook. Whatever earns the click on the actual search query, on line one.`;

export const PILLARS = {
  A: {
    letter: 'A',
    name: 'Is It Worth It',
    audience: 'homeowner',
    intentPattern: '"is a [project] worth it", "[project] resale value", "should I [project] before selling"',
    format: 'Direct verdict up top, then the math, then the catch.',
    examples: [
      "Is a bathroom remodel worth it if you're selling in 2 years?",
      'Is it worth adding a bedroom vs. finishing a basement?',
      'Is ICF construction worth the upfront cost vs. standard framing?',
      'Is a whole-home generator worth it?',
      'Is refinancing to fund a renovation worth it right now?',
    ],
    contentRules: `PILLAR A — Is It Worth It (cost/ROI decisions)

Open with the verdict in the first sentence: yes, no, or "it depends on X" — named immediately, not built up to.
Then the math that supports it: real dollar ranges, resale-value percentages, payback timelines.
Then the catch — the condition under which the verdict flips.
CTA: clrblt.com/create ("Get matched with contractors who accept escrow payments").`,
  },
  B: {
    letter: 'B',
    name: 'How Much / How Long',
    audience: 'homeowner',
    intentPattern: '"how much does [project] cost", "how long does [project] take", "[project] cost per square foot"',
    format: 'A real number range up front, then what moves the number.',
    examples: [
      'How much does a kitchen remodel cost in 2026?',
      'How long does a permit take for an ADU?',
      'How much does radiant floor heating add to a new build?',
      'What does a foundation repair actually cost, and why the range is so wide?',
      'How much should a change order cost you — and when it shouldn’t cost anything?',
    ],
    contentRules: `PILLAR B — How Much / How Long (cost & timeline anchoring)

Open with a real number range in the first sentence — this is what earns the click and the share.
Then explain what moves the number: scope, materials, region, permitting, labor market.
Be specific about WHY the range is wide, not just that it is.
CTA: clrblt.com/create ("Get matched with contractors who accept escrow payments").`,
  },
  C: {
    letter: 'C',
    name: 'Before You Hire',
    audience: 'homeowner',
    intentPattern: '"questions to ask a contractor before hiring", "do I need a permit for [project]", "how to check if a contractor is licensed"',
    format: 'Checklist/script format — screenshot-and-save shareability.',
    examples: [
      "7 questions to ask before you sign a contractor's estimate",
      'Do you need a permit to replace your own deck?',
      'How to check contractor license and insurance in under 5 minutes',
      'What a real payment schedule should look like',
      'Why "just Venmo me the deposit" should end the conversation',
    ],
    contentRules: `PILLAR C — Before You Hire (vetting & protection)

Open as a numbered checklist or a direct script the reader can literally use — not a narrative lead-in.
Every item must be something the reader can act on today: a question to ask, a site to check, a document to request.
End with the one red flag that shows up in almost every bad hire, stated plainly.
CTA: clrblt.com/create ("Get matched with contractors who accept escrow payments").`,
  },
  D: {
    letter: 'D',
    name: 'The Hidden Cost',
    audience: 'homeowner',
    intentPattern: '"[project] problems nobody tells you", "[project] gone wrong", "why did my [project] cost more than quoted"',
    format: 'Story-driven, postmortem-style, pointed at a real query.',
    examples: [
      'Why your renovation always costs 20% more than the quote',
      'The permit mistake that stalls half of all ADU projects',
      'What actually happens when a contractor walks off a job mid-project',
      'The one clause missing from most homeowner contracts',
      'Why "final payment before final walkthrough" is how people get burned',
    ],
    contentRules: `PILLAR D — The Hidden Cost (what nobody tells you)

Open with the specific failure stated as fact — not "have you ever wondered." A postmortem tone: this happened, here's why.
Ground it in a realistic scenario with real numbers/timelines, not a vague warning.
Close with the structural fix — what would have actually prevented it (escrow/milestone payment where it fits honestly).
CTA: clrblt.com/create ("Get matched with contractors who accept escrow payments").`,
  },
  E: {
    letter: 'E',
    name: 'Get Paid Faster',
    audience: 'contractor',
    intentPattern: '"how to avoid non-payment as a contractor", "escrow vs deposit construction", "how to get paid faster on construction projects"',
    format: 'Direct operational advice, escrow positioned as the fix, not the pitch.',
    examples: [
      'Escrow vs. deposit: what actually protects a contractor',
      'Why "50% down" doesn’t protect you the way you think it does',
      'What to do the moment a client stops responding before final payment',
      'How milestone-based payment structures cut disputes in half',
      'The real reason payment apps (Venmo/Zelle) are a liability, not a convenience',
    ],
    contentRules: `PILLAR E — Get Paid Faster (payments & escrow, contractor-facing)

Written to a contractor who already runs a business — not looking for inspiration, looking for an operational fix.
Open with the direct operational answer, then the reasoning.
Escrow/milestone payment is the fix, presented as a structural answer to a real payment-collection problem — never as an ad for clrblt.com.
CTA: clrblt.com/master ("See contractor plans").`,
  },
  F: {
    letter: 'F',
    name: 'Tool Stack Teardown',
    audience: 'contractor',
    intentPattern: '"best software for construction change orders", "contractor CRM comparison", "how to manage multiple subs on one job"',
    format: 'Honest comparison/teardown — trusted because it doesn’t read like an ad.',
    examples: [
      'Change order tracking: spreadsheet vs. purpose-built software',
      'What most contractor CRMs get wrong about job scoping',
      'The real cost of managing payments across 4 different apps',
      'How to structure your tech stack so escrow is the only third-party piece',
      'What "verify then trust" looks like in a homeowner-facing workflow',
    ],
    contentRules: `PILLAR F — Tool Stack Teardown (software comparisons, contractor-facing)

Write like an honest operator comparing real approaches, not an ad. Name real tradeoffs, including ones that don't favor clrblt.com.
Do NOT name specific competitor product names — compare categories/approaches (spreadsheet vs. purpose-built, all-in-one vs. best-of-breed) rather than branded tools, to avoid unreviewed competitive claims going out with no editorial gate.
The clrblt.com angle: escrow should be the one third-party piece in an otherwise in-house-tailored stack.
CTA: clrblt.com/master ("See contractor plans").`,
  },
  G: {
    letter: 'G',
    name: 'Dispute-Proofing',
    audience: 'contractor',
    intentPattern: '"how to document a change order", "contractor liability protection", "what to include in a construction contract to avoid disputes"',
    format: 'Templates, scripts, screenshot-worthy checklists.',
    examples: [
      'The 3-line change order text that holds up in a dispute',
      'What to photograph on every job, every day',
      'How to structure a contract so scope creep can’t happen for free',
      'The one paragraph missing from most subcontractor agreements',
    ],
    contentRules: `PILLAR G — Dispute-Proofing (contracts & documentation, contractor-facing)

Open with the literal template/script text the reader can copy today — quote it directly in the first section.
Every recommendation must be something a contractor can implement on their very next job, not a general principle.
CTA: clrblt.com/master ("See contractor plans").`,
  },
  BRIDGE: {
    letter: 'BRIDGE',
    name: 'The Escrow Effect',
    audience: 'both',
    intentPattern: 'bottom-funnel connective tissue, not a search-query match',
    format: 'Case-study format — a real or realistic composite project where escrow-first payment prevented a specific failure.',
    examples: [],
    contentRules: `THE ESCROW EFFECT — cross-audience bridge (bottom-funnel)

A real or realistic composite project where escrow-first payment prevented the exact kind of failure described in Pillar D (homeowner) or Pillar E (contractor) posts. clrblt.com's actual mechanism gets to be the hero of the story without ever reading as an ad — because the story does the work, not a pitch.
Open with the outcome (what was prevented / what went right), then walk through why.
CTA: clrblt.com/create for a homeowner-angled bridge, clrblt.com/master for a contractor-angled one — pick based on which side of the story is the protagonist.`,
  },
};

// Indexed by day-1, i.e. Monday(1)..Saturday(6). Sunday(0) is handled
// separately below, alternating between Pillar G and a Bridge post (roughly
// biweekly) rather than running the Bridge every single week — the
// strategy's "2-3x/week" cadence for the bridge is a fast-follow once the
// core rotation is proven, not part of this first build.
const ROTATION = ['B', 'E', 'C', 'F', 'D', 'A'];

export function pillarForDate(date = new Date()) {
  const day = date.getDay(); // 0 = Sunday .. 6 = Saturday
  if (day === 0) {
    // ISO week parity: even week -> Bridge, odd week -> Pillar G.
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const week = Math.ceil(((date - oneJan) / 86400000 + oneJan.getDay() + 1) / 7);
    return week % 2 === 0 ? PILLARS.BRIDGE : PILLARS.G;
  }
  return PILLARS[ROTATION[day - 1]];
}
