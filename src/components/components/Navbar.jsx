import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logocolor.png' 

const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" }
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-black/70 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between w-full px-4 py-4 mx-auto max-w-7xl md:px-8">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img 
            src={logo} 
            alt="logo" 
            className="w-10 h-10 transition-transform duration-300 hover:rotate-12"
          />
          <div className="flex flex-col">
            <motion.p 
              className="text-xl font-bold tracking-wide text-white"
              whileHover={{ scale: 1.05 }}
            >
              Sunera's
              <span className="hidden ml-2 text-[#859aec] md:inline-block">Portfolio</span>
            </motion.p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="items-center hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${link.id}`}
                className={`relative text-lg font-medium transition-colors duration-300 ${
                  active === link.title 
                    ? "text-[#859aec]" 
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
                {active === link.title && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#859aec]"
                    initial={false}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="p-2 text-white rounded-lg hover:bg-white/10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {toggleMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: toggleMenu ? 1 : 0,
            scale: toggleMenu ? 1 : 0.95,
            display: toggleMenu ? 'block' : 'none',
          }}
          transition={{ duration: 0.2 }}
          className="absolute right-0 w-full mt-4 md:hidden top-16"
        >
          <div className="p-4 mx-4 space-y-3 bg-black/90 backdrop-blur-lg rounded-xl">
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={`#${link.id}`}
                whileTap={{ scale: 0.95 }}
                className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                  active === link.title
                    ? "text-[#859aec] bg-white/10"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
                onClick={() => {
                  setToggleMenu(false);
                  setActive(link.title);
                }}
              >
                {link.title}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;