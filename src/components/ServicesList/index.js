import Service from "../Service";

import computer from "../../images/computer.svg";
import pencil from "../../images/pencil.svg";
import "./servicesList.scss";

const data = [
  {
    title: "UX/UI",
    description:
      "Tomamos tus requerimientos y los convertimos en prototipos que nos permitan obtener rápidamente feedback para guiar las decisiones de diseño.",
    activities:
      "Investigación - Prototipado - IA - Análisis heurísticos - A11Y",
    icon: pencil,
  },
  {
    title: "Desarrollo",
    description:
      "Construimos interfaces haciendo uso de las  tecnologías más nuevas y seguras, pero no estamos atados a ninguna, nos adaptamos a las necesidades especificas del proyecto. Escalabilidad y performance son nuestra prioridad.",
    activities: "Frontend - Backend - CMS",
    icon: computer,
  },
];

export default function ServicesList() {
  return (
    <ul className="servicesList">
      {data.map((item, id) => {
        return <Service {...item} key={id} />;
      })}
    </ul>
  );
}
