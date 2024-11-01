"use client"

import { Boutton } from "./Composants/Boutton"
import Text from "./Composants/Text"

export default function Page() {
  return (

<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="max-w-md w-full px-4">
    <div className="flex flex-col justify-center items-center space-y-4">
      <Text />
      <div className="mt-4"> {/* Ajoutez un margin-top pour le bouton */}
        <Boutton />
      </div>
    </div>
  </div>
</div>

     
  
   )
}
