import React from "react";
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
import canvaLogo from '../icons/canva.png'
import githubLogo from '../icons/github.png'
import npmLogo from '../icons/npmred.png'
import vscodeLogo from '../icons/vscode.png'

function Skills() {
  
  return (
    <div className="text-[#fefefe] text-lg text-center ">
      Skills and Tools
      <ul className='grid grid-cols-3 place-content-center w-full gap-10 mt-5 mx-auto text-base text-[#777]'>
        <li className="before:content-['HTML'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={htmlLogo} alt='HTML Logo' className="w-12 sm:w-16 h-auto mx-auto" />
        </li>
        <li className="before:content-['CSS'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={cssLogo} alt='CSS Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['JavaScript'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={jsLogo} alt='JS Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['React'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={reactLogo} alt='React Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['Tailwind'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={tailwindLogo} alt='Tailwind Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['Material_UI'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={muiLogo} alt='MUI Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['Materialize_CSS'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={materializeLogo} alt='Materialize Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['PHP'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={phpLogo} alt='PHP Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['Java'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={javaLogo} alt='Java Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['MySQL'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={mysqlLogo} alt='MySQL Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['API'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={apiLogo} alt='API Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['VS_Code'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={vscodeLogo} alt='VSCode Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['NPM'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={npmLogo} alt='NPM Logo' className='w-14 sm:w-20 h-auto mx-auto' />
        </li>
        <li className="before:content-['Canva'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={canvaLogo} alt='Canva Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
        <li className="before:content-['GitHub'] before:absolute before:duration-200 before:transition-all before:flex before:items-center before:justify-center flex items-center before:hover:opacity-100 before:opacity-0 before:bg-[#111] before:h-full relative before:bottom-0 before:left-0 before:w-full">
          <img src={githubLogo} alt='GitHub Logo' className='w-12 sm:w-16 h-auto mx-auto' />
        </li>
      </ul>
    </div>
  );
}

export default Skills;
