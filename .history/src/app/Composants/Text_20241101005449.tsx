import React from "react";
import { motion, Variants } from "framer-motion";

// Variants pour l'animation de chaque lettre
const letterVariants: Variants = {
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

// Composant pour une lettre animée
const AnimatedLetter: React.FC<{ letter: string; delay: number; fontSize: number; fill: string }> = ({ letter, delay, fontSize, fill }) => (
  <motion.span
    variants={letterVariants}
    custom={delay}
    initial="hidden"
    animate="visible"
    style={{ fontSize: fontSize, color: fill }}
  >
    {letter}
  </motion.span>
);

// Composant AnimatedText modifié
const AnimatedText: React.FC<{ text: string; fontSize?: number; fill?: string; delay: number }> = ({ text, fontSize = 24, fill = "#000", delay }) => {
  return (
    <div style={{ display: 'flex' }}>
      {text.split('').map((letter, index) => (
        <AnimatedLetter
          key={index}
          letter={letter}
          delay={delay + index * 0.5} // Délai de 0.5 seconde entre chaque lettre
          fontSize={fontSize}
          fill={fill}
        />
      ))}
    </div>
  );
};

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
