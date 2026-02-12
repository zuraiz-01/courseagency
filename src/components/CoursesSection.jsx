function CoursesSection({ courses }) {
  return (
    <section className="popular-section" id="courses">
      <div className="container">
        <h2>Our Popular Courses</h2>
        <p>
          Develop your skills in a fresh, unique way by exploring hands-on experiences,
          creative problem-solving, and real-world applications. Embrace new techniques to
          unlock hidden talents and expand your expertise.
        </p>

        <div className="course-grid">
          {courses.map((course, index) => (
            <article key={course.title} className={`course-card scroll-pop delay-${index + 1}`}>
              <img src={course.image} alt={course.title} />
              <div className="course-meta">
                <span>Web Design</span>
                <span>👤 200</span>
              </div>
              <h3>{course.title}</h3>
              <div className="course-mini-meta">4 Courses | 120+ Students</div>
              <div className="course-footer">
                <strong>$203.00</strong>
                <span className="teacher-info">
                  <img className="teacher-avatar" src={course.avatar} alt={course.teacher} />
                  {course.teacher}
                </span>
              </div>
              <a className="course-link" href="#contact">
                Enroll Course
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
