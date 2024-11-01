"use client"

import { Boutton } from "./Composants/Boutton"
import Text from "./Composants/Text"

export default function Page() {
  return (


  <div className="flex fl justify-center items-center min-h-screen">
   
   <div className="flex fle space-x-2"> {/* Au lieu de `space-x-8` */}
  <Text />
 <Boutton/>
</div>

   
     
  </div>
   )
}
