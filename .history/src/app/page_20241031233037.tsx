"use client"

import { div } from "framer-motion/client"
import { Boutton } from "./Composants/Boutton"
import Text from "./Composants/Text";


export default function Page() {
  return (
    

  <div className="flex justify-center items-center min-h-screen">
   <Text/>
   <div className="max-w-md ">
 
<Boutton/>
   </div>
     
  </div>
   )
}
