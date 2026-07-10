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
          <h1>The Daily Photo Log That Wins Disputes: What to Shoot on Every Job</h1>
          <p className="hero-subtitle">A time-stamped photo log is the cheapest liability insurance you&apos;ll ever carry. This is the exact shot list and captioning script to run on every job, starting your next site visit.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Copy this caption script into your phone&apos;s notes app right now:</p>
            <p>&quot;[DATE] – [TIME] – [ADDRESS] – [ROOM/AREA] – [WHAT THIS SHOWS] – [WHO WAS PRESENT].&quot;</p>
            <p>Example: &quot;2024-06-14 – 7:42 AM – 118 Oak St – Master Bath – Subfloor dry, no staining before demo begins – Me + homeowner Sarah.&quot;</p>
            <p>That single line, attached to every photo you take, is the difference between &quot;he said, she said&quot; and a case that never goes to court. A time-stamped photo log is the cheapest liability insurance you&apos;ll ever carry, and you can start it on your next site visit without buying a thing.</p>
            <blockquote className="article-quote">
              [DATE] – [TIME] – [ADDRESS] – [ROOM/AREA] – [WHAT THIS SHOWS] – [WHO WAS PRESENT]
              <cite>— the caption template to paste into every photo note</cite>
            </blockquote>


            <h2>The Shot List for Every Job</h2>
            <p>Run this exact sequence the moment you arrive on site, before you touch anything:</p>
            <p>1. **The wide establishing shot** — full room or elevation, so the space is identifiable later.
2. **Pre-existing damage** — every crack, stain, dent, or defect that was there before you started. Photograph it aggressively. This is what stops a homeowner from blaming you for their old problems.
3. **The work area clean** — the surface or system exactly as you found it.
4. **Utilities and shutoffs** — panel, water main, gas valve positions on arrival.</p>
            <p>Then, during the job:</p>
            <p>5. **Progress at end of each day** — same angles as your establishing shots so anyone can compare.
6. **Anything hidden before it&apos;s covered** — inside walls, under flooring, behind tile. Once drywall goes up, this photo is your only proof the rough-in was done right.
7. **Deliveries and materials** — model numbers and quantities on the label.</p>
            <p>And at closeout:</p>
            <p>8. **Completed work, same angles as day one.**
9. **Site cleaned and cleared.**</p>


            <h2>Caption Every Shot Within the Hour</h2>
            <p>A photo with no context is nearly worthless in a dispute. A photo with a dated, plain-English caption is evidence. Fill in that template line for each shot the same day you take it — memory fades fast, and a caption you write three weeks later looks manufactured.</p>
            <p>The &quot;WHAT THIS SHOWS&quot; field is where you win. Don&apos;t write &quot;bathroom.&quot; Write &quot;Existing water stain on ceiling, present before any plumbing work.&quot; Describe the condition and its significance, not just the location.</p>


            <h2>Send a Weekly Photo Recap</h2>
            <p>End every week with a short message to the client:</p>
            <p>&quot;Here&apos;s this week&apos;s progress at [ADDRESS]. Photos attached and timestamped. Let me know by Friday if anything looks off — otherwise we proceed as planned Monday.&quot;</p>
            <p>This does two things. It keeps the client informed so small concerns never fester into big ones. And it creates a paper trail showing you gave them repeated chances to raise issues. A homeowner who approved twelve weekly recaps has a very hard time claiming they were shocked by the finished result.</p>


            <h2>Back It Up the Same Day</h2>
            <p>Photos on a lost or cracked phone protect nobody. At the end of each day, let the images auto-upload to cloud storage in a folder named for the job. If a dispute ever lands on a lawyer&apos;s desk, you want to hand over a clean, organized, chronological set — not scroll through a camera roll of 4,000 pictures in front of opposing counsel.</p>
            <p>Do this on your very next job. One establishing shot, one caption, one backup. By closeout you&apos;ll have a documented record that quietly settles most arguments before they start.</p>
            <p>If you&apos;d rather your captions, timestamps, and job folders build themselves automatically, that&apos;s exactly what the contractor plans are set up to handle.</p>
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
