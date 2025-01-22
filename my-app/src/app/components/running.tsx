import React from 'react'
import Image from "next/image";
import Men from "@/app/assets/men.png"

export default function Running() {
  return (
    <div>
        <div className="mt-20 mb-12">
          <h5 className="text-4xl font-semibold  lg:px-16">Featured</h5>
        </div>
        <div className="flex justify-center px-6">
          <Image className="w-full h-auto" src={Men} alt="" />
        </div>

        <div className="text-center text-black mt-16">
          <h3 className=" text-3xl lg:text-5xl font-semibold uppercase ">
            step into what feels good
          </h3>
          <br />
          <br />

          <p>
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <br />

          <button className="bg-black text-white px-4 py-2 rounded-3xl ">
            Find Your Shoe
          </button>
        </div>
      </div>
  )
}
