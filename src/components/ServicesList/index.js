import Service from "../Service";
import "./servicesList.scss";

export default function ServicesList() {
  return (
    <ul className="servicesList">
      <Service />
      <Service />
    </ul>
  );
}
