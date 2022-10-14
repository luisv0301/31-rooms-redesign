import { motion } from "framer-motion";

import Button from "../Button";
import "./banner.scss";

export default function Banner() {
  return (
    <motion.div
      className="banner"
      initial={{ filter: "brightness(0)" }}
      whileInView={{ filter: "brightness(1)" }}
      transition={{ duration: 2.5 }}
    >
      <h3>
        Nuestro objetivo es ayudarte en la construcción de tus ideas, con
        diseños memorables e interfaces increiblemente rapidas y seguras
      </h3>
      <Button>Cuentanos sobre tu idea</Button>
    </motion.div>
  );
}
