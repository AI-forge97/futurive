/**
 * CaseStudies — hidden by default until real content exists.
 * Set visible={true} to show once you have real case studies.
 * Do NOT populate with invented metrics or anonymised names without real data.
 */
export default function CaseStudies({ visible = false }: { visible?: boolean }) {
  if (!visible) return null;

  return (
    <section className="section-raised">
      <div className="container-content">
        <div className="section-header">
          <span className="section-label">Case studies</span>
          <h2 className="heading-2" style={{ color: "var(--color-sand)" }}>
            Results from real deployments
          </h2>
        </div>
        {/* Add real case study cards here */}
      </div>
    </section>
  );
}
