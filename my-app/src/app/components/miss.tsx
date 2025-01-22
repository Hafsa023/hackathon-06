import React from 'react'
import Image from "next/image";
import Double from "@/app/assets/double.png";
export default function Miss() {
  return (
    <main>
        <div className="mt-20 mb-12">
          <h5 className="text-4xl font-semibold  lg:px-16">Don't Miss</h5>
        </div>
        <div className="flex justify-center px-6">
          <Image className="w-full h-auto" src={Double} alt="" />
        </div>

        <div className="text-center text-black mt-16">
          <h3 className=" text-6xl lg:text-5xl sm:text-lg md:text-2xl  xl:6xl font-semibold uppercase ">
            Flight Essentials
          </h3>
          <br />
          <br />

          <p>
            Your built-to-last, all-week wears--but with style only Jordan Brand
            can deliver
          </p>
          <br />

          <button className="bg-black text-white px-4 py-2 rounded-3xl ">
            shop...!!
          </button>
        </div>
       </main>
  )
}
