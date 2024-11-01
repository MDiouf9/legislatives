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
        <motion.button className="text-white bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
>


        </motion.button>


    </div>
  )
}
