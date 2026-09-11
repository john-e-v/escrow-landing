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
          <div className="hero-badge">Escrow Effect · September 2026</div>
          <h1>The Countertop Seams Lifted a Week After Install. Escrow Meant the Homeowner Held Firm.</h1>
          <p className="hero-subtitle">A homeowner noticed her new quartz countertop seams lifting and separating just days after the fabricator called the job done. Because the final payment sat in escrow instead of a cashed check, she had the leverage to demand a proper re-set before releasing a dime.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$4,200 — that&apos;s how much of the countertop job was still sitting untouched in escrow when Maria noticed the seams starting to lift.</p>
            <p>Six days earlier, the fabricator had called the quartz install complete. It looked clean at the walkthrough: a long L-shaped run across the kitchen, two seams, tight and flush. Maria signed off, but she didn&apos;t cut a check. The final payment was already funded — parked in escrow the day the contract was signed — and the terms said it released only after she confirmed the work held up. She marked the walkthrough as provisional and moved on with her week.</p>
            <p>Then the seams started to talk. First a hairline you could catch a fingernail on near the sink. By day six, one seam had visibly separated, the two slabs no longer sitting level, a lip you could feel when you ran your hand across it. That&apos;s not settling. That&apos;s a bad set — wrong adhesive, rushed cure time, or a substrate that wasn&apos;t shimmed flat before the stone went down.</p>


            <h2>Why the timing mattered so much</h2>
            <p>Here&apos;s the part most homeowners get wrong: countertop defects almost never show up at the walkthrough. Adhesive failures, seam separation, and unlevel sets take days to reveal themselves as the material and the house settle around them. By the time you can see the problem, the crew is long gone and — in the traditional model — so is your money.</p>
            <p>Maria&apos;s neighbor had lived exactly that. Same category of problem, cashed check, and a fabricator who suddenly stopped answering the phone. Getting a re-set out of him took three weeks of voicemails and a threat to leave a review before anyone showed up. He&apos;d already been paid. There was nothing left to hold.</p>
            <blockquote className="article-quote">
              Once the check clears, you&apos;re not a customer anymore. You&apos;re a favor they might get around to.
              <cite>— a homeowner describing a previous countertop dispute</cite>
            </blockquote>


            <h2>What escrow actually changed</h2>
            <p>Maria sent the fabricator photos of the lifted seam the same afternoon she caught it. His first response was the standard one — that it was cosmetic, that quartz &quot;does that,&quot; that it would settle. In the old model, that&apos;s where the conversation ends, because there&apos;s no leverage on either side.</p>
            <p>But the $4,200 hadn&apos;t moved. It was funded, visible, and specifically not released. That single fact reframed the entire exchange. The fabricator wasn&apos;t chasing a payment that might never come; he was completing a payment that was already there, waiting on one condition — fix the seam. Suddenly the re-set wasn&apos;t a favor. It was the last step to getting paid.</p>
            <p>He came back four days later, ground out the bad seam, re-set both slabs with proper support and cure time, and this time it held. Maria gave it a full week to be sure. Then she released the funds. No small-claims filing, no review war, no three weeks of voicemails. The money doing the work she didn&apos;t have to.</p>


            <h2>The quiet leverage of not paying yet</h2>
            <p>The mechanism here isn&apos;t complicated, and it isn&apos;t adversarial. Escrow-first payment doesn&apos;t assume the contractor is dishonest — most aren&apos;t. It just acknowledges a simple truth about construction: you cannot verify quality on the day the work is finished. You need time. And leverage evaporates the moment the money leaves your hands.</p>
            <p>Holding the final payment in escrow until the work proves itself keeps both sides honest without a single hard conversation. Good contractors get paid the moment the job holds. Homeowners get a window to catch the defects that only show up later. Nobody has to win an argument, because the structure already settled it.</p>
            <p>If you&apos;re about to sign a contract for work you won&apos;t be able to fully judge on day one — countertops, tile, flooring, anything that reveals itself over the following week — set the payment up so it releases when the work earns it, not before.</p>
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
