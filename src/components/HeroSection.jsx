function HeroSection() {
  return (
    <section className="hero container">
      <div className="hero-copy reveal-up">
        <h1>Develop your skills in a new and unique way</h1>
        <p>
          Develop your skills in a fresh, unique way by exploring hands-on experiences,
          creative problem-solving, and real-world applications. Embrace new techniques to
          unlock hidden talents and expand your expertise.
        </p>
        <div className="hero-actions">
          <a className="btn-fill big" href="#courses">
            Enrol now!
          </a>
          <a className="watch-btn" href="#benefits">
            <span className="play-icon">▶</span>
            Watch video
          </a>
        </div>
      </div>

      <div className="hero-art reveal-up delay-1">
        <div className="glow"></div>
        <div className="orb"></div>
        <div className="chip chip-code">Code</div>
        <div className="chip chip-design">Design</div>

        <div className="icon-bubble b1">📘</div>
        <div className="icon-bubble b2">💡</div>
        <div className="icon-bubble b3">📈</div>
        <div className="icon-bubble b4">▶</div>

        <span className="dot dot-1"></span>
        <span className="dot dot-2"></span>
        <span className="dot dot-3"></span>

        <div className="hero-image-wrap">
          <img className="hero-image" src="/images/hero-learning.jpg" alt="Student learning online" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
