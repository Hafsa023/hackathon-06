import Image from "next/image";

import React from "react";
import Img from "@/app/assets/Image.png";

export default function Hero() {
  return (
    <main>
      <div className="text-center bg-gray-100 py-2">
        <h3 className="text-lg">Hello Nike App</h3>
        <span className="text-gray-600">
          Download the app to access everything Nike.
          <span className="text-black underline">Get Your Great</span>
        </span>
      </div>

      <div className="flex justify-center px-10">
        <Image className="w-full h-auto6" src={Img} alt="shoes banner" />
      </div>

      <div className="text-center text-black mt-16">
        <h5 className="font-semibold  text-base lg:text-xl">First Look</h5>
        <br />

        <h3 className=" text-3xl lg:text-5xl font-semibold uppercase ">
          nike air max pulse
        </h3>
        <br />
        <br />

        <span>
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse <br />
          —designed to push you past your limits and help you go to the max.
        </span>
        <br />
        <div className="space-x-5 ">
          <button className="bg-black text-white px-4 py-2 rounded-3xl">
            Notify Me
          </button>

          <button className="bg-black text-white px-4 py-2 rounded-3xl">
            Shop Air Max
          </button>
        </div>
      </div>
    </main>
  );
}
