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
          <div className="hero-badge">Dispute-Proofing · September 2026</div>
          <h1>The Daily Log Clause That Makes Your Notes Legal Evidence</h1>
          <p className="hero-subtitle">A daily log only wins disputes if the contract says it&apos;s the official record. This clause turns your field notes into binding documentation the client agreed to before day one.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this into your contract before your next job:</p>
            <p>&quot;The Contractor&apos;s daily log shall constitute the official and controlling record of on-site conditions, work performed, labor and equipment present, weather, delays, and any verbal directives or change requests. Entries made contemporaneously in the daily log are deemed accepted by the Owner unless the Owner submits a written objection within five (5) business days of the log entry being made available. In the event of a dispute, the daily log shall be admissible as the primary documentary evidence of the facts recorded therein.&quot;</p>
            <p>That&apos;s it. Three sentences. The difference between a notebook full of scribbles and a document a judge or arbitrator will actually weigh in your favor is whether the client agreed, in writing, that your log is the record before the job started.</p>
            <blockquote className="article-quote">
              The Contractor&apos;s daily log shall constitute the official and controlling record of on-site conditions, work performed, labor and equipment present, weather, delays, and any verbal directives or change requests. Entries made contemporaneously in the daily log are deemed accepted by the Owner unless the Owner submits a written objection within five (5) business days.
              <cite>— Daily log clause — paste into your contract&apos;s documentation section</cite>
            </blockquote>


            <h2>Why a Log Without This Clause Loses</h2>
            <p>Most contractors keep some kind of log. Almost none of them make it enforceable. When a dispute hits, the client&apos;s attorney says one thing: &quot;Those notes are self-serving. He wrote them himself, after the fact, and we never agreed they meant anything.&quot;</p>
            <p>Without the clause, they&apos;re often right. Your log becomes a he-said-she-said pile of paper. With the clause, the burden flips. The client agreed the log was the record. They agreed silence meant acceptance. Now their attorney has to prove your contemporaneous entry was wrong — a far harder job than dismissing it as a diary.</p>
            <p>The magic words are &quot;contemporaneous&quot; and &quot;deemed accepted.&quot; Contemporaneous means you wrote it the same day, not reconstructed months later. Deemed accepted means their failure to object counts as agreement.</p>


            <h2>What To Do On Your Next Job</h2>
            <p>1. Add the clause above to your contract today. Put it in the same section as your change-order and notice provisions.</p>
            <p>2. Make the log available in a way you can prove. End every workday by emailing that day&apos;s log entry to the client — even one line: &quot;Daily log 3/14 attached: framing crew of 4 on site 7a–3:30p, rain delay 1a start, owner requested moving the kitchen window 6\&quot; left (see log).&quot; The email timestamp is your proof of &quot;made available.&quot;</p>
            <p>3. Record the five things that win disputes every time: who was on site, hours worked, weather, any delay and its cause, and any verbal instruction the client gave you. That last one is gold — verbal change requests are where contractors bleed money.</p>
            <p>4. When the client gives a verbal directive, log it and put it in that night&apos;s email in plain language: &quot;Per your instruction on site today, we will relocate the window. This is a change to scope; a change order will follow.&quot; Now the five-day clock is running on their acceptance.</p>


            <h2>The Detail That Trips People Up</h2>
            <p>The clause only works if you actually make entries available every day. A log you email at the end of the job, all at once, isn&apos;t contemporaneous and the client can argue they never had a chance to object in five days.</p>
            <p>So build the ten-minute habit: last thing before you leave, you write the entry and you send it. Rain or shine, work or no work. A &quot;no work performed — site flooded&quot; entry is exactly the evidence you&apos;ll want if the schedule slips.</p>
            <p>Do this and your field notes stop being your word against theirs. They become a running record the client signed off on before anyone picked up a hammer — and stayed silent on, day after day, in writing.</p>
            <p>If you want the full contract language, daily-log email templates, and the rest of the dispute-proofing paperwork already built out, that&apos;s what we put together for contractors.</p>
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
