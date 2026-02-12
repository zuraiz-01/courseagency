function OffersSection({ offers }) {
  return (
    <section className="offers-section" id="offers">
      <div className="container">
        <h2>Special Offers</h2>
        <p>Choose a plan and start your learning path today.</p>

        <div className="offer-grid">
          {offers.map((offer, index) => (
            <article
              key={offer.name}
              className={`offer-card ${offer.featured ? 'featured' : ''} scroll-pop delay-${index + 1}`}
            >
              <h3>{offer.name}</h3>
              <strong>{offer.price}</strong>
              <span className="offer-caption">{offer.caption}</span>
              <ul>
                {offer.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <a className="offer-btn" href="#contact">
                Choose Plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OffersSection
