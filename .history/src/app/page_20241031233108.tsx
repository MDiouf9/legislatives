"use client"

import { div } from "framer-motion/client"
import { Boutton } from "./Composants/Boutton"
import Text from "./Composants/Text";


export default function Page() {
  return (
    

  <div className="flex justify-center items-center min-h-screen">
  
   <div className="max-w-md ">
      <div>
           <Text/>
          <Boutton/>
      </div>

   </div>
     
  </div>
   )
}