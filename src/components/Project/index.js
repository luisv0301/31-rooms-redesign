import "./project.scss";

export default function Project({ title, description, thumbnail }) {
  return (
    <li className="project">
      <article className="project__card">
        <div className="project__description">
          <p className="project__subtitle">{title}</p>
          <h3>{description}</h3>
          <ul className="tags">
            <li className="tag">Desarrollo</li>
            <li className="tag">Diseño UX/UI</li>
          </ul>
        </div>
        <div className="project__img">
          <img src={thumbnail} alt={description} />
        </div>
      </article>
    </li>
  );
}
