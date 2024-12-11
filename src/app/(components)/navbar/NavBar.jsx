'use client';
import React, { useState } from 'react';
import logo from "@/../public/images/logo.png";
import Image from 'next/image';
import Link from 'next/link';

const data = [
  { title: "Home", link: '/', class: "active" },
  { title: "Services", link: '/services' },
  { title: "Contact Us", link: '/contact-us' },
  { title: "Products", link: '/products' },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} alt="Logo" className="w-[50px]" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            R J Enterprise
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`fixed top-0 right-0 h-full bg-gray-50 dark:bg-gray-800 z-50 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 w-64 md:hidden`}
        >
          <button
            onClick={toggleMenu}
            className="p-4 text-gray-500 dark:text-gray-400"
          >
            Close
          </button>
          <ul className="flex flex-col font-medium p-4 space-y-4">
            {data.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="block py-2 px-3 text-gray-800 bg-blue-100 rounded dark:text-white dark:bg-blue-700"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
