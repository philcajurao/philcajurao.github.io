import React from "react";
import Contact from "./Contact";
import Project from "./Project";
import About from "./About";
import Skills from "./Skills";

function Content({ cont1, cont2, cont3, cont4 }) {
  return (
    <div className="content bg-[#111] py-5 bottom-0 z-20">
      <div className="text-[#fefefe] flex flex-col max-w-[85vw] mx-auto space-y-32">
        <div className="flex flex-col items-center mt-2">
          <h1 className="font-bold text-xl">PHIL CAJURAO</h1>
          <p className="">&lt;p&gt;Aspiring Developer&lt;/p&gt;</p>
        </div>
        <div ref={cont1}>
          <div id="about"></div>
          <div className="flex flex-col space-y-32 mx-auto sm:w-[50vw] ">
            <About />
            <Skills />
          </div>
        </div>
        <div ref={cont3}>
          <div id="projects"></div>
          <div>
            <Project />
          </div>
        </div>
        <div ref={cont4}>
          <div id="contacts"></div>
          <div>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
