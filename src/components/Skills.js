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

function Skills() {
  return (
    <div className="text-[#fefefe] text-lg text-center ">
      Skills
      <ul className='grid grid-cols-3 place-content-center w-full gap-10 mt-5 mx-auto'>
            <li><img src={htmlLogo} alt='HTML Logo' className='w-12 sm:w-16 h-auto mx-auto' /></li>
            <li><img src={cssLogo} alt='CSS Logo' className='w-12 sm:w-16 h-auto mx-auto' /></li>
            <li><img src={jsLogo} alt='JS Logo' className='w-12 sm:w-16 h-auto mx-auto' /></li>
            <li><img src={reactLogo} alt='React Logo' className='w-12 sm:w-16 h-auto mx-auto' /></li>
            <li><img src={tailwindLogo} alt='Tailwind Logo' className='w-12 sm:w-16 h-auto mx-auto' /></li>
            <li><img src={muiLogo} alt='MUI Logo' className='w-12 sm:w-16 h-auto mx-auto' /></li>
            <li className='flex items-center'><img src={materializeLogo} alt='Materialize Logo' className='w-12 sm:w-16 h-auto mx-auto' /></li>
            <li><img src={phpLogo} alt='PHP Logo' className='w-12 sm:w-16 h-auto mx-auto' /></li>
            <li><img src={javaLogo} alt='Java Logo' className='w-12 sm:w-16 h-auto mx-auto' /></li>
        </ul>
    </div>
  );
}

export default Skills;
