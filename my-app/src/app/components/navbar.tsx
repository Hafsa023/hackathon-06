import React from "react";
import Image from "next/image";
import Nike from "@/app/assets/nike.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import Logo2 from "@/app/assets/Logo2.png";
import { FaRegHeart, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  return (
    <main>
      <div className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-10 py-2">
        <Image src={Logo2} alt="Logo" className="w-[50px]" />

        <nav>
          <ul className="flex items-center space-x-3 text-black text-lg font-medium">
            <li>
              <Link href="#">Find a Store</Link>
            </li>
            <span className="h-[14px] w-[1px]  bg-black " />
            <li>
              <Link href={"/help"} className="">
                Help
              </Link>
            </li>
            <span className="h-[14px] w-[1px]  bg-black" />
            <li>
              <Link href={"/join"}>Join Us</Link>
            </li>
            <span className="h-[14px] w-[1px]  bg-black" />
            <li>
              <Link href={"/signin"}>Sign In</Link>
            </li>
            <li>
              <Link href={"/cart"}>Cart</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bg-white border-b shadow-sm">
        <div className="flex justify-between items-center px-4 md:px-8 py-2">
          <Link href="/"><Image src={Nike} alt="Logo" className="w-[60px]" /></Link>
          

          <nav className="hidden md:flex space-x-6 items-center font-medium">
          <Link href="/" className="block text-black py-1 hover:underline text-xl">
           Home
          </Link>
            <a href="#" className="text-black hover:underline text-xl">
              New & Featured
            </a>
            <a href="#" className="text-black hover:underline text-xl">
              Men
            </a>
            <a href="#" className="text-black hover:underline text-xl">
              Women
            </a>
            <a href="#" className="text-black hover:underline text-xl">
              Kids
            </a>
            <a href="#" className="text-black hover:underline text-xl">
              SNKRS
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-3 py-1">
              <CiSearch className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm flex-grow pl-2"
              />
            </div>

            <FaRegHeart className="text-black text-lg" />
            <FaShoppingBag />
          </div>

          <button className="md:hidden text-black text-lg">
            Menu <GiHamburgerMenu />
          </button>
        </div>

        <div
          className="md:hidden bg-white w-full px-4 py-3 hidden text-xl"
          id="mobile-menu"
        >
         
          <a href="#" className="block text-black py-1 hover:underline">
            New & Featured
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            Men
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            Women
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            Kids
          </a>
          <a href="#" className="block text-black py-1 hover:underline">
            SNKRS
          </a>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
