function FooterSection({ onNewsletterSubmit }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand reveal-up">
          <a className="brand brand-wrap footer-logo" href="#home">
            <span className="brand-mark">M</span>
            <span className="brand-text">Marketing Agency</span>
          </a>
          <p>
            Practical online learning platform for design, development, and data skills with live
            mentors.
          </p>
          <div className="footer-social">
            <a href="#home" aria-label="Go to top">
              ↑
            </a>
            <a href="#teachers" aria-label="Go to teachers">
              T
            </a>
            <a href="#offers" aria-label="Go to offers">
              O
            </a>
            <a href="#contact" aria-label="Go to contact">
              C
            </a>
          </div>
        </div>

        <div className="footer-col reveal-up delay-1">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#teachers">Teachers</a>
          <a href="#offers">Offers</a>
          <a href="#courses">Courses</a>
        </div>

        <div className="footer-col reveal-up delay-2">
          <h3>Support</h3>
          <a href="#contact">Contact</a>
          <a href="mailto:hello@loooacademy.com">Email</a>
          <a href="tel:+1234567890">Call</a>
          <a href="#search">Find Courses</a>
        </div>

        <form className="footer-newsletter reveal-up delay-3" onSubmit={onNewsletterSubmit}>
          <h3>Newsletter</h3>
          <p>Get fresh course updates in your inbox.</p>
          <input type="email" placeholder="Enter your email" required />
          <button className="btn-fill" type="submit">
            Subscribe
          </button>
        </form>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Marketing Agency. All rights reserved.</span>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}

export default FooterSection
