import Project from "../Project";
import "./projectsList.scss";

export default function ProjectsList() {
  return (
    <ul className="projects-list">
      <Project />
      <Project />
    </ul>
  );
}
