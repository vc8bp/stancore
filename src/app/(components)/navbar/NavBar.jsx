'use client';
import logo from "@/../public/images/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.scss'; // Import the corresponding SCSS file

const data = [
  { title: "Services", link: '/services' },
  { title: "Contact Us", link: '/contact-us' },
  { title: "Products", link: '/products' },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={`${styles.navbar} bg-white dark:bg-gray-900`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} alt="Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold tracking-wide dark:text-white">
            R J Enterprise
          </span>
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 text-gray-500 rounded-md md:hidden hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 focus:outline-none"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Sliding Menu */}
        <div
          className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 md:hidden`}
        >
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <span className="text-lg font-semibold dark:text-white">Menu</span>
            <button onClick={toggleMenu} className="text-gray-500 dark:text-gray-400">
              Close
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-4">
            {data.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className={`block py-2 px-4 rounded-lg text-gray-700 hover:bg-blue-500 hover:text-white dark:text-gray-300 dark:hover:bg-blue-600 ${
                    pathname === item.link ? 'bg-blue-500 text-white dark:bg-blue-600' : ''
                  }`}
                  onClick={toggleMenu} // Close menu on selection
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {data.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={`text-gray-700 hover:text-blue-500 font-medium dark:text-gray-300 dark:hover:text-blue-400 transition-colors ${
                  pathname === item.link ? 'text-blue-500 dark:text-blue-400 font-semibold' : ''
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
