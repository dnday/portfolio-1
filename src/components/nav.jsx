import { FaDev } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link untuk routing

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const openMenu = () => {
    setToggle(true);
  };
  const closeMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 lg:flex-row">
        <div>
          <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center">
            <FaDev className="mr-2" />
            Marcel
          </a>
        </div>

        {/* Desktop menu */}
        <div className="flex gap-x-4">
          <div className="sm:hidden lg:block space-x-2">
            <Link to="/skills" className="text-white hover:bg-indigo-900 rounded-full px-5 py-2 text-xl">Skills</Link>
            <Link to="/projects" className="text-white hover:bg-indigo-900 rounded-full px-5 py-2 text-xl">Projects</Link>
            <Link to="/footer" className="text-white hover:bg-indigo-900 rounded-full px-5 py-2 text-xl">About</Link>
          </div>

          {/* Mobile menu */}
          <div className="sm:block lg:hidden">
            {toggle ? (
              <AiOutlineClose size={32} className="text-white text-3xl cursor-pointer" onClick={closeMenu} />
            ) : (
              <HiMenuAlt1 size={32} className="text-white text-3xl cursor-pointer" onClick={openMenu} />
            )}
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {toggle && (
        <div className="sm:block lg:hidden mt-4 px-4">
          <ul>
            <li>
              <Link to="/skills" className="text-white text-xl mb-2 cursor-pointer">Skills</Link>
            </li>
            <li>
              <Link to="/projects" className="text-white text-xl mb-2 cursor-pointer">Projects</Link>
            </li>
            <li>
              <Link to="/footer" className="text-white text-xl mb-2 cursor-pointer">About</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
