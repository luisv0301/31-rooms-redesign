import "./service.scss";

export default function Service({ title, description, activities, icon }) {
  return (
    <li className="service">
      <article className="service__card">
        <div className="service__img">
          <img src={icon} alt={description} width="64" height="64" />
        </div>

        <div className="service__description">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{activities}</p>
        </div>
      </article>
    </li>
  );
}
