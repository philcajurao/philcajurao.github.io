import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import logo from "../images/favicon.png";
// import 'react-scroll/dist/react-scroll.css';
import { Link } from "react-scroll";

function NavBar() {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleShowSideBar = () => {
    setShowSideBar(true);
  };
  const handleCloseShowSideBar = () => {
    setShowSideBar(false);
  };
  return (
    <div className="navbar top-0 w-full z-20 flex items-center px-7 justify-between">
      <button className="font-extrabold h-full p-5">Phil.</button>
      <BiMenu
        size={30}
        className="cursor-pointer sm:hidden self-center h-full"
        onClick={handleShowSideBar}
      />
      <ul className="sm:flex hidden">
      
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={2500}
            className="p-5 cursor-pointer transition duration-300 hover:bg-[#111] hover:text-[#fefefe]"
          >
            About me
          </Link>
        
      
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={2500}
            className="p-5 cursor-pointer transition duration-300 hover:bg-[#111] hover:text-[#fefefe]"
          >
            Projects
          </Link>
        
      
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={2500}
            className="p-5 cursor-pointer transition duration-300 hover:bg-[#111] hover:text-[#fefefe]"
          >
            Contacts
          </Link>
        
      </ul>
      <div
        className={`fixed flex flex-col justify-between top-0 left-0 bg-[#222] h-full w-full z-20 duration-300 ${
          showSideBar ? "translate-y-[-100]" : "translate-y-full"
        }`}
      >
        <button onClick={handleCloseShowSideBar}>
          <MdClose size={30} className="text-[#fefefe] m-5 float-right" />
        </button>
        <div className="flex flex-col space-y-2 items-center">
          <img src={logo} alt="Phil logo" className="w-20" />
          <h2 className="text-[#fefefe]">Phil Cajurao</h2>
        </div>
        <div role="menu" className="py-3 flex flex-col items-center">
          <Link
            spy={true}
            smooth={true}
            duration={2500}
            to="about"
            onClick={handleCloseShowSideBar}
            className="text-center w-full py-5 text-gray-50 hover:bg-[#ddd] duration-300 hover:text-[#222]"
            role="menuitem"
            // onClick={signout}
          >
            About me
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={2500}
            to="projects"
            onClick={handleCloseShowSideBar}
            className="text-center w-full py-5 text-gray-50 hover:bg-[#ddd] duration-300 hover:text-[#222]"
            role="menuitem"
            // onClick={signout}
          >
            Projects
          </Link>
          <Link
            spy={true}
            smooth={true}
            duration={2500}
            to="contacts"
            onClick={handleCloseShowSideBar}
            className="text-center w-full py-5 text-gray-50 hover:bg-[#ddd] duration-300 hover:text-[#222]"
            role="menuitem"
            // onClick={signout}
          >
            Contacts
          </Link>
        </div>
        <div className="footer bg-[#222] text-[#fefefe] flex justify-center py-10">
          <p>© Phil Cajurao 2023</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
