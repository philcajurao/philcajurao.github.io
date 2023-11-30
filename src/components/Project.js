import React from "react";
import porpiks1word from "../images/4pics1word.png";
import churchsite from "../images/ChurchWebsite.png";
import employeedatabase from "../images/EmployeeDatabase.png";
import reactLogo from '../icons/react.png'
import htmlLogo from '../icons/html.png'
import cssLogo from '../icons/css.png'
import jsLogo from '../icons/js.png'
import muiLogo from '../icons/mui.png'
import javaLogo from '../icons/java.png'
import mysqlLogo from '../icons/mysql.png'

function Project() {
  return (
    <div className="flex flex-col">
      <h2 className="text-[#fefefe] text-center text-lg">Projects</h2>


      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-2">


      {/* PORPIKS WAN WORD */}
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
          <div className="text-sm text-[#777] my-2 h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-[#1a1a1a] scrollbar-track-[rgba(255,255,255,0.1)]">
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
            <a href="https://github.com/philcajurao/4pics1word.git" target='_blank' rel="noopener noreferrer" className="sm:w-auto w-full"><button className="emailBtn w-full">Code</button></a>
            <a href="https://zingy-basbousa-10d97d.netlify.app/" target='_blank' rel="noopener noreferrer" className="sm:w-auto w-full"><button className="emailBtn w-full">Demo</button></a>
          </div>
        </div>
      </div>


      {/* CHURCH SITE */}
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
          <div className="text-sm text-[#777] my-2 h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-[#1a1a1a] scrollbar-track-[rgba(255,255,255,0.1)]">
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
            <a href="https://github.com/philcajurao/church-landing-page.git" target='_blank' rel="noopener noreferrer" className="sm:w-auto w-full"><button className="emailBtn w-full">Code</button></a>
            <a href="https://verdant-licorice-983fe5.netlify.app" target='_blank' rel="noopener noreferrer" className="sm:w-auto w-full"><button className="emailBtn w-full">Demo</button></a>
          </div>
        </div>
      </div>


      {/* EMPLOYEE DATABASE */}
      <div className="text-[#111] w-full max-w-[400px] mx-auto my-5">
        {/* Card Container */}
        <div className="">
          <img
          className=""
            src={employeedatabase}
            alt="Employee Database Logo"
          />
        </div>
        {/* Card Content */}
        <div className="text-[#fefefe] flex flex-col p-5 bg-[#222] h-[30rem]">
          <div className="my-2">
            Employee Database
          </div>
          <div className="text-sm text-[#777] my-2 h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-[#1a1a1a] scrollbar-track-[rgba(255,255,255,0.1)]">
           A basic management system for employees where you can manage their data by editing, deleting, and adding new employee. You can also view all the employees by the table 
           and can navigate with next and previous buttons. Built using Netbeans and Java Swing.
           </div>
          <div className="my-4">
            Tech Stack
            <ul className='flex flex-wrap mt-1'>
                <li><img src={javaLogo} alt='Java Logo' className='m-1 w-5 h-5' /></li>
                <li><img src={mysqlLogo} alt='MySQL Logo' className='m-1 w-8 h-5' /></li>
            </ul>
          </div>
          <div className="mt-10 mb-10 flex flex-col sm:flex-row space-y-5 sm:space-y-0 justify-evenly sm:mt-auto">
            <a href="https://github.com/philcajurao/employee-database.git" target='_blank' rel="noopener noreferrer" className="sm:w-auto w-full"><button className="emailBtn w-full">Code</button></a>
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
