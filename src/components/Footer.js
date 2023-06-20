import React from 'react'
import githubLogo from '../icons/github.png'
import linkedinLogo from '../icons/linkedin.png'

function Footer() {
    return (
        <div className="footer bg-[#222] text-[#fefefe] flex flex-col-reverse items-center space-y-10 sm:space-y-0 space-y-reverse sm:flex-row sm:justify-evenly  py-10">
            <p className='text-center flex flex-col sm:flex-row sm:space-x-1'>
                <span>© 2023</span>
                <span>Cris Philip "Phil" Cajurao</span>
            </p>
            <ul className='flex space-x-7'>
                <li><a href={'https://www.linkedin.com/in/philcajurao/'} target='_blank' rel="noopener noreferrer"> <img src={linkedinLogo} alt='GitHub Logo' className='w-7 h-auto' /> </a></li>
                <li><a href={'https://github.com/philcajurao'} target='_blank' rel="noopener noreferrer"> <img src={githubLogo} alt='LinkedIn Logo' className='w-7 h-auto' /> </a></li>
            </ul>
        </div>
    )
}

export default Footer