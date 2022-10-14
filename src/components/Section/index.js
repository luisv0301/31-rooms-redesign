import { motion } from "framer-motion";
import "./section.scss";

const list = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  hidden: {
    opacity: 0,
    x: -30,
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -30 },
};

export default function Section({ title, children }) {
  return (
    <section className="section">
      <motion.h2 initial="hidden" whileInView="visible" variants={list}>
        <motion.span className="decorative" variants={item}></motion.span>
        {title}
      </motion.h2>
      {children}
    </section>
  );
}
