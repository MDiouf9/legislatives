import React from "react";
import { motion, Variants } from "framer-motion";

// Définition des propriétés du composant AnimatedText
interface AnimatedTextProps {
  text: string;
  fontSize?: number;
  fill?: string;
  delay: number;
}

// Variants pour l'animation du texte
const drawText: Variants = {
  hidden: { opacity: 0, y: 20 }, // Départ en bas
  visible: (custom: number) => ({
    opacity: 1,
    y: 0, // Retour à la position d'origine
    transition: {
      opacity: { delay: custom, duration: 0.5 },
      y: { delay: custom, duration: 0.5 }, // Animation de la position
    },
  }),
};

// Composant AnimatedText avec les props typées
const AnimatedText: React.FC<AnimatedTextProps> = ({ text, fontSize = 24, fill = "#000", delay }) => (
  <motion.div
    style={{ fontSize: fontSize, color: fill }}
    variants={drawText}
    custom={delay}
    initial="hidden"
    animate="visible"
  >
    {text}
  </motion.div>
);

// Composant principal Text
const Text: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Texte animé : "Les législatives au Sénégal" */}
      <AnimatedText
        text="Les législatives au Sénégal"
        fontSize={60}
        fill="#ff0055"
        delay={1}
      />
      
      {/* Texte animé : "Les favoris selon moi" */}
      <AnimatedText
        text="Les favoris selon moi"
        fontSize={60}
        fill="#00cc88"
        delay={1.5}
      />
    </div>
  );
};

export default Text;
