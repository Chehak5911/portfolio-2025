import { useState } from "react";
import 'remixicon/fonts/remixicon.css'; 

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            About
          </li>
        </a>
        <a href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Experience
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Projects
          </li>
        </a>
        <a href="#Footer">
          <li className="text-md transition-all duration-300 p-1 md:p-0">
            Contact
          </li>
        </a>
      </ul>

      {showMenu ? (
        <i
          className="ri-menu-2-line text-2xl md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(false);
          }}
        ></i>
      ) : (
        <i
          className="ri-close-line text-2xl md:hidden absolute right-10 top-6 transition-all duration-300 cursor-pointer"
          onClick={() => {
            openMenu(false);
            setShowmenu(true);
          }}
        ></i>
      )}
    </nav>
  );
};

export default Navbar;
