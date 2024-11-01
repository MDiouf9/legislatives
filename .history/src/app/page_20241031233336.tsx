"use client"

import { div } from "framer-motion/client"
import { Boutton } from "./Composants/Boutton"
import Text from "./Composants/Text";


export default function Page() {
  return (
    

<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="max-w-md w-full px-4 py-8">
    <div className="flex flex-col justify-center items-center space-y-4">
      <Text />
      <Boutton />
    </div>
  </div>
</div>

   )
}
