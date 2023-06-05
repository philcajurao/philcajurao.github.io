import React from "react";
import { BiMenu } from "react-icons/bi";
import phil from "./images/Phil.png";
import bg from "./images/Background.png";

function App() {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleDoubleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="main text-[#111] caret-transparent"
      onContextMenu={handleContextMenu}
      onDoubleClick={handleDoubleClick}
    >
      <div className="navbar top-0 w-full z-20">
        <div className="fixed flex px-7 justify-between w-full">
          <button className="p-3 font-extrabold">Phil.</button>
          <div className="flex">
            <BiMenu
              size={30}
              className="cursor-pointer sm:hidden self-center"
            />
            <ul className="sm:flex hidden ">
              <li>
                <button className="p-3 cursor-pointer transition duration-300 hover:bg-[#111] hover:text-[#fefefe]">
                  About me
                </button>
              </li>
              <li>
                <button className="p-3 cursor-pointer transition duration-300 hover:bg-[#111] hover:text-[#fefefe]">
                  Projects
                </button>
              </li>
              <li>
                <button className="p-3 cursor-pointer transition duration-300 hover:bg-[#111] hover:text-[#fefefe]">
                  Contacts
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-[-1]">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className="header flex justify-center sm:h-[87vh] sm:h-[87svh] h-[90vh] h-[90svh] ">
        <img
          src={phil}
          alt="Phil"
          className="w-96 mt-auto mb-[-1px] pointer-events-none"
          draggable="false"
        />
      </div>

      <div className="content bg-[#111] p-3 bottom-0 z-20">
        <div className="text-[#fefefe] flex flex-col items-center mx-[20vw]">
          <div className="flex flex-col items-center mt-2">
            <h1 className="font-bold sm:text-5xl text-2xl">PHIL CAJURAO</h1>
            <p className="sm:text-xl text-base sm:mt-2">&lt;p&gt;Aspiring Developer&lt;/p&gt;</p>
          </div>
          <div className="mt-10">
            <h2 className="text-[#555] text-lg">About Me</h2>
            <div className="flex flex-col space-y-5 mt-2 text-justify">
              <p className="">
                Hi! My name's <b>Phil</b>, currently a graduating college student aspiring
                to be a great developer. I've met programming in an interesting
                and unusual way that brought me wanting to know it more.
              </p>
              <p className="">
                Along with my school projects, I did some freelancing alone or
                together with my friends to earn more exciting experience. This
                faced me with common problems and bugs that helped me learned a
                lot.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer bg-[#222] text-[#fefefe] flex justify-center p-3">
        <p>© Phil Cajurao 2023</p>
      </div>
    </div>
  );
}

export default App;
