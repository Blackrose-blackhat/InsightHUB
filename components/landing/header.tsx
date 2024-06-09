import React from 'react'
import { Button } from '../ui/button'
import Model from '../Model'

const Header = () => {
  return (
    <main className=" p-20  flex flex-row items-center align-middle justify-between w-full h-screen">
      
      <div className="w-1/2 flex flex-col space-y-5">
        <h1 className="text-6xl font-semibold">
          Want to defeat AI in the knowledge Race?
        </h1>
        <h2 className="text-4xl text-green-400 font-semibold">Website Name</h2>
        <Button size="lg" className="w-1/4  font-semibold">Get Started</Button>
      </div>

      {/* Render 3d model */}

      <div className="w-1/2  h-full  ">
        <Model />
      </div>
      

    </main>
  )
}

export default Header