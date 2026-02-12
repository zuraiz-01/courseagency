function StatsSection({ stats }) {
  return (
    <section className="stats-section container" id="results">
      <h2 className="scroll-slide-left">Our Learning Impact</h2>
      <p className="scroll-slide-right">
        Thousands of learners have transformed their careers through structured guidance,
        practical coursework, and mentor-led support.
      </p>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <article
            key={item.label}
            className="stat-card scroll-pop"
            style={{ transitionDelay: `${120 * (index + 1)}ms` }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default StatsSection
