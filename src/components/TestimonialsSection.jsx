function TestimonialsSection({ testimonials }) {
  return (
    <section className="testimonials-section container" id="reviews">
      <h2 className="scroll-slide-left">Student Success Stories</h2>
      <p className="scroll-slide-right">
        Real results from learners who followed the program and built practical skills.
      </p>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <article
            key={item.name}
            className="testimonial-card scroll-pop"
            style={{ transitionDelay: `${120 * (index + 1)}ms` }}
          >
            <p>"{item.quote}"</p>
            <div className="testimonial-user">
              <img src={item.avatar} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
