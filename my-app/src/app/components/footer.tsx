import Link from "next/link";

import { IoLocationOutline } from "react-icons/io5";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 my-24">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Find a Store</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:underline">Become a Member</li>
              <li className="hover:underline">Sign Up for Email</li>
              <li className="hover:underline">Send Us Feedback</li>
              <li className="hover:underline">Student Discounts</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Get Help</h3>
            <ul className="space-y-2 text-sm text-gray-400 ">
              <li className="hover:underline">Order Status</li>
              <li className="hover:underline">Delivery</li>
              <li className="hover:underline">Returns</li>
              <li className="hover:underline">Payment Options</li>
              <li className="hover:underline"> Contact Us on Nike.com </li>
              <li className="hover:underline">
                Contact Us on All Other Inquiries{" "}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase mb-4">About Nike</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:underline">News</li>
              <li className="hover:underline">Careers</li>
              <li className="hover:underline">Investors</li>
              <li className="hover:underline">Sustainability</li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 text-gray-400">
            <FaTwitter
              className="text-lg cursor-pointer hover:text-gray-400"
              aria-label="Twitter"
            />
            <FaFacebook
              className="text-lg cursor-pointer hover:text-gray-400"
              aria-label="Facebook"
            />
            <FaYoutube
              className="text-lg cursor-pointer hover:text-gray-400"
              aria-label="YouTube"
            />
            <FaInstagram
              className="text-lg cursor-pointer hover:text-gray-400"
              aria-label="Instagram"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
          <div className="flex mb-4 md:mb-0 gap-2 items-center">
            <IoLocationOutline className="text-lg" />
            <p>India</p>
            <p>© 2023 Nike, Inc. All Rights Reserved</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:underline">
              Guides
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Sale
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="#" className="hover:underline">
              Nike Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
