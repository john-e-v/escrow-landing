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
          <div className="hero-badge">Contractor Ops · July 2026</div>
          <h1>Where Your Job Files Actually Live: Shared Drive vs. Per-Job System</h1>
          <p className="hero-subtitle">Most contractors dump contracts, photos, and change orders into a shared drive and call it document management. When a dispute hits, they spend hours reconstructing what happened. Here&apos;s the honest tradeoff between a folder system and a job-centered file structure.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Three hours. That&apos;s the average time an operator spends reconstructing a single job&apos;s timeline when a payment dispute lands and the files are scattered across a shared drive. I&apos;ve watched it happen, and I&apos;ve done it myself.</p>
            <p>The shared-drive approach isn&apos;t stupid. It&apos;s the default because it&apos;s free, everyone already knows how to use it, and on day one it feels organized. Contracts in one folder, photos in another, change orders in a third. Clean. The problem isn&apos;t storage. The problem is retrieval under pressure.</p>


            <h2>What the shared drive actually costs you</h2>
            <p>A folder system organizes files by type, not by event. So when a client claims you never got approval for the extra $4,200 in framing, you&apos;re opening the photos folder, the email export, the signed-change-order folder, and a text-message screenshot subfolder — and mentally stitching them into a sequence.</p>
            <p>The files exist. That&apos;s not the issue. The issue is that the story lives in your head, and the folder structure does nothing to prove the order things happened in. Timestamps get overwritten when someone re-uploads a photo. A change order named &apos;CO_final_v2_REAL.pdf&apos; tells a judge nothing about when it was signed relative to the work.</p>
            <p>The honest tradeoff: a shared drive is fast to set up and costs almost nothing, and for small, low-conflict jobs it&apos;s genuinely fine. You don&apos;t need a system to manage a $900 handyman gig with one invoice.</p>
            <blockquote className="article-quote">
              The folder had everything. It just couldn&apos;t tell me what happened first. That&apos;s the part that cost me the arbitration.
              <cite>— remodeling contractor, ~$2M annual revenue</cite>
            </blockquote>


            <h2>What a per-job structure buys — and what it doesn&apos;t</h2>
            <p>A job-centered file structure flips the organizing principle. Instead of &apos;all photos here, all contracts there,&apos; everything attaches to the job and lands on a timeline. The initial contract, each change order, the approval that triggered it, the progress photos from that week — all in sequence, all timestamped at the moment they were added.</p>
            <p>When a dispute hits, you&apos;re not reconstructing. You&apos;re reading. That&apos;s the whole value proposition, and it&apos;s a real one.</p>
            <p>But be clear-eyed about the cost. A per-job system takes discipline to maintain. If your crew doesn&apos;t upload photos the day they&apos;re taken, the timeline is only as honest as your worst habit. Purpose-built tools also cost money the shared drive doesn&apos;t, and they add a login your foreman has to actually use. If you can&apos;t get buy-in on the jobsite, you&apos;ve paid for a nicer version of the same mess.</p>


            <h2>The stack decision most operators get backwards</h2>
            <p>Here&apos;s where I&apos;ll push against the all-in-one instinct. The temptation is to buy one platform that does estimating, scheduling, file management, and payments so everything lives in one place. Sometimes that&apos;s right. But the more your money and your evidence live inside a single vendor&apos;s walls, the more you&apos;re trusting that one company&apos;s incentives to line up with yours during a fight.</p>
            <p>My view: keep your job records and your workflow in-house and tailored to how you actually run — spreadsheets, a per-job structure you control, whatever fits. Then bring in a genuine third party for the one place a neutral party matters: the money. Escrow is the piece that shouldn&apos;t sit inside the same system that holds your side of the story. A neutral fund holder doesn&apos;t take your version or the client&apos;s — it just holds the funds against agreed milestones.</p>
            <p>That&apos;s the split worth drawing. Own your files. Outsource the neutrality.</p>
            <p>If you&apos;re rethinking where your job records live, it&apos;s worth looking at how escrow fits as the one outside piece in a stack you otherwise control.</p>
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
