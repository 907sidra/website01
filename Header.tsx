import React from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

export default function Home() {
    return (
      < main className="bg-lime-50">
        <section>
        {/* hero section */}
        <div className="flex flex-col md:flex-row justify-between items-center p-6">
          <main className=" font-extrabold text text-3xl md:text-3xl lg:text-4xl ">.Plants</main>
        <ul className="flex flex-wrap font-semibold gap-5 mt-5 md:mt-0">
          <li className="hover:bg-lime-400 p-2 rounded"><a href="#">Home</a></li>
          <li className="hover:bg-lime-400 p-2 rounded"><Link href="#planters">Planters</Link></li>
          <li className="hover:bg-lime-400 p-2 rounded"><Link href="#seeds">seeds</Link></li>
          <li className="hover:bg-lime-400 p-2 rounded"><Link href="#About">About us</Link></li>
        </ul>
        {/* Search Bar with Icon */}
        <div className="flex items-center border border-gray-300 rounded ml-4 md:ml-6">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 outline-none rounded-l"
              />
              <FaSearch className="text-xl p-2 cursor-pointer hover:text-lime-400 style={{ fontSize: '1.5rem' }}" />
            </div>
        <FaShoppingCart className="text-xl hover:text-lime-400 cursor-pointer ml-4" />
        
        </div>
        </section>
        </main>
    )
}
 