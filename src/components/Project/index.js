import inmueble from "../../images/inmueble-azul.png";
import "./project.scss";

export default function Project() {
  return (
    <li className="project">
      <article className="project__card">
        <div className="project__description">
          <p className="project__subtitle">Inmueble azul</p>
          <h3>
            Plataforma para ayudar a las personas a encontrar su nuevo hogar
          </h3>
          <ul className="tags">
            <li className="tag">Desarrollo</li>
            <li className="tag">Diseño UX/UI</li>
          </ul>
        </div>
        <div className="project__img">
          <img src={inmueble} alt="" />
        </div>
      </article>
    </li>
  );
}
