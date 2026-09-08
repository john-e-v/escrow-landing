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
          <h1>The Pre-Deposit Walkthrough: 8 Questions to Ask Before You Hand Over a Dime</h1>
          <p className="hero-subtitle">Before a deposit changes hands, one walkthrough conversation reveals whether a contractor is legitimate or a liability. This is the exact script to run on-site, question by question, with the answers that should make you walk.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Question 1: &quot;Can I see your license number and the name it&apos;s registered under?&quot;</p>
            <p>Write it down on the spot. Then verify it — don&apos;t take a laminated card at face value. Every state with contractor licensing publishes a lookup tool (search &quot;[your state] contractor license lookup&quot;). The name on the license must match the name on the contract and the name on the bank account you&apos;ll be paying. If those three names don&apos;t line up, stop.</p>
            <p>Answer that should make you walk: &quot;The license is under my old partner&quot; or &quot;It&apos;s being renewed right now.&quot;</p>


            <p>Question 2: &quot;Can you email me a current certificate of insurance directly from your carrier?&quot;</p>
            <p>General liability and workers&apos; comp. You want the certificate sent from the insurance agency to your email — not a photo of a document the contractor keeps in the truck. Call the number on the certificate to confirm the policy is active. This is a five-minute phone call that separates covered work from a lawsuit aimed at your homeowner&apos;s policy.</p>
            <p>Answer that should make you walk: &quot;I&apos;m self-insured&quot; or &quot;I&apos;ll get that to you after we start.&quot;</p>


            <p>Question 3: &quot;What&apos;s the deposit, and what does it specifically pay for?&quot;</p>
            <p>A legitimate deposit covers materials or a scheduling slot — usually 10-30%. A contractor asking for 50% or more before a single tool comes out is financing his last job with your money. Ask for the deposit amount in writing and what milestone releases the next payment.</p>
            <p>Answer that should make you walk: any deposit over one-third with no itemized reason.</p>
            <blockquote className="article-quote">
              The moment a deposit is bigger than the first phase of actual work, you&apos;ve stopped hiring a contractor and started giving a loan to a stranger.
              <cite>— Construction dispute mediator</cite>
            </blockquote>


            <p>Question 4: &quot;Can I have three references from jobs completed in the last six months — and the addresses?&quot;</p>
            <p>Recent and local. Old references are curated; a contractor who can&apos;t produce work from this year has either slowed down for a reason or is hiding recent complaints. Drive past one address if you can.</p>
            <p>Question 5: &quot;Will you pull the permit under your name?&quot;</p>
            <p>If a contractor asks you, the homeowner, to pull the permit, he&apos;s making you legally responsible for the work and dodging inspector scrutiny of his license. The person doing the work pulls the permit. Period.</p>


            <p>Question 6: &quot;What&apos;s your written change-order process?&quot;</p>
            <p>Every cost overrun and &apos;while we&apos;re in there&apos; surprise should require a signed change order before work proceeds. No process means every surprise becomes a verbal argument you&apos;ll lose.</p>
            <p>Question 7: &quot;Can I see a sample contract with a payment schedule tied to milestones?&quot;</p>
            <p>You want to see that payments release as work is verified — not on a calendar, and not all up front. If there&apos;s no written contract at all, there&apos;s nothing to enforce.</p>
            <p>Question 8: &quot;Will you accept payment through escrow, where funds release when each milestone is verified?&quot;</p>
            <p>This is the single fastest filter. An honest contractor who intends to finish has no reason to refuse structured, protected payment. The only person who fears escrow is someone who wants the money before the work is proven.</p>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>Urgency about the deposit.</p>
            <p>It shows up in nearly every job that ends in a half-finished kitchen and an unreturned phone call. The pressure to pay right now — &quot;the price is only good today,&quot; &quot;I need it to lock in materials,&quot; &quot;my other client is waiting on this slot&quot; — is designed to move you past the eight questions above before you think to ask them. A contractor who will still be there next week doesn&apos;t need your money this afternoon.</p>
            <p>If you&apos;d rather skip the interrogation entirely, start with contractors who&apos;ve already agreed to be paid the right way.</p>
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
