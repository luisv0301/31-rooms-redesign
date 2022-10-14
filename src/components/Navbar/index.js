import logo from "../../images/logo-31-rooms.png";
import Select from "../Select";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="nav__container">
      <nav className="nav">
        <img
          src={logo}
          alt="31 Rooms logo"
          width="95"
          height="32"
          className="logo"
        />
        <Select />
      </nav>
    </div>
  );
}
