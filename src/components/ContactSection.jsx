function ContactSection({ onContactSubmit }) {
  return (
    <section className="contact-section container" id="contact">
      <div className="contact-panel scroll-slide-left">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out and our team will guide you quickly.</p>
        <div className="contact-actions">
          <a className="btn-fill" href="tel:+1234567890">
            Call Now
          </a>
          <a className="btn-outline" href="mailto:hello@loooacademy.com">
            Email Us
          </a>
        </div>
      </div>

      <form className="contact-form scroll-slide-right delay-1" onSubmit={onContactSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button className="btn-fill" type="submit">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default ContactSection
