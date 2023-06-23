import React, { useRef, useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import phil from "./images/Phil.png";
import bg from "./images/Background.png";
import bg1 from "./images/1.png";
import bg2 from "./images/2.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import EmailContact from "./components/EmailContact";
import LoadingPage from "./components/LoadingPage";
gsap.registerPlugin(ScrollTrigger);

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  const handleDoubleClick = (e) => {
    e.preventDefault();
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
    }
  };
  const home = useRef(null);
  const backG1 = useRef(null);
  const backG2 = useRef(null);
  const cont1 = useRef(null);
  const cont2 = useRef(null);
  const cont3 = useRef(null);
  const cont4 = useRef(null);
  useEffect(() => {
    const homeLink = home.current;
    const background1 = backG1.current;
    const background2 = backG2.current;
    const content1 = cont1.current;
    const content2 = cont2.current;
    const content3 = cont3.current;
    const content4 = cont4.current;
    gsap.to(background1, {
      x: 900,
      scrollTrigger: {
        trigger: background1,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(background2, {
      x: -900,
      scrollTrigger: {
        trigger: background2,
        start: "bottom bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.fromTo(homeLink, {opacity: 1, }, {opacity: 1,  duration: 1, scrollTrigger: {
      trigger: homeLink
    }});
    gsap.fromTo(content1, {opacity: 0,  }, {opacity: 1,  duration: 2, scrollTrigger: {
      trigger: content1
    }});
    gsap.fromTo(content2, {opacity: 0,  }, {opacity: 1,  duration: 2, scrollTrigger: {
      trigger: content2
    }});
    gsap.fromTo(content3, {opacity: 0,  }, {opacity: 1,  duration: 2, scrollTrigger: {
      trigger: content3
    }});
    gsap.fromTo(content4, {opacity: 0,  }, {opacity: 1,  duration: 2, scrollTrigger: {
      trigger: content4
    }});


    setTimeout(() => {
      setIsLoaded(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    }, 0);


  }, []);
  return (
    <div
      className="main text-[#111] caret-transparent"
      onContextMenu={handleContextMenu}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
    >
      {
        isLoaded &&

        <div>
          <NavBar />

          <div id="home" className="absolute inset-0 z-[-1] overflow-hidden">
            {/* <img src={bg} alt="Background" className="w-full h-full object-cover" /> */}
            <img
              src={bg1}
              alt="Background1"
              ref={backG1}
              className="w-full h-full object-cover absolute "
            />
            <img
              src={bg2}
              alt="Background2"
              ref={backG2}
              className="w-full h-full object-cover absolute "
            />
          </div>
          {/* motion-safe:animate-translateRight */}
          <div className="header flex justify-center mt-20 h-[80vh] h-[80svh]  ">
            <img
              src={phil}
              alt="Phil"
              className="w-[32rem] mt-auto mb-[-1px] pointer-events-none drop-shadow-2xl z-[-1]"
              draggable="false"
            />
          </div>

          <Content cont1={cont1} cont2={cont2} cont3={cont3} cont4={cont4} />

          <Footer />
        </div>
      }
      
      

      <LoadingPage isLoading={isLoading} />
    </div>
  );
}

export default App;
