export function PageHeader({ title, description }) {
  return (
    <header className="bitacora-hero">
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export function BitacoraSection({ title, children }) {
  return (
    <section className="bitacora-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function BitacoraCard({ icon: Icon, title, children, className = "" }) {
  return (
    <article className={`bitacora-card ${className}`.trim()}>
      {Icon && (
        <div className="card-icon">
          <Icon />
        </div>
      )}

      <div className="card-content">
        {title && <h3>{title}</h3>}
        {children}
      </div>
    </article>
  );
}

export function ComparisonCard({ title, items }) {
  return (
    <div className="comparison-card">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function TimelineItem({ title, description }) {
  return (
    <article className="timeline-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export function TechStack({ items }) {
  return (
    <div className="tech-stack">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}
