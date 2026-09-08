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
          <div className="hero-badge">Before You Hire · September 2026</div>
          <h1>How to Verify a Contractor&apos;s Portfolio Photos Are Actually Their Work</h1>
          <p className="hero-subtitle">Contractors routinely fill their portfolios with stock images and jobs they never touched. This checklist gives you the exact reverse-image searches, questions, and address requests to confirm the photos in front of you came from a job they actually built.</p>
        </div>
      </section>

      <section className="value-props" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-prose article-body">

            <p>Roughly 1 in 3 contractor portfolios contain at least one photo the contractor didn&apos;t take on a job they personally completed. Stock images, manufacturer marketing shots, and &quot;borrowed&quot; photos from subcontractors or online galleries are standard filler. Here&apos;s the exact checklist to confirm the photos in front of you came from a real job this contractor actually built.</p>


            <h2>Run these checks before your next meeting</h2>
            <p>1. Reverse-image search every hero photo. Save the images from their website or social media, then upload each one to Google Images (images.google.com) and TinEye (tineye.com). If the same photo appears on a stock site, a manufacturer&apos;s page, or another contractor&apos;s portfolio, it isn&apos;t theirs.</p>
            <p>2. Check the image metadata. Ask them to text or email you the original photo files, not screenshots. Open the file details (right-click → Properties on Windows, or Get Info on Mac) and look at the date and GPS coordinates. A &quot;recent kitchen&quot; dated 2016 or shot 400 miles away is a problem.</p>
            <p>3. Ask for the address of three jobs in the portfolio. Legitimate contractors will give you at least a street and city. Drive by, or pull the address up on Google Street View to confirm the exterior or neighborhood matches the photos.</p>
            <p>4. Request the permit history. In most jurisdictions you can search permits by address on the city or county building department website. A real remodel or addition leaves a permit trail with the contractor&apos;s license number on it. No permit under their name means they didn&apos;t pull it — and possibly didn&apos;t do the work.</p>
            <p>5. Verify the license number on the photos matches the license they gave you. Look them up on your state contractor licensing board site (search &quot;[your state] contractor license lookup&quot;). Confirm the name, license status, and that it&apos;s active and unexpired.</p>


            <h2>The exact questions to ask out loud</h2>
            <p>Read these directly to the contractor and watch how fast they answer:</p>
            <p>• &quot;Which of these jobs did your crew do start to finish, and which did you sub out?&quot;</p>
            <p>• &quot;Can you connect me with the homeowner from this specific photo?&quot;</p>
            <p>• &quot;When was this job completed, and how long did it take?&quot;</p>
            <p>• &quot;Do you have before-and-during photos of this same project, not just the finished shot?&quot;</p>
            <p>A contractor who did the work has messy in-progress photos, remembers the timeline, and can name the client. A contractor who borrowed the photo gives vague answers and steers you back to the glossy final image.</p>
            <blockquote className="article-quote">
              The finished photo is the easiest thing to fake. Ask for the ugly middle — the framing, the demo, the day it rained. Nobody keeps those unless they were standing on the site.
              <cite>— Residential general contractor, 18 years licensed</cite>
            </blockquote>


            <h2>The one red flag in almost every bad hire</h2>
            <p>The single warning sign that shows up in nearly every bad hire: they can show you the finished result but cannot produce a single in-progress photo, a real client to call, or a verifiable address. Polished portfolio, zero traceability. If everything is a beautiful final shot and nothing can be confirmed back to a real job with a real permit and a real name, walk.</p>
            <p>Once you&apos;ve verified the work is genuinely theirs, protect the money side too. The safest contractors are the ones who don&apos;t flinch at accountability — including how they get paid.</p>
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
