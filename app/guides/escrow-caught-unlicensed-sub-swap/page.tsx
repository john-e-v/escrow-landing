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
          <div className="hero-badge">Escrow Effect · August 2026</div>
          <h1>The Contractor Swapped in an Unlicensed Sub. Escrow Meant the Homeowner Paid Nothing.</h1>
          <p className="hero-subtitle">A homeowner hired a licensed contractor for an electrical panel job, but the crew that showed up was an unlicensed sub the contractor quietly subbed out. Because payment sat in escrow tied to a passed inspection, the failed permit never cost the homeowner a dime.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$8,400 was the total for the panel upgrade. The homeowner paid exactly $0 of it until the inspection passed — and when the job failed inspection, that $8,400 stayed exactly where it was.</p>
            <p>Here&apos;s what happened. A homeowner in a older two-story hired a licensed contractor to swap a 100-amp panel for a 200-amp service. The bid was clean, the license checked out, the reviews were solid. Everything you&apos;d want on paper.</p>
            <p>Then the crew showed up. Different truck, different names, no company logo. The homeowner didn&apos;t think much of it — subs are normal. What they didn&apos;t know was that the licensed contractor had quietly handed the job to an unlicensed sub to pocket the margin, and never pulled the permit under the sub&apos;s name because the sub couldn&apos;t pull one.</p>


            <h2>The Part Where It Should Have Gone Wrong</h2>
            <p>The panel got installed. It looked finished. Wires tucked, cover on, breakers labeled. To an untrained eye, the job was done.</p>
            <p>Then the inspector came out. The permit didn&apos;t match the work. The grounding was wrong, the bonding was wrong, and the work had been performed by someone with no license attached to the permit on file. Red-tagged on the spot.</p>
            <p>In the version of this story most people have lived through, this is the disaster. The homeowner has already paid — maybe half up front, maybe most of it — and now they&apos;re chasing a contractor who&apos;s stopped answering the phone, holding a red tag and a panel they can&apos;t legally energize. The money&apos;s gone. The fix comes out of their own pocket. That&apos;s the failure mode that repeats itself thousands of times a year.</p>
            <blockquote className="article-quote">
              By the time the inspector red-tags it, the homeowner has usually already paid. That&apos;s the whole trap — the money moves before anyone qualified confirms the work is real.
              <cite>— licensed electrician, on why panel jobs go sideways</cite>
            </blockquote>


            <h2>Why This One Didn&apos;t</h2>
            <p>This job used escrow-first payment. The $8,400 didn&apos;t sit in the contractor&apos;s account waiting to be spent. It sat in escrow, tied to a single, specific condition: a passed inspection.</p>
            <p>Not a milestone the contractor claimed was done. Not a photo. Not a text saying &quot;all wrapped up.&quot; A passed inspection — the one thing an unlicensed sub swapped in on the sly could never produce.</p>
            <p>So when the red tag came, the money simply never released. There was nothing for the homeowner to claw back, because they&apos;d never handed it over. The failed permit was the contractor&apos;s problem to solve, not the homeowner&apos;s. They either brought a licensed crew back to correct the work and pass inspection, or the funds returned to the homeowner untouched. The leverage sat on the right side of the table the entire time.</p>


            <h2>The Thing People Miss</h2>
            <p>The homeowner did their due diligence. They checked the license. They read the reviews. They still couldn&apos;t control who physically showed up on the day, and they couldn&apos;t control whether the permit matched the hands doing the work. No amount of vetting stops a contractor from subbing out quietly after the contract is signed.</p>
            <p>What they could control was when the money moved. And by tying release to a passed inspection instead of a claim of completion, they made the one thing they couldn&apos;t verify themselves — was this done right — the exact condition that unlocked payment.</p>
            <p>That&apos;s the quiet part. Escrow didn&apos;t make the contractor honest. It made honesty the only path to getting paid. The unlicensed sub, the mismatched permit, the red tag — all of it happened. It just cost the homeowner nothing, because the structure of the deal never let a failed job turn into a lost payment.</p>
            <p>If you&apos;re about to hire out work you can&apos;t personally verify — and a panel upgrade is exactly that kind of work — the move isn&apos;t better vetting. It&apos;s making the payment answer to the inspection instead of the invoice.</p>
          </div>

          <div className="article-footer">
            <Link href="/guides" className="article-back">← Back to Guides</Link>
            <a href="/create" className="submit-btn primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>Set up an escrow-backed project →</a>
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
