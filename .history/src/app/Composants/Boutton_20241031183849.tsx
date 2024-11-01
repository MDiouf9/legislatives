"use client "
import React from 'react'
import {AnimatePresence, motion } from 'framer-motion'
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
   animate={isRevelead ? 'revelead' : 'initial'}
   variants={containerVariants}
   
   
   >
    {!isRevelead ?(

        <motion.button onClick={ToggleRevelead}  className="p-4 bg-blue-500 text-white rounded-full shadow-lg" 
       whileHover= {{ scale :  1.05}}
      whileTap={{scale :0.95}}
>
  legislatives
        </motion.button>
           ) : (
<AnimatePresence> 
 

   

   }

 </div> 
 </AnimatePresence>
)}
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
    
    </motion.div>
  );
   };
