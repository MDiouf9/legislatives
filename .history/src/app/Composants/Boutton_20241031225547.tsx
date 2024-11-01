import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface Logo {
  id: number;
  src: string;
  photo: string;
}

const logos: Logo[] = [
  { id: 1, src: '/pastef.jpg', photo: '/soko.jpg' },
  { id: 2, src: '/jame.jpg', photo: '/amaba.jpg' },
  { id: 3, src: '/samekadu.jpg', photo: '/bandit.jpg' }
];

export const Boutton = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);

  const containerVariants = {
    initial: { width: '200px', borderRadius: '9999px' },
    revealed: { width: '100%', borderRadius: '16px', transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    revealed: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  const imageVariants = {
    initial: { opacity: 0, y: 20, height: 0 },
    revealed: { 
      opacity: 1, 
      y: 0, 
      height: 'auto',
      transition: { duration: 0.3 } 
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 }
    }
  };

  const toggleRevealed = () => {
    setIsRevealed(!isRevealed);
    setSelectedLogo(null); // Réinitialise l'image sélectionnée lors de la fermeture
  };

  return (
    <div className="relative flex flex-col">
      {/* Zone d'affichage de l'image au-dessus du bouton */}
      <AnimatePresence mode="wait">
        {selectedLogo && (
          <motion.div
            key={selectedLogo.id}
            initial="initial"
            animate="revealed"
            exit="exit"
            variants={imageVariants}
            className="w-full overflow-hidden mb-4"
          >
            <img
              src={selectedLogo.photo}
              alt="Selected logo"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton et logos */}
      <motion.div
        className='bg-white shadow-lg rounded-full overflow-hidden'
        initial="initial"
        animate={isRevealed ? 'revealed' : 'initial'}
        variants={containerVariants}
      >
        {!isRevealed ? (
          <motion.button
            onClick={toggleRevealed}
            className="px-6 py-3 bg-blue-500 text-white w-full flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Législatives
          </motion.button>
        ) : (
          <motion.div
            className='flex items-center space-x-4 p-4'
            initial="initial"
            animate="revealed"
            variants={logoVariants}
          >
            {logos.map((logo) => (
              <motion.div
                key={logo.id}
                className='relative'
                onHoverStart={() => setSelectedLogo(logo)}
                onHoverEnd={() => setSelectedLogo(null)}
                whileHover={{ scale: 1.1 }}
              >
                <img 
                  src={logo.src} 
                  alt="logo parties" 
                  className='w-10 h-10 rounded-full cursor-pointer object-cover' 
                />
              </motion.div>
            ))}
            <motion.button
              onClick={toggleRevealed}
              className="ml-auto bg-red-500 text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};