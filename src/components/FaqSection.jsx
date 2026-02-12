function FaqSection({ faqs }) {
  return (
    <section className="faq-section" id="faq">
      <div className="container faq-wrap">
        <div className="faq-side scroll-slide-left">
          <h2>Frequently Asked Questions</h2>
          <p>
            Everything you need to know before joining. If you still have questions, contact our
            support team anytime.
          </p>
          <a href="#contact" className="btn-fill">
            Talk to Support
          </a>
        </div>

        <div className="faq-list scroll-slide-right">
          {faqs.map((faq, index) => (
            <details key={faq.question} style={{ transitionDelay: `${110 * (index + 1)}ms` }}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
