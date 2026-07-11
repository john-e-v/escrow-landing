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
          <div className="hero-badge">Documentation · July 2026</div>
          <h1>The Sign-Off Form That Ends &apos;I Never Approved That&apos; Disputes</h1>
          <p className="hero-subtitle">The single hardest dispute to win is the one where a client claims they never approved a phase of work. This is the copy-paste sign-off form you hand over at the end of every milestone so approval is documented before you move on.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>MILESTONE SIGN-OFF FORM</p>
            <p>Project: _______________  Milestone: _______________  Date: _______________</p>
            <p>&quot;I confirm the work described below has been completed to my satisfaction. I authorize the contractor to proceed to the next phase. I understand that any changes I request after this sign-off may affect the project cost and timeline.&quot;</p>
            <p>Work completed in this milestone: _______________
Client name (print): _______________
Client signature: _______________
Contractor signature: _______________</p>
            <p>Copy that block into a Word doc, a PDF, or the notes app on your phone right now. That is the entire tool. Everything below is how you use it so the words &quot;I never approved that&quot; stop costing you money.</p>


            <h2>Why This Wins the Unwinnable Dispute</h2>
            <p>The hardest dispute to defend is a client claiming they never signed off on a completed phase. There is no photo that proves approval. There is no invoice that proves approval. Verbal &quot;looks good&quot; in a driveway proves nothing when the same client is standing in front of a judge six weeks later.</p>
            <p>A signed milestone form flips the burden. Now they are not disputing whether the work is acceptable — they signed a document saying it was. Their only path is to argue you forged their signature, which almost nobody attempts. The form doesn&apos;t just help your case; it usually ends the case before it starts.</p>
            <blockquote className="article-quote">
              Once the homeowner saw their own signature on the phase approval, the claim was withdrawn before the hearing. There was nothing left to argue.
              <cite>— construction mediation summary, small-claims matter</cite>
            </blockquote>


            <h2>Hand It Over at the End of Every Milestone — Not the End of the Job</h2>
            <p>The mistake is saving all your paperwork for final completion. By then the disputes have already accumulated. Break your job into the phases you actually bill against — demo, rough-in, drywall, finish — and get a signature at the close of each one.</p>
            <p>On your very next job, before you send the crew to the next phase, walk the client through the completed work with the form on a clipboard or your phone. Point at what was done. Then hand them the pen. Ninety seconds of walkthrough replaces months of he-said-she-said.</p>
            <p>If the client hesitates to sign, that is not an inconvenience — that is information. A hesitation now tells you there is an unspoken problem you can fix in ten minutes today, instead of a lawsuit you discover after final payment is due.</p>


            <h2>The Line That Protects Your Change Orders</h2>
            <p>The most valuable sentence in that form is the last one: &quot;any changes I request after this sign-off may affect the project cost and timeline.&quot;</p>
            <p>This is the phrase that stops scope creep from becoming free labor. When a client comes back after finish work and asks you to move an outlet they already approved, you pull up the milestone form they signed. The conversation is no longer about whether it&apos;s an extra charge — they already agreed in writing that post-sign-off changes cost money.</p>
            <p>Add one more habit: photograph the completed milestone and text it to the client with the line &quot;Signed off today, here&apos;s the record.&quot; Now the signature and the visual proof are timestamped and sitting in their own phone.</p>


            <h2>Make It Non-Negotiable</h2>
            <p>Tell your client on day one: &quot;I sign off every phase with you so we&apos;re always on the same page and there are no surprises at the end.&quot; Framed that way, it sounds like professionalism — because it is. Clients who fight paperwork are the exact clients you most need paper with.</p>
            <p>Start on the next milestone you close this week. One signature is the difference between a dispute you might lose and a dispute that never happens.</p>
            <p>If you want the full set of milestone forms, change-order templates, and sign-off scripts built around your trade, they&apos;re waiting inside the contractor plans.</p>
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
