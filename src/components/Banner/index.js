import Button from "../Button";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="banner">
      <h3>
        Nuestro objetivo es ayudarte en la construcción de tus ideas, con
        diseños memorables e interfaces increiblemente rapidas y seguras
      </h3>
      <Button>Cuentanos sobre tu idea</Button>
    </div>
  );
}
