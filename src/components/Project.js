import React from "react";
import ursaconline from "../images/URSACOnline.png";
import porpiks1word from "../images/4pics1word.png";
import churchsite from "../images/ChurchWebsite.png";
import cinemaseats from "../images/CinemaSeats.png";
import dictionary from "../images/Dictionary.png";
import greenwichclone from "../images/GreenwichClone.png";
import gurjarmaps from "../images/GurjarMaps.png";
import reactLogo from '../icons/react.png'
import htmlLogo from '../icons/html.png'
import cssLogo from '../icons/css.png'
import jsLogo from '../icons/js.png'
import tailwindLogo from '../icons/tailwind.png'
import muiLogo from '../icons/mui.png'
import javaLogo from '../icons/java.png'
import phpLogo from '../icons/php.png'
import materializeLogo from '../icons/materialize.png'
import mysqlLogo from '../icons/mysql.png'
import apiLogo from '../icons/api.png'

function Project() {
  return (
    <div className="flex flex-col">
      <h2 className="text-[#fefefe] text-center text-lg">Projects</h2>


      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2">

      <div className="text-[#111] w-full max-w-[400px] mx-auto my-5">
        {/* Card Container */}
        <div className="">
          <img
            src={greenwichclone}
            alt="Greenwich Clone"
          />
        </div>
        {/* Card Content */}
        <div className="text-[#fefefe] flex flex-col p-5 bg-[#222] h-[30rem]">
          <div className="my-2">
            Greenwich POS Clone
          </div>
          <div className="text-sm text-[#777] my-2 h-24 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-[#1a1a1a] scrollbar-track-[rgba(255,255,255,0.1)]">
              A mimicked Point of Sale System specifically designed for Greenwich, featuring both admin and cashier accounts, based on a cloned Greenwich UI.
          </div>
          <div className="my-4">
            Tech Stack
            <ul className='flex flex-wrap mt-1'>
                <li><img src={htmlLogo} alt='HTML Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={cssLogo} alt='CSS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={jsLogo} alt='JS Logo' className='m-1 w-5 h-5' /></li>
                <li className='flex items-center'><img src={materializeLogo} alt='Materialize Logo' className='m-1 w-5 h-auto' /></li>
                <li><img src={phpLogo} alt='PHP Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={mysqlLogo} alt='MySQL Logo' className='m-1 w-8 h-5' /></li>
            </ul>
          </div>
          <div className="mt-10 mb-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-evenly sm:mt-auto">
            <a href="https://github.com/philcajurao/greenwich-pos-clone.git" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Code</button></a>
            <a href="#"><button className="emailBtn">Demo</button></a>
          </div>
        </div>
      </div>

      <div className="text-[#111] w-full max-w-[400px] mx-auto my-5">
        {/* Card Container */}
        <div className="">
          <img
            src={cinemaseats}
            alt="Cinema Seats"
          />
        </div>
        {/* Card Content */}
        <div className="text-[#fefefe] flex flex-col p-5 bg-[#222] h-[30rem]">
          <div className="my-2">
            Cinema Seats
          </div>
          <div className="text-sm text-[#777] my-2 h-24 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-[#1a1a1a] scrollbar-track-[rgba(255,255,255,0.1)]">
            This website serves as a cinema reservation system, enabling users to choose a movie and purchase tickets.
          </div>
          <div className="my-4">
            Tech Stack
            <ul className='flex flex-wrap mt-1'>
                <li><img src={htmlLogo} alt='HTML Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={cssLogo} alt='CSS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={jsLogo} alt='JS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={phpLogo} alt='PHP Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={mysqlLogo} alt='MySQL Logo' className='m-1 w-8 h-5' /></li>
            </ul>
          </div>
          <div className="mt-10 mb-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-evenly sm:mt-auto">
            <a href="https://github.com/philcajurao/cinema-seats.git" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Code</button></a>
            <a href="#"><button className="emailBtn">Demo</button></a>
          </div>
        </div>
      </div>

      <div className="text-[#111] w-full max-w-[400px] mx-auto my-5">
        {/* Card Container */}
        <div className="">
          <img
            src={dictionary}
            alt="Dictionary"
          />
        </div>
        {/* Card Content */}
        <div className="text-[#fefefe] flex flex-col p-5 bg-[#222] h-[30rem]">
          <div className="my-2">
            Dictionary
          </div>
          <div className="text-sm text-[#777] my-2 h-24 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-[#1a1a1a] scrollbar-track-[rgba(255,255,255,0.1)]">
            Website that is using Free Dictionary API I got from&nbsp;
            <a href="https://publicapis.dev" target='_blank' rel="noopener noreferrer" className="cursor-pointer underline">https://publicapis.dev</a> 
            &nbsp;that makes the dictionary functionable providing informations and even phonetics.
          </div>
          <div className="my-4">
            Tech Stack
            <ul className='flex flex-wrap mt-1'>
                <li><img src={htmlLogo} alt='HTML Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={cssLogo} alt='CSS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={jsLogo} alt='JS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={apiLogo} alt='API Logo' className='m-1 w-5 h-5' /></li>
            </ul>
          </div>
          <div className="mt-10 mb-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-evenly sm:mt-auto">
            <a href="https://github.com/philcajurao/dictionary.git" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Code</button></a>
            <a href="https://tourmaline-gumption-e52c40.netlify.app/" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Demo</button></a>
          </div>
        </div>
      </div>

      <div className="text-[#111] w-full max-w-[400px] mx-auto my-5">
        {/* Card Container */}
        <div className="">
          <img
            src={porpiks1word}
            alt="4pics1word"
          />
        </div>
        {/* Card Content */}
        <div className="text-[#fefefe] flex flex-col p-5 bg-[#222] h-[30rem]">
          <div className="my-2">
            4pics1word
          </div>
          <div className="text-sm text-[#777] my-2 h-24 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-[#1a1a1a] scrollbar-track-[rgba(255,255,255,0.1)]">
            An exciting 4 Picture 1 Word game that puts players into guessing of a word by a 4 picture given the set of letters they have and congratulate them in the end.
          </div>
          <div className="my-4">
            Tech Stack
            <ul className='flex flex-wrap mt-1'>
                <li><img src={htmlLogo} alt='HTML Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={cssLogo} alt='CSS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={jsLogo} alt='JS Logo' className='m-1 w-5 h-5' /></li>
            </ul>
          </div>
          <div className="mt-10 mb-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-evenly sm:mt-auto">
            <a href="https://github.com/philcajurao/4pics1word.git" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Code</button></a>
            <a href="https://zingy-basbousa-10d97d.netlify.app/" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Demo</button></a>
          </div>
        </div>
      </div>

      <div className="text-[#111] w-full max-w-[400px] mx-auto my-5">
        {/* Card Container */}
        <div className="">
          <img
            src={churchsite}
            alt="Church Site"
          />
        </div>
        {/* Card Content */}
        <div className="text-[#fefefe] flex flex-col p-5 bg-[#222] h-[30rem]">
          <div className="my-2">
            Church Landing Page
          </div>
          <div className="text-sm text-[#777] my-2 h-24 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-[#1a1a1a] scrollbar-track-[rgba(255,255,255,0.1)]">
            Landing website for a modern church featuring their gatherings, ministries and other informations.
          </div>
          <div className="my-4">
            Tech Stack
            <ul className='flex flex-wrap mt-1'>
                <li><img src={htmlLogo} alt='HTML Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={cssLogo} alt='CSS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={jsLogo} alt='JS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={reactLogo} alt='React Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={muiLogo} alt='MUI Logo' className='m-1 w-5 h-5' /></li>
            </ul>
          </div>
          <div className="mt-10 mb-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-evenly sm:mt-auto">
            <a href="https://github.com/philcajurao/church-landing-page.git" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Code</button></a>
            <a href="https://verdant-licorice-983fe5.netlify.app" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Demo</button></a>
          </div>
        </div>
      </div>

      <div className="text-[#111] w-full max-w-[400px] mx-auto my-5">
        {/* Card Container */}
        <div className="">
          <img
            src={gurjarmaps}
            alt="Gurjar Maps"
          />
        </div>
        {/* Card Content */}
        <div className="text-[#fefefe] flex flex-col p-5 bg-[#222] h-[30rem]">
          <div className="my-2">
            Gurjar Maps
          </div>
          <div className="text-sm text-[#777] my-2 h-24 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-[#1a1a1a] scrollbar-track-[rgba(255,255,255,0.1)]">
            A system where you can find gurjar people and their basic info around the world built using React-Leaflet, OpenStreetMap and Maptiler for the map's layer.
          </div>
          <div className="my-4">
            Tech Stack
            <ul className='flex flex-wrap mt-1'>
                <li><img src={htmlLogo} alt='HTML Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={cssLogo} alt='CSS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={jsLogo} alt='JS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={reactLogo} alt='React Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={tailwindLogo} alt='Tailwind Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={apiLogo} alt='API Logo' className='m-1 w-5 h-5' /></li>
            </ul>
          </div>
          <div className="mt-10 mb-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-evenly sm:mt-auto">
            <a href="https://github.com/RinaCLDS/Big-project.git" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Code</button></a>
            <a href="https://rainbow-kataifi-337b7f.netlify.app" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Demo</button></a>
          </div>
        </div>
      </div>

      <div className="text-[#111] w-full max-w-[400px] mx-auto my-5">
        {/* Card Container */}
        <div className="">
          <img
            src={ursaconline}
            alt="URSAC Online Logo"
          />
        </div>
        {/* Card Content */}
        <div className="text-[#fefefe] flex flex-col p-5 bg-[#222] h-[30rem]">
          <div className="my-2">
            URSAC Online
          </div>
          <div className="text-sm text-[#777] my-2 h-24 overflow-y-auto scrollbar scrollbar-thin scrollbar-thumb-[#1a1a1a] scrollbar-track-[rgba(255,255,255,0.1)]">
            A Learning Management System for University of Rizal System Antipolo Campus, capable of creating and joining course subjects created by users and post announcements or activities with an option of having pdf file
            on attachment. Users can edit their details such us profile photo, password, and basic info. Registration of users can only be done by the website's administration page.
          </div>
          <div className="my-4">
            Tech Stack
            <ul className='flex flex-wrap mt-1'>
                <li><img src={htmlLogo} alt='HTML Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={cssLogo} alt='CSS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={jsLogo} alt='JS Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={reactLogo} alt='React Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={muiLogo} alt='MUI Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={phpLogo} alt='PHP Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={mysqlLogo} alt='Java Logo' className='m-1 w-8 h-5' /></li>
            </ul>
          </div>
          <div className="mt-10 mb-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-evenly sm:mt-auto">
            <a href="#"><button className="emailBtn">Code</button></a>
            <a href="https://www.ursaconline.com" target='_blank' rel="noopener noreferrer"><button className="emailBtn">Demo</button></a>
          </div>
        </div>
      </div>
      
      </div>
      <div className="text-[#777] my-5 text-center">
        More projects are coming soon... &#129488;
      </div>
    </div>
  );
}

export default Project;
