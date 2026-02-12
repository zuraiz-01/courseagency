function Header() {
  return (
    <header className="topbar container" id="home">
      <a className="brand brand-wrap" href="#home">
        <span className="brand-mark">M</span>
        <span className="brand-text">Marketing Agency</span>
      </a>

      <nav className="nav-links">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#teachers">Teachers</a>
        <a href="#offers">Offers</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="auth-actions">
        <a className="btn-outline" href="#contact">
          Sign in
        </a>
        <a className="btn-fill" href="#offers">
          Free Trial
        </a>
      </div>
    </header>
  )
}

export default Header
