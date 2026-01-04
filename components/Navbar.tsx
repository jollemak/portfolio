"use client";
import  { useState, useEffect } from "react";
import { motion } from "motion/react";

const navItems = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
        backgroundColor: visible ? "#202020ff" : "rgba(32, 32, 32, 0)",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-1 px-4"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6  px-3 sm:px-4 md:px-6 py-1 backdrop-blur-sm">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="relative px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm text-white font-medium transition-colors duration-200 rounded-full"
            style={{
              backgroundColor: hovered === idx ? "#eb0d1cff" : "transparent",
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
