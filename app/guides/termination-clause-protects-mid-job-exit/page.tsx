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
          <div className="hero-badge">Contract Clauses · September 2026</div>
          <h1>The Termination Clause That Lets You Walk Off a Bad Job (And Still Get Paid)</h1>
          <p className="hero-subtitle">Most contracts only let the client fire you — leaving you stuck on a job with a non-paying or impossible client and no clean way out. A mutual termination clause spells out exactly how you exit, what you get paid for work completed, and how you demobilize without eating the loss.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your next contract, word for word:</p>
            <p>&quot;Either party may terminate this Agreement upon seven (7) calendar days&apos; written notice. Upon termination, Contractor shall be paid for all work completed and materials purchased or ordered through the termination date, plus demobilization costs and any restocking fees. Contractor shall have no obligation to continue work once notice is given and outstanding amounts are paid in full.&quot;</p>
            <p>That&apos;s it. Three sentences. Most contracts only give the *client* a way out — leaving you handcuffed to a non-paying, impossible, or abusive job with no clean exit. This clause makes termination a two-way street, and it puts a price tag on your departure so you never eat the loss.</p>
            <blockquote className="article-quote">
              Either party may terminate this Agreement upon seven (7) calendar days&apos; written notice. Upon termination, Contractor shall be paid for all work completed and materials purchased or ordered through the termination date, plus demobilization costs and any restocking fees.
              <cite>— Mutual termination clause — drop into your next contract</cite>
            </blockquote>


            <h2>Why &quot;work completed&quot; needs a definition</h2>
            <p>The phrase &quot;work completed&quot; gets fought over more than anything else in a termination dispute. The client says you completed 40%. You say 70%. Without a number, a judge splits the difference and you lose.</p>
            <p>Fix it on your next job by attaching a payment schedule that ties dollars to milestones. Add this line under the clause above:</p>
            <p>&quot;Completed work shall be valued according to the Schedule of Values attached as Exhibit A. Where a milestone is partially complete, Contractor shall be paid the percentage of that milestone actually performed as of the termination date.&quot;</p>
            <p>Now when you walk, there&apos;s no argument. You point at Exhibit A, count the finished milestones, and invoice. Take dated photos the day you leave — those photos are what turn your Schedule of Values into a paid invoice.</p>


            <h2>Get paid for leaving, not just for staying</h2>
            <p>Demobilization is real money — pulling equipment, hauling off tools, releasing your crew, canceling material orders. If your contract is silent on it, you absorb every dollar.</p>
            <p>List your demob costs *before* you sign so they&apos;re not a surprise later. Put a number in the contract:</p>
            <p>&quot;Demobilization costs are agreed at $______ or actual documented costs, whichever is greater, payable upon termination by either party.&quot;</p>
            <p>Same with materials. If you&apos;ve already ordered custom cabinets or a special-order fixture, your supplier&apos;s restocking fee is your loss unless the contract passes it to the client. The clause above already covers &quot;restocking fees&quot; — keep the supplier&apos;s written restocking policy in your job file so you can prove the number.</p>


            <h2>The seven-day window protects you too</h2>
            <p>That notice period isn&apos;t just a courtesy — it&apos;s your leverage. During those seven days, the client has to bring the account current or the job stops. Use it.</p>
            <p>When a job goes bad, send written notice the same day. A text or email counts as &quot;written&quot; in most states. Use this exact language:</p>
            <p>&quot;Per Section ___ of our contract, this is written notice of termination effective seven days from today. Payment for completed work, materials, and demobilization is due per the contract. Work will stop on [date] unless the outstanding balance of $______ is paid in full before then.&quot;</p>
            <p>Half the time, that message gets you paid and keeps the job. The other half, it gets you off the job clean, with a paper trail that makes collection — or a lien — straightforward.</p>


            <h2>Put it in every contract, starting now</h2>
            <p>You don&apos;t need a lawyer to add three paragraphs to your template. Paste the mutual termination clause, attach a Schedule of Values, and write in your demob number before you send your next bid.</p>
            <p>The contractors who never get trapped on bad jobs aren&apos;t tougher negotiators — they just wrote the exit into the deal before anyone signed. Do that once, and it protects every job after it.</p>
            <p>If you want the full contract template with the termination clause, Schedule of Values, and demob language already built in, that&apos;s what we put together for the trades.</p>
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
