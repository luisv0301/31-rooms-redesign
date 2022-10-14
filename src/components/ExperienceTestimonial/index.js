import { motion } from "framer-motion";
import "./experienceTestimonial.scss";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const item = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function ExperienceTestimonial() {
  return (
    <div className="experience-testimonial">
      <motion.ul initial="hidden" whileInView="visible" variants={list}>
        <motion.li className="experience-testimonial__item">
          <motion.h2 variants={item}>40+</motion.h2>
          <p>Clientes alrededor del mundo</p>
        </motion.li>
        <motion.li className="experience-testimonial__item experience-testimonial__item--border">
          <motion.h2 variants={item}>45+</motion.h2>
          <p>Proyectos completados con exito</p>
        </motion.li>
        <motion.li className="experience-testimonial__item">
          <motion.h2 variants={item}>10+</motion.h2>
          <p>Años haciendo ideas realidad</p>
        </motion.li>
      </motion.ul>
    </div>
  );
}
