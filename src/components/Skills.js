import React, { useState } from "react";
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

  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="text-[#fefefe] text-lg text-center ">
      Skills and Tools
      <ul className='grid grid-cols-3 place-content-center w-full gap-10 mt-5 mx-auto text-base text-[#777]'>
        <li>
          <img src={htmlLogo} alt='HTML Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>HTML</p>
        </li>
        <li>
          <img src={cssLogo} alt='CSS Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>CSS</p>
        </li>
        <li>
          <img src={jsLogo} alt='JS Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>JavaScript</p>
        </li>
        <li>
          <img src={reactLogo} alt='React Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>React</p>
        </li>
        <li>
          <img src={tailwindLogo} alt='Tailwind Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>Tailwind</p>
        </li>
        <li>
          <img src={muiLogo} alt='MUI Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>Material UI</p>
        </li>
        <li className='flex flex-col justify-center items-center'>
          <img src={materializeLogo} alt='Materialize Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>Materialize</p>
        </li>
        <li>
          <img src={phpLogo} alt='PHP Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>PHP</p>
        </li>
        <li>
          <img src={javaLogo} alt='Java Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>Java</p>
        </li>
        <li>
          <img src={mysqlLogo} alt='MySQL Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>MySQL</p>
        </li>
        <li>
          <img src={apiLogo} alt='API Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>API</p>
        </li>
        <li>
          <img src={vscodeLogo} alt='VSCode Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>Visual Studio Code</p>
        </li>
        <li className="flex flex-col justify-center items-center">
          <img src={npmLogo} alt='NPM Logo' className='w-14 sm:w-20 h-auto mx-auto' />
          <p>NPM</p>
        </li>
        <li>
          <img src={canvaLogo} alt='Canva Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>Canva</p>
        </li>
        <li>
          <img src={githubLogo} alt='GitHub Logo' className='w-12 sm:w-16 h-auto mx-auto' />
          <p>GitHub</p>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
