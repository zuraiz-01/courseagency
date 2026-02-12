function JourneySection({ learningSteps }) {
  return (
    <section className="journey-section" id="journey">
      <div className="container">
        <h2 className="scroll-slide-left">How Your Journey Works</h2>
        <p className="scroll-slide-right">
          A clear roadmap from learning fundamentals to building projects and preparing for real
          job opportunities.
        </p>

        <div className="journey-grid">
          {learningSteps.map((step, index) => (
            <article
              key={step.title}
              className="journey-card scroll-pop"
              style={{ transitionDelay: `${120 * (index + 1)}ms` }}
            >
              <span className="journey-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JourneySection
