import React from "react";
import ResumeButton from "./ResumeButton";

function About() {
  return (
    <div>
      <h2 className="text-[#fefefe] text-lg text-center">About Me</h2>
      <div className="flex flex-col space-y-5 mt-2 text-justify text-[#777]">
        <p className="">
          Hi! My name's <b>Phil</b>, based in the Philippines and currently working remotely as a 
          Web Developer outside my country. I've met programming in an
          interesting and unusual way that brought me wanting to know it more.
        </p>
        <p className="">
        I specialize in front-end and back-end development, and I’m proficient in various programming
         languages and frameworks. I’m always eager to learn more and stay updated with the latest 
         industry trends and advancements.
        </p>
      </div>
      <div className="w-full flex justify-center mt-5">
        <ResumeButton />
      </div>
    </div>
  );
}

export default About;
