import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface Logo {
  id: number;
  src: string;
  photo: string;
  shadowColor: string; // Ajout de la couleur d'ombre personnalisée
}

const logos: Logo[] = [
  { 
    id: 1, 
    src: '/pastef.jpg', 
    photo: '/soko.jpg',
    shadowColor: 'rgba(59, 130, 246, 0.5)' // Bleu
  },
  { 
    id: 2, 
    src: '/jame.jpg', 
    photo: '/amaba.jpg',
    shadowColor: 'rgba(16, 185, 129, 0.5)' // Vert
  },
  { 
    id: 3, 
    src: '/samekadu.jpg', 
    photo: '/bandit.jpg',
    shadowColor: '' // Rose
  }
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
    initial: { 
      opacity: 0, 
      scale: 0.9,
      boxShadow: '0 0 0 rgba(0,0,0,0)'
    },
    revealed: { 
      opacity: 1, 
      scale: 1,
      boxShadow: '0 8px 32px', // L'ombre sera définie dynamiquement
      transition: { 
        duration: 0.3,
        boxShadow: { duration: 0.4 }
      } 
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      boxShadow: '0 0 0 rgba(0,0,0,0)',
      transition: { duration: 0.2 }
    }
  };

  const toggleRevealed = () => {
    setIsRevealed(!isRevealed);
    setSelectedLogo(null);
  };

  const handleLogoClick = (logo: Logo) => {
    if (selectedLogo?.id === logo.id) {
      setSelectedLogo(null);
    } else {
      setSelectedLogo(logo);
    }
  };

  return (
    <div className="relative flex flex-col gap-4">
      <AnimatePresence mode="wait">
        {selectedLogo && (
          <motion.div
            key={selectedLogo.id}
            initial="initial"
            animate="revealed"
            exit="exit"
            variants={imageVariants}
            style={{
              boxShadow: `0 8px 32px ${selectedLogo.shadowColor}`
            }}
            className="w-full rounded-lg overflow-hidden"
          >
            <motion.img
              src={selectedLogo.photo}
              alt="Selected logo"
              className="w-full h-48 object-cover"
              layoutId={`photo-${selectedLogo.id}`}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
                onClick={() => handleLogoClick(logo)}
                className={`relative cursor-pointer transition-transform duration-200 ${
                  selectedLogo?.id === logo.id ? 'scale-110' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="rounded-full"
                  style={{
                    boxShadow: selectedLogo?.id === logo.id 
                      ? `0 0 12px ${logo.shadowColor}` 
                      : 'none'
                  }}
                >
                  <img 
                    src={logo.src} 
                    alt="logo parties" 
                    className='w-10 h-10 rounded-full object-cover' 
                  />
                </motion.div>
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