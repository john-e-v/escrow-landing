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
          <div className="hero-badge">Vetting Checklist · August 2026</div>
          <h1>Your Contractor Is Licensed — But Is It the Right License for Your Job?</h1>
          <p className="hero-subtitle">A general contractor&apos;s license doesn&apos;t automatically cover electrical, plumbing, or roofing work. Here&apos;s how to confirm the license class actually matches the job you&apos;re hiring for — before you sign.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Step 1: Ask for the license number in writing — not a photo of a card, the actual number.</p>
            <p>A physical card tells you nothing. License cards get borrowed, expire, and get faked. You need the number so you can verify it yourself against the state&apos;s records. If a contractor hesitates to give you the number, or gives you a name instead of a number, stop the conversation there.</p>
            <p>Do not schedule work off a verbal &quot;yeah, I&apos;m licensed.&quot; Get the number typed into a text or email so you have it in writing before anything else happens.</p>


            <h2>Step 2: Look up the license on your state board — and read the classification</h2>
            <p>Every state has a license lookup site. Search &quot;[your state] contractor license lookup&quot; and go to the .gov result, not a third-party directory.</p>
            <p>When the record loads, don&apos;t just confirm it says ACTIVE. Read the classification field. This is the part almost nobody checks. A general building contractor (often &quot;B&quot; or &quot;GC&quot;) is licensed to coordinate a project — but that classification does not automatically authorize them to perform electrical, plumbing, HVAC, or roofing work themselves.</p>
            <p>Many states require a separate specialty classification for each trade: C-10 for electrical, C-36 for plumbing, C-20 for HVAC, C-39 for roofing (California letters shown as an example — your state&apos;s codes differ). Match the classification on the record to the actual work you&apos;re hiring for.</p>
            <blockquote className="article-quote">
              A GC can legally run the job. Whether they can legally rewire your panel is a completely different license question — and homeowners almost never ask it.
              <cite>— State licensing board investigator</cite>
            </blockquote>


            <h2>Step 3: If the job touches a specialty trade, ask who holds that license</h2>
            <p>If your general contractor is subbing out the electrical or plumbing, ask for the sub&apos;s license number too — and verify it the same way.</p>
            <p>Script you can copy: &quot;Who&apos;s doing the electrical, and what&apos;s their license number and classification? I want to verify it before we start.&quot;</p>
            <p>A legitimate contractor answers this without friction. They deal with it constantly. Evasion here is the whole ballgame.</p>


            <h2>Step 4: Confirm the license is bonded and insured for that class</h2>
            <p>On the same lookup page, check for an active bond and workers&apos; comp status. Then request a Certificate of Insurance (COI) sent directly from their insurer or agent — not a PDF they email you themselves.</p>
            <p>The COI should name the trade being performed. General liability coverage written for &quot;carpentry&quot; may not cover a roofing claim. Ask the agent directly: &quot;Does this policy cover [your specific work]?&quot;</p>


            <h2>Step 5: Cross-check the name on the license against the name on the contract</h2>
            <p>The license number you verified must belong to the business or person you&apos;re actually signing with. &quot;Borrowed license&quot; jobs — where an unlicensed operator uses a licensed friend&apos;s number — fall apart exactly here. The name on the state record and the name on your contract have to match.</p>


            <h2>The one red flag in almost every bad hire</h2>
            <p>They want a large deposit up front, in cash or by a method you can&apos;t reverse — before any verifiable work begins.</p>
            <p>Every version of the bad-hire story runs through this. The unlicensed operator, the wrong-classification job, the borrowed-license scam — all of them need your money before you&apos;ve confirmed anything. A contractor confident in their license and their work does not need to be paid before they&apos;ve earned it.</p>
            <p>The cleanest way to remove that risk entirely is to structure payment so funds are only released as verified milestones are completed — which also gives you a paper trail if the classification, insurance, or workmanship ever comes into question.</p>
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
