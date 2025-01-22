import React from 'react';
import Image from "next/image";
import Frame2 from "@/app/assets/Frame2.png";

export default function Essentials() {
  return (
    <main>
      <div className="mt-20 mb-12">
        <h5 className="text-4xl font-semibold lg:px-16">The Essentials</h5>
      </div>
      <div className="flex justify-center px-6">
        <Image 
          className="w-full h-auto" 
          src={Frame2} 
          alt="An essential image" 
          aria-label="An essential image" 
        />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between p-6 md:p-10 lg:p-20 bg-white w-full h-auto">
          <ul className="space-y-3 w-full sm:w-1/2 md:w-1/4">
            <h3 className="font-medium text-lg">Icons</h3>
            <li className="hover:underline text-slate-500">Air Force 1</li>
            <li className="hover:underline text-slate-500">Huarache</li>
            <li className="hover:underline text-slate-500">Air Max 90</li>
            <li className="hover:underline text-slate-500">Air Max 95</li>
          </ul>

          <ul className="space-y-3 w-full sm:w-1/2 md:w-1/4">
            <h3 className="font-medium text-lg">Shoes</h3>
            <li className="hover:underline text-slate-500">All Shoes</li>
            <li className="hover:underline text-slate-500">Custom Shoes</li>
            <li className="hover:underline text-slate-500">Jordan Shoes</li>
            <li className="hover:underline text-slate-500">Running Shoes</li>
          </ul>

          <ul className="space-y-3 w-full sm:w-1/2 md:w-1/4">
            <h3 className="font-medium text-lg">Clothing</h3>
            <li className="hover:underline text-slate-500">All Clothing</li>
            <li className="hover:underline text-slate-500">Modest Wear</li>
            <li className="hover:underline text-slate-500">Hoodies & Pullovers</li>
            <li className="hover:underline text-slate-500">Shirts & Tops</li>
          </ul>

          <ul className="space-y-3 w-full sm:w-1/2 md:w-1/4">
            <h3 className="font-medium text-lg">Kids'</h3>
            <li className="hover:underline text-slate-500">Infant & Toddler Shoes</li>
            <li className="hover:underline text-slate-500">Kids' Shoes</li>
            <li className="hover:underline text-slate-500">Kids' Jordan Shoes</li>
            <li className="hover:underline text-slate-500">Kids' Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
