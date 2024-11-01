"use client"
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
  const [ selectedLogo, setSeletedLogo] =  useState< string | null >(null);

  const containerVariants = {
    initial: { width: '200px', borderRadius: '9999px' },
    revealed: { width: '100%', borderRadius: '16px', transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  const logoVariants = {
    initial: { opacity: 0, x: -20, display: 'none' },
    revealed: { opacity: 1, x: 0, display: 'flex', transition: { duration: 0.3, delay: 0.3 } }
  };

  const toggleRevealed = () =>   
  if (!isRevealed) {
    selectedLogo(null);
  };

  return (
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
        <AnimatePresence>
          <motion.div
            className='flex items-center space-x-4 p-4'
            initial="initial"
            animate="revealed"
            exit="initial"
            variants={logoVariants}
          >
            {logos.map((logo) => (
        <motion.div
        className='relative'
        key={logo.id}
        onHoverStart={() => setSeletedLogo(logo)}
        onHoverEnd={() => setSeletedLogo(null)}
        whileHover={{ scale: 1.1 }}
        
        >
                <img src={logo.src} alt="logo parties" className='w-10 h-10 rounded-full cursor-pointer' />
                </motion.div>
            ))}
            <motion.button
              onClick={toggleRevealed}
              className="ml-auto bg-red-500 text-white p-2 rounded-full"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X />
            </motion.button>
          </motion.div>
          <AnimatePresence>
        {selectedLogo && (
          <motion.div
            initial="initial"
            animate="revealed"
            exit="initial"
            variants={imageVariants}
            className="w-full max-w-2xl"
          >
            <img 
              src={selectedLogo.photo}
              alt={selectedLogo.alt}
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
