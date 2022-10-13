import Service from "../Service";
import "./servicesList.scss";

export default function ServicesList() {
  return (
    <ul role="list" className="servicesList">
      <Service />
      <Service />
      <Service />
    </ul>
  );
}
