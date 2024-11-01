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
   
    <div className='flex flex-col items-center space'>


    </div>
  )
}
