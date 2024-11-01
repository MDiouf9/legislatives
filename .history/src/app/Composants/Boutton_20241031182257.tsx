"use client "
import React from 'react'
import {motion } from 'framer-motion'
import { useState } from 'react'



interface logo {
id : number,
src:string,
photo: string,


};
 const logos : logo [] = [ 
        {id: 1, src: '/path/to/logo1.png', photo: '/path/to/photo1.jpg'},
        {id: 2, src: '/path/to/logo1.png', photo: '/path/to/photo1.jpg'},
        {id: 3, src: '/path/to/logo1.png', photo: '/path/to/photo1.jpg'}
         ];
export const Boutton = () => {   
   
    const [selectPhoto , setSelectPhoto] = useState<string | null>(null);
    const [ isRevelead , setIsRevelead] = useState (false);
    const containerVariants = {
      initial : {
          width: '200px',
          BorderRadius: '9999px'
      },
    
    revelead : {
      width : '100%',
      borderRadius: '16px',
      transition: { duration: 0.5, ease: "easeInOut" }
    }
   } ;

  const logoVariants = {
    initial: { 
      opacity: 0, 
      x: -20,
      display: 'none'
    },
    revealed: { 
      opacity: 1, 
      x: 0,
      display: 'flex',
      transition: {
        duration: 0.3,
        delay: 0.3
      }
    }
  };
  const ToggleRevelead =  () => {
    setIsRevelead(!isRevelead)
  };
  return (
   <motion.div className=' bg-white shadow-lg rounded-full overflow-hidden'
   initial= "initial"
   variants={isRevelead ! 'revelead' : 'initial'}
   
   
   >
    <div className='flex flex-col items-center space-y-8'>
        <motion.button   className="p-4 bg-blue-500 text-white rounded-full shadow-lg" 
       whileHover= {{ rotate : 360}}
       transition={{duration :0.5}}
>
  legislatives
        </motion.button>

 <div className=' flex space-x-4 overflow-x-scroll shadow-lg p-2 cursor-pointer'>
   {logos.map((logo)=> (
    <motion.div
    key={logo.id}
    className=' w-24 h-24 rounded-full shadow-lg  py-2 cursor pointer'
    whileHover={{scale:1.1}}
    onHoverStart={() => setSelectPhoto(logo.photo)}
    onHoverEnd={() => setSelectPhoto(null)}
    >
      <img src={logo.src} alt={`logo ${logo.id} `} className='w-full h-full object-contain' />

    </motion.div>
   ))  

   

   }

 </div>
 { selectPhoto &&  (
<motion.div
className=' w-64 h-64 rounded-lg overflow-hidden shadow-lg '
initial={{opacity:0, y:10}}
animate ={{opacity:1, y:0}}
transition={{duration:0.3}}
>
<img src={selectPhoto} alt="photo selectionner" className='w-full h-full object-cover' />
</motion.div>

  )}
    </div>
    </motion.div>
  );
   };
