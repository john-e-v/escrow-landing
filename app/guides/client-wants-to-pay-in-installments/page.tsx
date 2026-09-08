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
          <div className="hero-badge">Get Paid Faster · August 2026</div>
          <h1>The Client Wants to Pay in Monthly Installments After the Job: Why That&apos;s a Loan, Not a Payment</h1>
          <p className="hero-subtitle">When a client asks to pay off the balance in monthly installments after completion, you&apos;ve stopped being a contractor and started being a lender. Milestone escrow funds the money before the work happens, so you never carry a balance you can&apos;t collect.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>The verdict: if a client asks to pay the balance in monthly installments after the job is done, you&apos;re financing them. That&apos;s not a payment plan. That&apos;s an unsecured loan — one you never underwrote, never charged interest on, and can&apos;t repossess.</p>
            <p>Most contractors don&apos;t see it that way because it doesn&apos;t feel like lending. It feels like being flexible. The work is finished, the client is happy, and they say, &quot;Can I just send you $1,500 a month until it&apos;s paid off?&quot; You say yes because saying no feels like it might blow up a good relationship. But the moment your money is in their hands and not yours, the leverage has flipped completely.</p>


            <h2>Why post-completion installments are the worst position to collect from</h2>
            <p>Think about what a bank does before it lends. It checks credit, secures collateral, sets a rate, and writes a contract with real teeth. You did none of that. You handed over completed work — labor and materials you&apos;ve already paid for — in exchange for a promise.</p>
            <p>And here&apos;s the structural problem: your only leverage as a contractor is the work itself. While the job is unfinished, the client needs you. The second it&apos;s done and you&apos;ve walked off site, the thing they wanted is theirs. Now they owe you money for something they already have. Every collections attorney will tell you the same thing — the debt you chase after delivery is the hardest debt there is.</p>
            <p>Installments after completion also stretch your exposure across months. A client who was solid on day one can lose a job, get divorced, or simply decide your invoice is the last one they&apos;ll prioritize. You&apos;re carrying that risk on your balance sheet the whole time, with no interest and no security.</p>
            <blockquote className="article-quote">
              The debt you chase after the work is delivered is the hardest debt there is — you&apos;ve already given up the only leverage you had.
              <cite>— common refrain among construction collections attorneys</cite>
            </blockquote>


            <h2>The fix: fund the money before the work, not after</h2>
            <p>The structural answer is to reverse the sequence. Instead of doing the work and then hoping to collect, you get the client&apos;s money committed and held before each phase of work begins. That&apos;s what milestone escrow does.</p>
            <p>Here&apos;s how it changes the math. You break the job into milestones — deposit, rough-in, completion, whatever fits your scope. The client funds each milestone into a neutral escrow account before you start that phase. The money is real, it&apos;s set aside, and it&apos;s earmarked for you. When you complete the milestone, the funds release. You&apos;re never working on credit you extended yourself.</p>
            <p>This solves the installment request cleanly. If a client genuinely needs to spread payments out, fine — but they fund the escrow up front, and the release schedule matches the work. You&apos;re not the lender. The money exists before the labor does. You collect against funded milestones, not against a promise and a hope.</p>


            <h2>What this actually protects</h2>
            <p>Two things. First, cash flow — you&apos;re not floating a client&apos;s balance for six months out of your own pocket while you still have to make payroll and buy materials for the next job. Second, the relationship. Escrow takes the awkward money conversation off the table entirely, because the terms are set before anyone picks up a tool. Nobody&apos;s chasing anybody. The structure does the enforcing.</p>
            <p>The contractors who stop getting burned aren&apos;t the ones with the toughest collections process. They&apos;re the ones who never let the money get behind the work in the first place.</p>
            <p>If you&apos;re tired of turning finished jobs into installment loans you never agreed to underwrite, it&apos;s worth looking at how milestone-funded payment structures are set up for contractors.</p>
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
