import React, { useState, useEffect } from "react";
import { Navbar, Button } from "flowbite-react";
import { Link } from "react-scroll";

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

  return (
    <Navbar
      fluid
      rounded
      className={`min-w-[90%] -translate-x-2/4 left-2/4 px-8 py-4 bg-transparent border-b border-b-gray-200 fixed top-0 z-10 transition-all duration-300 ${
        shadow ? "shadow-lg bg-white" : ""
      }`}
    >
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-green-800">
          MrH3 Center
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-green-500">Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navigations &&
          navigations.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              smooth={true}
              duration={item.duration}
              className={`font-bold text-lg cursor-pointer ${
                activeNav === item.to ? "text-green-600" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
