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
          <div className="hero-badge">Contractor Ops · August 2026</div>
          <h1>Job Costing Software vs. Spreadsheet: Where Your Margin Actually Leaks</h1>
          <p className="hero-subtitle">A spreadsheet costs nothing and shows you the numbers you already know to look for. Purpose-built job costing catches the leaks you&apos;d never think to check—but only if your labor, material, and payment data actually feed into it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>A spreadsheet catches the leak you already suspect. Purpose-built job costing catches the one you don&apos;t. That&apos;s the whole comparison in a sentence, and everything below is just the tradeoffs behind it.</p>
            <p>Most contractors I know run margin off a spreadsheet, and honestly it works longer than software vendors want you to believe. If you&apos;re doing under 20 jobs a year and you personally touched every one of them, a spreadsheet isn&apos;t a compromise—it&apos;s the correct tool. You know where the numbers come from because you typed them in. That&apos;s not nothing.</p>


            <h2>What a spreadsheet is actually good at</h2>
            <p>Zero cost. Zero learning curve. Full control—no vendor deciding how a change order should be categorized. And it shows you exactly the numbers you built it to show you.</p>
            <p>That last point is the trap. A spreadsheet is a mirror. It reflects the assumptions you already have. If you never thought to track labor burden separately from base wage, the sheet won&apos;t flag it. If your material waste is quietly running 12% over estimate, the sheet shows you the total you plugged in, not the variance you never calculated. You audit what you already audit. The leaks you&apos;d never think to check stay invisible because nothing is checking for them.</p>
            <blockquote className="article-quote">
              The spreadsheet never lied to me. It just never told me the thing I didn&apos;t ask.
              <cite>— remodeling GC, ~$2M/yr, after switching</cite>
            </blockquote>


            <h2>What purpose-built job costing actually buys you</h2>
            <p>It buys you variance you didn&apos;t request. Committed-cost tracking, so a PO that&apos;s issued but not yet invoiced still hits your job number today instead of surprising you next month. Labor feeding in from time tracking instead of a memory-based number at week&apos;s end. Real per-phase margin instead of one blended project number that hides a bathroom losing money inside a kitchen that carried it.</p>
            <p>Here&apos;s the honest catch, and it&apos;s the whole catch: job costing software is only as good as what feeds it. If your crew&apos;s hours still land in a text message, if material receipts still live in a truck console, if your payment data lives in a separate world entirely—the software gives you a very expensive, very polished version of the same blind spots. Garbage in, dashboard out. The tool doesn&apos;t fix your inputs. It just makes bad inputs look official.</p>


            <h2>The all-in-one vs. best-of-breed question underneath it</h2>
            <p>The tempting fix is one platform that does everything—estimating, costing, scheduling, invoicing, payments. One login, one throat to choke. The tradeoff is you inherit that vendor&apos;s opinion of how your business runs, and you&apos;re locked in the day you outsource your whole operation to it.</p>
            <p>The approach I&apos;d argue for: keep the pieces that are specific to how you run—your estimating logic, your phase codes, your labor rules—tailored and in-house, in tools you control. Then bring in a third party only for the one function that genuinely benefits from a neutral outside party.</p>
            <p>That function is where the money changes hands. Job costing tells you your margin is right. Payment protection makes sure you actually collect it. You don&apos;t want your own stack refereeing a payment dispute with a client—that&apos;s the one seat where a neutral third party earns its keep. Escrow is the piece that shouldn&apos;t be in-house, precisely because its whole value is that it isn&apos;t you.</p>


            <h2>Where this leaves you</h2>
            <p>Run the spreadsheet as long as it&apos;s honest with you. Move to purpose-built costing the moment your jobs outgrow your memory—and only after your labor, material, and payment data actually flow into it, because before that you&apos;re paying for a nicer mirror.</p>
            <p>And wherever your costing lives, keep the money-changing-hands part out of your own stack. That&apos;s the one place neutral beats tailored, every time. If you&apos;re mapping out which pieces stay in-house and which one shouldn&apos;t, that&apos;s the right time to see how the escrow piece fits.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/master" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>See contractor plans →</a>
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
