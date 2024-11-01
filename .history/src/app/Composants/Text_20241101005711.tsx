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
      opacity: { delay: custom, duration: 0.3 }, // Durée réduite
      y: { delay: custom, duration: 0.3 }, // Durée réduite
    },
  }),
};

// Composant AnimatedText avec les props typées
const AnimatedText: React.FC<AnimatedTextProps> = ({ text, fontSize = 24, fill = "#000", delay }) => {
  const words = text.split(" "); // Séparer les mots

  return (
    <div className="flex space-x-2"> {/* Ajouter de l'espace entre les mots */}
      {words.map((word, index) => (
        <motion.div
          key={index} // Utiliser l'index comme clé (peut être amélioré avec des identifiants uniques)
          style={{ fontSize: fontSize, color: fill }}
          variants={drawText}
          custom={delay + index * 0.} // Ajuster le délai pour chaque mot
          initial="hidden"
          animate="visible"
        >
          {word}
        </motion.div>
      ))}
    </div>
  );
};

// Composant principal Text
const Text: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-3">
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
