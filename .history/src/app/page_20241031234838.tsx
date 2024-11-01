"use client"

import { Boutton } from "./Composants/Boutton"
import Text from "./Composants/Text"

export default function Page() {
  return (

<div className="flex justify-center items-center ">
  <div className="max-w-md w-full px-4">
    <div className="flex flex-col justify-center items-center4">
      <Text />
      <div className="mt-20"> {/* Ajoutez un margin-top pour le bouton */}
        <Boutton />
      </div>
    </div>
  </div>
</div>

     
  
   )
}
