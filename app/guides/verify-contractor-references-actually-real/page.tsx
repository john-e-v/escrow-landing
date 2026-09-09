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
          <div className="hero-badge">Vetting · September 2026</div>
          <h1>How to Confirm a Contractor&apos;s References Are Real People (Not Their Buddies)</h1>
          <p className="hero-subtitle">A glowing reference means nothing if it&apos;s the contractor&apos;s cousin reading from a script. This checklist shows you how to confirm a reference is a real past client at a real address, so you&apos;re vetting the work, not a favor.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Three references is the minimum. Two of them will check out. The third is the one that tells you the truth.</p>
            <p>Most homeowners ask for references, get three phone numbers, hear &quot;he was great,&quot; and hire. That process confirms nothing except that the contractor has three people willing to say nice things. Here is the checklist that confirms a reference is a real past client at a real address — not a buddy reading from a script.</p>


            <h2>The Verification Checklist</h2>
            <p>1. Ask for references from the last 90 days, not &quot;my best jobs.&quot; Recent work is harder to fake and easier to inspect. If every reference is from two or three years ago, ask why the recent ones aren&apos;t being offered.</p>
            <p>2. Get the full property address for each job, not just a name and phone number. A real client lived at a real address. Run that address through your county assessor&apos;s website (search &quot;[your county] property appraiser&quot;) to confirm the person you&apos;re calling actually owns or owned it.</p>
            <p>3. Cross-check the name on the phone against the name on the deed. If the reference says &quot;Sarah Miller&quot; but the assessor lists the owner as &quot;Robert Chen,&quot; you&apos;re either talking to a tenant, a relative, or a plant. Ask directly: &quot;Are you the homeowner on record there?&quot;</p>
            <p>4. Pull the permit history for that address. Most jurisdictions let you search permits online by address. If the contractor claims he did a $40,000 kitchen remodel but no permit was ever pulled, either the work was unpermitted (a real problem) or it never happened.</p>
            <p>5. Call from a number the contractor doesn&apos;t know, and don&apos;t announce yourself as &quot;a reference call.&quot; Say: &quot;I&apos;m considering hiring [contractor] and I found your address on a permit — did they do work for you?&quot; A real client answers naturally. A coached buddy hesitates, because they were expecting a friendly call and got a factual one.</p>
            <p>6. Ask questions only a real client could answer. Not &quot;was he good?&quot; — instead: &quot;What was the final invoice compared to the original estimate?&quot; &quot;How many days did they actually work versus what was promised?&quot; &quot;What went wrong, and how did they handle it?&quot; A buddy has no answers. A real client always remembers the overage and the delay.</p>
            <p>7. Request one reference where something went wrong. Say it plainly: &quot;Give me the name of a client where the job hit a problem.&quot; Every real contractor has one. The way they describe fixing it — and whether that client confirms the story — tells you more than ten happy references.</p>
            <p>8. Ask to see the work in person, or ask the reference to text you a photo. Buddies don&apos;t have photos of a job that never existed. Real clients have their phone full of before-and-afters.</p>


            <h2>The Script to Use on the Call</h2>
            <p>&quot;Hi, I&apos;m vetting [contractor name] for a project and your address came up in the permit records. I&apos;m not calling for a testimonial — I just want the honest version. What did the final cost end up being versus the quote? And if you had to do it again, would you hire them?&quot;</p>
            <p>That opening does two jobs: it filters out anyone who wasn&apos;t actually a client, and it signals you want facts, not flattery.</p>
            <blockquote className="article-quote">
              The reference who only remembers that everything was &apos;perfect&apos; is the one who was never a client. Real jobs have friction, and real clients remember it.
              <cite>— General contractor, 18 years licensed</cite>
            </blockquote>


            <h2>The One Red Flag in Almost Every Bad Hire</h2>
            <p>Every reference is glowing, every address is vague, and not one of them can name a single thing that went wrong.</p>
            <p>That is the tell. Real projects have overages, delays, and a moment where someone was frustrated. When a contractor&apos;s entire reference list sounds like a highlight reel with zero friction, you&apos;re not talking to past clients — you&apos;re talking to people doing him a favor.</p>
            <p>Vetting references is slow. A faster form of protection is refusing to release money until the work is actually done. Contractors who accept escrow payments have already agreed to be paid on results, not promises — which is exactly the kind of contractor who has real references to give.</p>
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
