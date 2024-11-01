"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Logo {
  id: number;
  src: string;
  photo: string;
}

const logos: Logo[] = [
  { id: 1, src: '/path/to/logo1.png', photo: '/path/to/photo1.jpg' },
  { id: 2, src: '/path/to/logo2.png', photo: '/path/to/photo2.jpg' },
  { id: 3, src: '/path/to/logo3.png', photo: '/path/to/photo3.jpg' }
];

export const Boutton = () => {
  const [selectPhoto, setSelectPhoto] = useState<string | null>(null);

  return (
    <div className='flex flex-col items-center space-y-8'>
      <motion.button
        className="relative p-4 bg-blue-500 text-white rounded-full shadow-lg overflow-hidden"
        whileHover={{ scale: 1.1 }} // Agrandit légèrement le bouton au survol
        transition={{ duration: 0.3 }}
      >
        legislatives

        <div className='absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          {logos.map((logo) => (
            <motion.div
              key={logo.id}
              className='w-16 h-16 rounded-full shadow-lg mx-1'
              whileHover={{ scale: 1.1 }}
              onHoverStart={() => setSelectPhoto(logo.photo)}
              onHoverEnd={() => setSelectPhoto(null)}
            >
              <img src={logo.src} alt={`logo ${logo.id}`} className='w-full h-full object-contain' />
            </motion.div>
          ))}
        </div>
      </motion.button>

      <motion.div
        className='w-64 h-64 rounded-lg overflow-hidden shadow-lg'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <img src={selectPhoto ?? '/default/image.jpg'} alt="photo sélectionnée" className='w-full h-full object-cover' />
      </motion.div>
    </div>
  );
}
