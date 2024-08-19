import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi"; // Import hamburger and close icons

const Header = () => {
  const navigations = [
    { id: 1, name: "Home", to: "home", duration: 2000 },
    { id: 2, name: "About Us", to: "about-us", duration: 2000 },
    { id: 3, name: "Courses", to: "courses", duration: 2000 },
    { id: 4, name: "Projects", to: "projects", duration: 2000 },
    { id: 5, name: "Contact", to: "contact", duration: 2000 },
  ];

  const [shadow, setShadow] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShadow(true);
    } else {
      setShadow(false);
    }

    const scrollPosition = window.scrollY + 80;
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        setActiveNav(section.getAttribute("id"));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={`min-w-[90%] -translate-x-2/4 left-2/4 px-8 py-4 bg-transparent border-b border-b-gray-200 fixed top-0 z-50 transition-all duration-300 ${
        shadow ? "shadow-lg bg-white" : ""
      }`}
    >
      <div className="w-full h-full flex items-center justify-between">
        <motion.a
          animate="visible"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 5 * 0.1 }}
          href="#"
          className="font-bold text-3xl text-green-900"
        >
          MrH3 Center
        </motion.a>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-green-900"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
        {/* Navigation Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-between bg-white lg:static lg:w-auto lg:h-auto lg:flex lg:items-center lg:justify-between lg:bg-transparent transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="relative lg:hidden w-full h-full">
            {/* Close Button for Mobile View */}
            {isMenuOpen && (
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-2xl text-green-900"
              >
                <HiX />
              </button>
            )}
            <ul className="flex flex-col items-center justify-center h-full p-4 space-y-4">
              {navigations.map((item) => (
                <motion.li
                  key={item.id}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ duration: 0.5, delay: item.id * 0.1 }}
                  className="text-center"
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={item.duration}
                    onClick={() => setIsMenuOpen(false)} // Close menu on item click
                    className={`font-bold text-lg cursor-pointer ${
                      activeNav === item.to ? "text-green-600" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <button className="rounded-lg bg-green-500 text-white py-2 px-4 font-semibold hover:bg-green-600 transition-colors duration-300 mt-4">
              Get Started
            </button>
          </div>
          {/* For larger screens */}
          <ul className="hidden lg:flex lg:items-center lg:space-x-4">
            {navigations.map((item) => (
              <motion.li
                key={item.id}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                className="px-4"
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={item.duration}
                  className={`font-bold text-lg cursor-pointer ${
                    activeNav === item.to ? "text-green-600" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
