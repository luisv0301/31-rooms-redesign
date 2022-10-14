import Project from "../Project";
import "./projectsList.scss";
import inmueble from "../../images/inmueble-azul.png";
import coded from "../../images/coded-project.png";
import via from "../../images/vialterna-project.png";

const data = [
  {
    title: "Inmueble azul",
    description:
      "Plataforma para ayudar a las personas a encontrar su nuevo hogar",
    thumbnail: inmueble,
  },
  {
    title: "Coded",
    description: "Creando nuevas oportunidades a partir de la educación",
    thumbnail: coded,
  },
  {
    title: "Vialterna",
    description: "Soluciones tecnologicas para el hogar y la empresa",
    thumbnail: via,
  },
];
export default function ProjectsList() {
  return (
    <ul className="projects-list">
      {data.map((item, id) => {
        return <Project {...item} key={id} />;
      })}
    </ul>
  );
}
