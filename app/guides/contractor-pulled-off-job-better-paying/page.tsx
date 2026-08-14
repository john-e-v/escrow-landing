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
          <div className="hero-badge">Project Delays · August 2026</div>
          <h1>Your Contractor Vanished for Three Weeks — He Took a Bigger Job</h1>
          <p className="hero-subtitle">Your contractor didn&apos;t quit. He just found a more profitable job and parked yours to keep it warm. Here&apos;s why the crew keeps disappearing for days at a time, and the payment structure that makes ghosting expensive for the person doing it.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Twenty-three days. That&apos;s how long a kitchen remodel in Denver sat untouched last spring — framing done, cabinets in the garage, no crew on-site — while the homeowner texted a contractor who answered every fourth message with &quot;heading over tomorrow.&quot;</p>
            <p>He wasn&apos;t lying to be cruel. He was managing a scheduling problem, and the homeowner&apos;s job lost.</p>
            <p>Here&apos;s what actually happened, because it&apos;s the same story every time. The contractor bid the kitchen at $28,000 in February. In March, a commercial client offered him a tenant build-out worth $71,000 with a hard deadline and penalty clauses if he missed it. He didn&apos;t quit the kitchen. Quitting means refunding the $9,000 deposit and burning a review. Instead he parked it — kept it &quot;warm&quot; with just enough contact to avoid a confrontation — and threw his crew at the job that paid more and punished him for being late.</p>


            <h2>The deposit is the whole problem</h2>
            <p>Once a contractor holds your deposit with nothing structurally tying it to progress, your job becomes his lowest-risk backlog. He already has your money. Delaying you costs him nothing but a few awkward texts. Delaying the commercial client costs him a penalty clause.</p>
            <p>So the work flows toward whoever made lateness expensive. That&apos;s not a character flaw — it&apos;s arithmetic. Any rational person with two competing obligations services the one with teeth first.</p>
            <p>The Denver homeowner paid 32% up front. From the day that check cleared, they had zero remaining leverage. They couldn&apos;t withhold anything, because there was nothing left to withhold until the very end. The contractor had already been paid for the phase he was ignoring.</p>
            <blockquote className="article-quote">
              I wasn&apos;t avoiding them. I just couldn&apos;t afford to be late on the job that would fine me. Theirs was the one I could push.
              <cite>— GC explaining the delay after the fact</cite>
            </blockquote>


            <h2>What would have prevented it</h2>
            <p>Not a stricter contract. Not a nicer client. A payment structure where the money moves only when the work does.</p>
            <p>Milestone escrow flips the arithmetic. Instead of a 32% deposit, the full budget goes into a neutral account. The contractor draws against it in stages: framing inspected, funds release for framing. Cabinets installed, funds release for cabinets. Nothing sits in his account for work he hasn&apos;t done.</p>
            <p>Under that structure, parking your job stops being free. Every week the crew is elsewhere is a week his money stays locked in escrow he can&apos;t touch. Suddenly your kitchen has teeth too. The commercial job punishes lateness with penalties; your escrow punishes it with withheld draws. Now he has two obligations that both cost him to ignore — and he schedules accordingly, instead of feeding you &quot;tomorrow&quot; for three weeks.</p>
            <p>It also protects the honest contractor, which is the part people miss. The one who shows up doesn&apos;t get penalized. He gets paid on schedule, at each milestone, without begging for a progress check or floating materials on his own credit. Escrow only bites the person who disappears.</p>


            <h2>The uncomfortable takeaway</h2>
            <p>A deposit with no milestones is a bet that your job will always be the most profitable thing on your contractor&apos;s plate. It won&apos;t be. Sooner or later a bigger job appears, and if he already has your money and nothing forcing his hand, you become the flexible one.</p>
            <p>You don&apos;t fix that by hiring nicer people. You fix it by removing the incentive to ghost — by making sure the money and the work stay attached at every stage.</p>
            <p>If you&apos;re about to start a project, structure the payment before you fall in love with a bid. The contractors worth hiring won&apos;t flinch at escrow. The ones who do are telling you exactly how they plan to prioritize your job.</p>
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
