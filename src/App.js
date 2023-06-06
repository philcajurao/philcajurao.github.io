import React from "react";
import { BiMenu } from "react-icons/bi";
import phil from "./images/Phil.png";
import bg from "./images/Background.png";
import bg1 from "./images/1.png";
import bg2 from "./images/2.png";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

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
      <NavBar />
      <div className="fixed inset-0 z-[-1]">
        {/* <img src={bg} alt="Background" className="w-full h-full object-cover" /> */}
        <img src={bg1} alt="Background" className="w-full h-full object-cover absolute left-0" />
        <img src={bg2} alt="Background" className="w-full h-full object-cover absolute right-0" />
      </div>
      {/* motion-safe:animate-translateRight */}
      <div className="header flex justify-center sm:h-[87vh] sm:h-[87svh] h-[90vh] h-[90svh] ">
        <img
          src={phil}
          alt="Phil"
          className="w-96 mt-auto mb-[-1px] pointer-events-none"
          draggable="false"
        />
      </div>

     <Content />

     <Footer />
    </div>
  );
}

export default App;
