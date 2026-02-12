function BenefitsSection({ benefits }) {
  return (
    <section className="benefit-section container" id="benefits">
      <div className="benefit-visual scroll-slide-left">
        <div className="visual-shell">
          <img
            className="benefit-image"
            src="/images/benefits-student.jpg"
            alt="Student attending online class"
          />
        </div>
      </div>

      <div className="benefit-copy scroll-slide-right delay-1">
        <h2>
          <span>Benefits</span> from our online learning
        </h2>

        <div className="benefit-list">
          {benefits.map((benefit, index) => (
            <article key={benefit.title} className={`benefit-item scroll-pop delay-${index + 1}`}>
              <div className="benefit-icon">{benefit.icon}</div>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
