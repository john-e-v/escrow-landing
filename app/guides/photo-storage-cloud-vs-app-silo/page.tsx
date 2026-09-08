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
          <div className="hero-badge">Contractor Ops · September 2026</div>
          <h1>Job Photos in the Cloud vs. Locked in an App: Where Your Evidence Actually Lives</h1>
          <p className="hero-subtitle">Your daily photo log only wins disputes if you can actually retrieve it. This teardown compares dumping photos in generic cloud storage against burying them in a purpose-built field app — and where each one leaves you exposed when a client pushes back.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Three years of job photos, and the one week that mattered was gone.</p>
            <p>That&apos;s the story I hear most often when a contractor loses a payment dispute over workmanship. Not &quot;I didn&apos;t take photos&quot; — almost everyone takes photos now. It&apos;s &quot;I can&apos;t get to the ones I need, in the form I need them, fast enough to matter.&quot; Your daily photo log only wins a dispute if you can actually retrieve it, timestamped, in context, before the client&apos;s version of events hardens into the accepted one.</p>
            <p>So the real question isn&apos;t whether to document. It&apos;s where your evidence lives. There are two dominant approaches, and both have a failure mode that shows up at exactly the wrong moment.</p>


            <h2>Approach 1: Generic cloud storage</h2>
            <p>This is the phone-camera-to-shared-drive workflow. Photos land in a folder, maybe named by date, maybe by address if you&apos;re disciplined.</p>
            <p>The upside is real: you own the raw files. Nobody can lock you out, no subscription lapse deletes your history, and you can hand a client or an attorney a plain download link they can open without an account. Export is a non-event because there&apos;s nothing to export — the files are just files.</p>
            <p>The exposure is retrieval and proof. A folder of 4,000 unsorted images is not evidence; it&apos;s a haystack. When a client claims the tile was cracked before you started, you need the shot from day one of that specific room, and you need something that ties it to that date beyond a filename you could have typed yourself. Generic storage gives you the photo. It doesn&apos;t give you the chain of custody.</p>
            <blockquote className="article-quote">
              The photo isn&apos;t the evidence. The photo plus a timestamp nobody can quietly edit is the evidence.
              <cite>— remodeler, on a $9K punch-list dispute</cite>
            </blockquote>


            <h2>Approach 2: The purpose-built field app</h2>
            <p>Here the camera lives inside a job-management tool. Photos attach to the project, to the daily log, often to a specific task — and that structure is genuinely valuable. Retrieval is fast, context is baked in, and the timestamps come from a system you didn&apos;t hand-enter.</p>
            <p>The tradeoff is that your evidence now lives behind someone else&apos;s login and business model. If you stop paying, downgrade, or the vendor sunsets a feature, your access changes. Bulk export is often clumsy, sometimes stripped of the metadata that made the photo useful, and occasionally locked to higher tiers. You&apos;ve traded a haystack for a vault you don&apos;t hold the only key to.</p>


            <h2>The honest verdict</h2>
            <p>Neither approach is wrong. The mistake is picking one and pretending the failure mode doesn&apos;t exist.</p>
            <p>If I&apos;m being straight: for most crews, a purpose-built app you actually own the data out of beats a shoebox of cloud files, because retrieval speed wins disputes and unsorted files lose them. But that only holds if you can get the data out clean. The moment export is painful, your leverage transfers to the vendor.</p>
            <p>The stack that ages well is mostly in-house and tailored — your photo log, your daily notes, your scope docs living where you control them and can export them without a fight. You don&apos;t want five third parties each holding a piece of your business hostage.</p>


            <h2>Where the one exception belongs</h2>
            <p>There&apos;s exactly one place I&apos;d argue you want a neutral third party, and it isn&apos;t your photos. It&apos;s the money.</p>
            <p>Evidence should be yours; the funds in dispute shouldn&apos;t sit with either side. That&apos;s the one seam where being deliberately not-in-house is the whole point — a party with no stake in who&apos;s right, holding the payment until the work is verified. Everything else on your stack should be built to keep you in control. Escrow is the piece you intentionally hand off.</p>
            <p>If you&apos;re thinking about which parts of your workflow should be yours and which one shouldn&apos;t, that&apos;s the split worth building around.</p>
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
