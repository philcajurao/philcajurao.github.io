import React from 'react'

function LoadingPage({isLoading}) {
  return (
    <div className={`fixed inset-0 flex z-30 text-white justify-center items-center transition-all bg-[#111] duration-[1.5s]
        ${isLoading ? 'translate-y-0' : 'translate-y-[-100%]'}
    `}>
        <div className='sm:text-5xl text-xl text-[#fefefe] flex font-sans'>
            Initializing...    
        <p className='spin-animation sm:text-4xl'>&#128565;</p>
        </div>
    </div>
  )
}

export default LoadingPage