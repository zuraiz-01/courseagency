function TeachersSection({ teachers }) {
  return (
    <section className="teachers-section container" id="teachers">
      <h2>Meet Our Teachers</h2>
      <p>Learn from specialists with strong industry exposure and practical coaching methods.</p>

      <div className="teacher-grid">
        {teachers.map((teacher, index) => (
          <article key={teacher.name} className={`teacher-card scroll-pop delay-${index + 1}`}>
            <img src={teacher.avatar} alt={teacher.name} className="teacher-photo" />
            <h3>{teacher.name}</h3>
            <span className="teacher-role">{teacher.role}</span>
            <div className="teacher-stats">
              <span>{teacher.experience}</span>
              <span>{teacher.students}</span>
            </div>
            <a className="teacher-link" href="#contact">
              Book Demo
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TeachersSection
