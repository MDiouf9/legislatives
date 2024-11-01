import "./styles.css";
import { motion } from "framer-motion";

const drawText = {
  hidden: { opacity: 0 },
  visible: (i   : nu) => {
    const delay = 1 + i * 0.5;
    return {
      opacity: 1,
      transition: {
        opacity: { delay, duration: 0.5 }
      }
    };
  }
};

export default function Texte() {
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      {/* Texte : "Les législatives au Sénégal" */}
      <motion.text
        x="50"
        y="100"
        fontSize="24"
        fill="#ff0055"
        variants={drawText}
        custom={1}
      >
        Les législatives au Sénégal
      </motion.text>

      {/* Texte : "Les favoris selon moi" */}
      <motion.text
        x="50"
        y="150"
        fontSize="24"
        fill="#00cc88"
        variants={drawText}
        custom={2}
      >
        Les favoris selon moi
      </motion.text>
    </motion.svg>
  );
}
