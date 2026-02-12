function PartnerStrip({ partners }) {
  return (
    <section className="partner-strip">
      <div className="container partner-row">
        {partners.map((partner) => (
          <span key={partner.name} className="partner-item">
            <i>{partner.icon}</i>
            {partner.name}
          </span>
        ))}
      </div>
    </section>
  )
}

export default PartnerStrip
