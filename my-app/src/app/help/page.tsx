"use client"
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Link from 'next/link';
import { IoMdThumbsUp, IoMdThumbsDown } from 'react-icons/io';
import Image from 'next/image';
import Contact from '@/app/assets/contact.png';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleFeedback = (feedback: any) => {
    console.log(`User feedback: ${feedback}`);
    // You can send the feedback to a backend or API here
  };

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 flex justify-between ">
      <span className="uppercase text-center font-semibold text-2xl mt-6 text-gray-700 flex justify-center">
        Get Help
      </span>

      {/* Search Section */}
      <div className="flex justify-center space-x-7 mt-6">
        <div className="relative">
          <input
            className="w-full md:w-96 text-sm px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="What can we help you with?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <CiSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600" />
        </div>
      </div>

      <section className="w-full md:w-[493px] mx-auto mt-6 bg-white p-6 shadow-md rounded-lg">
        <h1 className="font-semibold text-xl text-center text-gray-800 mb-4">
          WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
        </h1>
        <p className="text-gray-700">
          We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
        </p>

        <div className="text-gray-700 px-4 mt-4">
          <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
          <br />
          <p>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</p>
          <br />
          <p>Apple Pay</p>
        </div>

        {/* Nike Members Section */}
        <div className="mt-6 text-gray-700">
          <p className="font-semibold underline inline">Nike Members</p> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member, 
          <Link href="/join">
            <span className="font-semibold underline"> join us</span>
          </Link> today.
        </div>

        {/* Button Section */}
        <div className="my-6 space-x-4 flex justify-center">
          <Link href="/join">
            <button className="bg-black text-white px-6 py-2 rounded-3xl hover:bg-gray-800 transition duration-200">JOIN US</button>
          </Link>
          <Link href="/shop">
            <button className="bg-black text-white px-6 py-2 rounded-3xl hover:bg-gray-800 transition duration-200">SHOP NIKE</button>
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-6">
          <p className="font-semibold text-xl text-gray-800">FAQs</p>

          <div className="mt-4">
            <p className="font-semibold text-gray-700">Does my card need international purchases enabled?</p>
            <p className="text-gray-600">
              Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.
            </p>
            <p className="text-gray-600">Please note, some banks may charge a small transaction fee for international orders.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-gray-700">Can I pay for my order with multiple methods?</p>
            <p className="text-gray-600">No, payment for Nike orders can't be split between multiple payment methods.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-gray-700">What payment method is accepted for SNKRS orders?</p>
            <p className="text-gray-600">You can use any accepted credit card to pay for your SNKRS order.</p>
          </div>

          <div className="mt-4">
            <p className="font-semibold text-gray-700">Why don't I see Apple Pay as an option?</p>
            <p className="text-gray-600">
              To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account, and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
            </p>
          </div>

          <p className="mt-6 text-gray-700">Was this answer helpful?</p>
          <div className="flex gap-4 mt-2">
            <IoMdThumbsUp
              onClick={() => handleFeedback('Helpful')}
              className="text-2xl text-blue-600 hover:text-blue-800 cursor-pointer"
            />
            <IoMdThumbsDown
              onClick={() => handleFeedback('Not Helpful')}
              className="text-2xl text-red-600 hover:text-red-800 cursor-pointer"
            />
          </div>

          <p className="mt-4 text-gray-500">RELATED</p>
          <div className="mt-2">
            <p className="underline font-semibold text-gray-700">WHAT ARE NIKE'S DELIVERY OPTIONS?</p>
            <p className="underline font-semibold text-gray-700">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="hidden lg:block mt-8">
        <Image
          className="w-auto"
          src={Contact}
          alt="Contact banner"
          width={500}
          height={250}
        />
      </section>
    </main>
  );
};

export default Help;
