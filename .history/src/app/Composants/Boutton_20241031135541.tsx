"use client "
import React from 'react'
import {motion } from 'framer-motion'
import { useState } from 'react'

export const Boutton = () => {
    const logo = [ 
        {id: 1, src: '/path/to/logo1.png', photo: '/path/to/photo1.jpg'},
        {id: 1, src: '/path/to/logo1.png', photo: '/path/to/photo1.jpg'},
        {id: 1, src: '/path/to/logo1.png', photo: '/path/to/photo1.jpg'}
         ]
    const [selectPhoto , setSelectPhoto] = useState (null);
   
  return (
   
    <div className='flex flex-col items-center space-y-8'>
        <motion.button   className="p-4 bg-blue-500 text-white rounded-full shadow-lg" 
       whileHover= {{ rotate : 360}}
       transition={{duration :0}}
>
        </motion.button>


    </div>
  )
}
