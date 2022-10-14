import coded from "../../images/coded.png";
import seremos from "../../images/seremos.png";
import contino from "../../images/contino.png";
import cosecha from "../../images/cosecha-del-sol.png";
import b2b from "../../images/b2b-negocios.png";

import "./clientes.scss";

const clientes = [coded, seremos, contino, cosecha, b2b];

export default function Clients() {
  return (
    <ul className="clients">
      {clientes.map((cliente, id) => {
        return (
          <li key={id}>
            <img src={cliente} alt="" className="clients__img" />
          </li>
        );
      })}
    </ul>
  );
}
