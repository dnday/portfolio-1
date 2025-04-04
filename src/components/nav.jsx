import { FaDev } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navHeight = scrolled ? 64 : 80; // Explicit height values in pixels

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Set initial CSS variable for navbar height
    document.documentElement.style.setProperty(
      "--navbar-height",
      `${navHeight}px`
    );

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, navHeight]);

  // Update CSS variable when height changes
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--navbar-height",
      `${navHeight}px`
    );
  }, [navHeight]);

  // Close mobile menu when route changes
  useEffect(() => {
    setToggle(false);
  }, [location]);

  return (
    <>
      {/* Spacer div to prevent content overlap */}
      <div style={{ height: `${navHeight}px` }} className="w-full" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "h-16 bg-black/70 backdrop-blur-sm shadow-md border-b border-gray-800"
            : "h-20  backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <Link
              to="/"
              className="font-mono text-2xl md:text-3xl tracking-wider flex items-center group"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="mr-2 text-amber-400 group-hover:text-amber-300 transition-colors"
              >
                <FaDev />
              </motion.div>
              <span className="bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
                Marcel
              </span>
            </Link>

            {/* Desktop menu */}
            <div className="hidden lg:flex items-center space-x-1 p-1 bg-black/10 rounded-full backdrop-blur-sm">
              {["skills", "projects", "about", "contact"].map((item) => (
                <NavLink
                  key={item}
                  to={`/${item}`}
                  isActive={location.pathname === `/${item}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.div className="lg:hidden z-20" whileTap={{ scale: 0.9 }}>
              {toggle ? (
                <AiOutlineClose
                  size={28}
                  className="text-yellowg cursor-pointer"
                  onClick={() => setToggle(false)}
                />
              ) : (
                <HiMenuAlt1
                  size={28}
                  className="text-yellowg cursor-pointer"
                  onClick={() => setToggle(true)}
                />
              )}
            </motion.div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden absolute top-full left-0 right-0 glass-dark shadow-lg overflow-hidden border-b border-white/10"
            >
              <div className="container mx-auto px-4 py-4">
                <ul className="flex flex-col space-y-2">
                  {["skills", "projects", "about"].map((item) => (
                    <motion.li
                      key={item}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay:
                          0.1 * ["skills", "projects", "about"].indexOf(item),
                      }}
                    >
                      <Link
                        to={`/${item}`}
                        className={`block py-3 px-4 text-lg rounded-lg transition-colors ${
                          location.pathname === `/${item}`
                            ? "bg-purpled/30 text-yellowg font-medium border-l-4 border-greeno"
                            : "text-gray-300 hover:bg-white/10 hover:text-yellowg"
                        }`}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

// Reusable NavLink component for desktop menu
const NavLink = ({ to, children, isActive }) => {
  return (
    <Link
      to={to}
      className={`relative px-5 py-2 text-lg font-medium rounded-full transition-all duration-300 overflow-hidden group ${
        isActive ? "text-yellowg" : "text-gray-300 hover:text-yellowg"
      }`}
    >
      {/* Background effect */}
      <span
        className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-purpled to-blu opacity-80"
            : "bg-purpled/30 opacity-0 group-hover:opacity-50"
        }`}
      />

      {/* Text */}
      <span className="relative z-10">{children}</span>

      {/* Active indicator */}
      {isActive && (
        <motion.span
          layoutId="activeNavIndicator"
          className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-greeny rounded-full"
        />
      )}
    </Link>
  );
};

export default Nav;
