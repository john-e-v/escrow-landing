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
          <div className="hero-badge">Payment Protection · September 2026</div>
          <h1>You Prepaid the Appliance Package. The Contractor Never Ordered It.</h1>
          <p className="hero-subtitle">A homeowner wired $9,400 for a full appliance package during a kitchen remodel. The contractor spent the money on payroll for another job and never placed the order. Here&apos;s how the money vanished and the milestone structure that would have stopped it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>$9,400 gone, and the appliances never existed anywhere except on a quote.</p>
            <p>The homeowner wired the money on a Tuesday in March, six weeks into a kitchen remodel that was, at that point, going fine. Demo was done. Cabinets were on order. The contractor sent a line-item invoice for the appliance package — a 36-inch range, a counter-depth fridge, a dishwasher, a hood insert, and a microwave drawer — totaling $9,400, and asked for it upfront &quot;to lock in the pricing before the supplier&apos;s quarterly increase.&quot;</p>
            <p>That sentence was true, technically. Appliance prices did go up that quarter. What wasn&apos;t true was the implication that the money would go to the supplier. It went to make payroll on a different job the contractor was underwater on. The order was never placed.</p>


            <h2>How the money actually moved</h2>
            <p>Here&apos;s the timeline, reconstructed later from bank records and text messages.</p>
            <p>Day 0: Homeowner wires $9,400 to the contractor&apos;s business account. Balance in that account before the wire: $1,200.</p>
            <p>Day 1: $6,800 leaves the account as a payroll run — three subs on an unrelated bathroom job that had stalled on its own draw.</p>
            <p>Day 4: Homeowner texts, &quot;Did the appliance order go through? Want to confirm the fridge finish.&quot; Contractor replies, &quot;Yep, all placed, will forward the confirmation.&quot;</p>
            <p>Day 11: No confirmation. Homeowner asks again. &quot;Supplier is slow this week, chasing it.&quot;</p>
            <p>Day 26: Cabinets arrive. No appliances. Contractor stops replying within 24 hours, then within a week, then not at all.</p>
            <p>Day 40: Homeowner calls the appliance distributor directly, reads off the model numbers from the quote. The distributor has no order, no deposit, no record of the contractor&apos;s account being active in over a year.</p>
            <blockquote className="article-quote">
              The invoice looked legitimate because it was legitimate. The prices were real. The models were real. The only thing missing was the part where the order got placed.
              <cite>— consumer-side construction attorney reviewing the file</cite>
            </blockquote>


            <h2>Why &apos;upfront for materials&apos; is where this always breaks</h2>
            <p>The appliance package is the perfect vehicle for this failure, and it&apos;s worth understanding why. Material deposits feel different from labor. Nobody blinks at prepaying for a physical product — you do it every time you buy something online. So a contractor asking for the appliance money upfront doesn&apos;t trip the same alarm that asking for six weeks of labor upfront would.</p>
            <p>But the money is fungible. Once $9,400 hits a general operating account with a $1,200 balance and three unpaid subs, it does not stay earmarked. It becomes whatever the business needs it to be that week. The homeowner didn&apos;t fund appliances. They funded someone else&apos;s payroll and got an IOU disguised as a delivery date.</p>
            <p>The recovery path here was brutal: a mechanic&apos;s lien threat that went nowhere because the homeowner owed nothing, a small-claims judgment that was technically won and practically uncollectable, and a contractor&apos;s license that got suspended eight months too late to matter.</p>


            <h2>The structure that stops it cold</h2>
            <p>The fix is not &quot;vet your contractor harder.&quot; This contractor had a license, references, and a real portfolio. The fix is structural: the material money should never have touched the contractor&apos;s operating account.</p>
            <p>In a milestone-and-escrow structure, the $9,400 sits in a neutral account and releases against proof — a supplier order confirmation, a delivery receipt, appliances physically on site. The trigger for payment is evidence of the thing, not a promise of the thing. Under that structure, Day 1 doesn&apos;t happen. The payroll run can&apos;t pull from money that isn&apos;t in the contractor&apos;s control yet. And if the order never gets placed, the money is still sitting there on Day 40, fully recoverable, because it never left.</p>
            <p>The difference between this homeowner losing $9,400 and losing nothing is not a better contractor. It&apos;s whether the money moved on a promise or moved on proof. Everything else about the job was fine. That one payment term was the whole story.</p>
            <p>If you&apos;re about to hand over a material deposit, the person you hire should be comfortable letting that money release against delivery instead of against trust.</p>
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
