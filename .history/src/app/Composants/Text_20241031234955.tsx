import React from "react";
import { motion, Variants } from "framer-motion";

// Définition des propriétés du composant AnimatedText
interface AnimatedTextProps {
  text: string;
  x: number;
  y: number;
  fontSize?: number;
  fill?: string;
  delay: number;
}

// Variants pour l'animation du texte
const drawText: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      opacity: { delay: custom, duration: 0.5 },
    },
  }),
};

// Composant AnimatedText avec les props typées
const AnimatedText: React.FC<AnimatedTextProps> = ({ text, x, y, fontSize = 24, fill = "#000", delay }) => (
  <motion.text
    x={x}
    y={y}
    fontSize={fontSize}
    fill={fill}
    variants={drawText}
    custom={delay}
    initial="hidden"
    animate="visible"
  >
    {text}
  </motion.text>
);

// Composant principal Text
const Text: React.FC = () => {
  return (
    <motion.svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
    >
      {/* Texte animé : "Les législatives au Sénégal" */}
      <AnimatedText
        text="Les législatives au Sénégal"
        x={50}
        y={100}
        fontSize={}
        fill="#ff0055"
        delay={1}
      />
      
      {/* Texte animé : "Les favoris selon moi" */}
      <AnimatedText
        text="Les favoris selon moi"
        x={50}
        y={150}
        fontSize={60}
        fill="#00cc88"
        delay={1.5}
      />
    </motion.svg>
  );
};

export default Text;
