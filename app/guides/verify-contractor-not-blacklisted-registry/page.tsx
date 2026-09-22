import Link from 'next/link';

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
          <div className="hero-badge">Vetting &amp; Protection · September 2026</div>
          <h1>How to Check if a Contractor Is on Your State&apos;s Unlicensed or Barred List</h1>
          <p className="hero-subtitle">An active license isn&apos;t the whole story—some contractors operate under cease-and-desist orders or sit on a state&apos;s barred list. This checklist shows you the exact registries to search before you sign, so a banned operator doesn&apos;t end up on your job.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Start here, before you sign anything:</p>
            <p>1. Search your state contractor licensing board&apos;s public license lookup by the contractor&apos;s exact business name AND the owner&apos;s personal name.
2. Search the same board&apos;s &quot;disciplinary actions&quot; or &quot;enforcement&quot; database separately—a license can be active while an action is pending.
3. Search your state&apos;s cease-and-desist / unlicensed activity registry.
4. Check the debarred / barred parties list (state procurement and, for anything federal-adjacent, SAM.gov).
5. Run the business name through your state court records portal for open judgments and liens.
6. Ask the contractor, in writing, for their license number and the name the license is held under—then confirm those match what you found in steps 1–2.</p>
            <p>Do all six. A banned operator often passes step 1 and fails steps 2 through 4.</p>


            <h2>The exact registries to search</h2>
            <p>License lookup: Every state with contractor licensing publishes a free &quot;verify a license&quot; or &quot;license lookup&quot; tool. Search the board&apos;s official .gov site—not a third-party aggregator that may show stale data. Type the license number if you have it; otherwise search by business name and by the individual owner&apos;s last name, because barred operators frequently re-register under a new LLC while keeping the same person in charge.</p>
            <p>Disciplinary and enforcement actions: This is a separate database on most boards. Look for tabs labeled &quot;Enforcement,&quot; &quot;Disciplinary Actions,&quot; &quot;Legal Actions,&quot; or &quot;Citations.&quot; A contractor can hold a valid license and still have an open citation, a suspended sub-license, or a settled complaint that reveals a pattern.</p>
            <p>Cease-and-desist / unlicensed activity: Many boards maintain a public list of people ordered to stop operating without a license. Search the person&apos;s name here even if a business entity appears licensed elsewhere.</p>
            <p>Barred and debarred lists: State procurement offices publish a &quot;debarred vendors&quot; or &quot;excluded parties&quot; list. For any project touching federal funds, search SAM.gov&apos;s exclusion records. Being on either list means a government body has already determined this party can&apos;t be trusted with contracts.</p>
            <p>Court records: Your state&apos;s public court portal (or the county clerk&apos;s site) shows civil judgments, mechanic&apos;s liens filed against the contractor, and bankruptcy filings. A string of judgments from suppliers or former clients is the paper trail a bad hire leaves behind.</p>
            <blockquote className="article-quote">
              The name on the license and the name signing your contract have to be the same person. When they aren&apos;t, that&apos;s usually where the trouble started.
              <cite>— State licensing board investigator</cite>
            </blockquote>


            <h2>Documents to request today</h2>
            <p>Ask for these in writing and wait for actual copies—not a verbal &quot;yeah, I&apos;ve got that&quot;:</p>
            <p>- A copy of the license itself, showing the exact legal name it&apos;s issued under.
- A current certificate of insurance (general liability and workers&apos; comp) with your project listed or the carrier named so you can call to confirm it&apos;s active.
- Proof of bond, with the bond number, so you can verify it hasn&apos;t been exhausted by prior claims.
- Three recent client references from the last 12 months—not a highlight reel from five years ago.</p>
            <p>Cross-check every name and number on these documents against what the registries told you. If the insurance is under one entity, the license under another, and the contract under a third, stop.</p>


            <h2>The one red flag in almost every bad hire</h2>
            <p>Pressure to skip the paperwork and pay a large deposit in cash or by instant transfer before any work begins. Barred and unlicensed operators can&apos;t survive scrutiny, so they push for speed and money up front—then vanish or stall the moment your funds clear. A legitimate contractor expects you to verify them and has no problem with staged, protected payments.</p>
            <p>If you&apos;d rather not run six searches on every quote, start with contractors who&apos;ve already agreed to work under protected terms—where your money is only released as the work is actually done.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Get matched with contractors who accept escrow payments →</a>
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
