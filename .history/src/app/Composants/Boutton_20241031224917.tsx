"use client";
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

  const toggleRevealed = () => setIsRevealed(!isRevealed);

  return (
    <motion.div
      className='bg-white shadow-lg rounded-full overflow-hidden'
      initial="initial"
      animate={isRevealed ? 'revealed' : 'initial'}
    >
      {!isRevealed ? (
        <motion.button
          onClick={toggleRevealed}
          className="px-6 py-3 bg-blue-500 text-white w-full flex items-center justify-center"
        >
          Législatives
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            className='flex items-center space-x-4 p-4'
            initial="initial"
            animate="revealed"
            exit="initial"
          >
            {logos.map((logo) => (
              <motion.div
                key={logo.id} // Clé unique pour chaque logo
                className='relative'
                onHoverStart={() => setSelectedLogo(logo)}
                onHoverEnd={() => setSelectedLogo(null)}
              >
                <img src={logo.src} alt="logo parties" className='w-10 h-10 rounded-full cursor-pointer' />
              </motion.div>
            ))}
            <motion.button
              onClick={toggleRevealed}
              className="ml-auto bg-red-500 text-white p-2 rounded-full"
            >
              <X />
            </motion.button>
          </motion.div>
          <AnimatePresence>
            {selectedLogo && (
              <motion.div
                key={`selected-${selectedLogo.id}`} // Clé unique pour l'image sélectionnée
                initial="initial"
                animate="revealed"
                exit="initial"
                className="w-full max-w-2xl mt-4 mx-auto"
              >
                <img
                  src={selectedLogo.photo}
                  alt="Selected logo"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatePresence>
      )}
    </motion.div>
  );
};
