import "./section.scss";

export default function Section({ title, children }) {
  return (
    <section className="section">
      <h2>
        <span className="decorative"></span>
        {title}
      </h2>
      {children}
    </section>
  );
}
