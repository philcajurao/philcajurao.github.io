import React from 'react'
import EmailContact from './EmailContact'

function Contact() {
    return (
        <div>
            <h2 className="text-[#fefefe] text-lg text-center">Contact</h2>
            <div className="flex flex-col items-center mt-2 text-justify">
                <ul className='grid sm:grid-cols-3 text-center'>
                    <li className='sm:hover:bg-[#fefefe] sm:hover:text-[#111] text-[#777] cursor-pointer p-5 duration-300'> <a href='https://www.facebook.com/philip.cajurao.7' target='_blank'>Facebook</a></li>
                    <li className='sm:hover:bg-[#fefefe] sm:hover:text-[#111] text-[#777] cursor-pointer p-5 duration-300'> <a href='https://www.instagram.com/philcajurao.dev' target='_blank'>Instagram</a></li>
                    <li className='sm:hover:bg-[#fefefe] sm:hover:text-[#111] text-[#777] cursor-pointer p-5 duration-300'> <a href='https://www.linkedin.com/in/philcajurao' target='_blank'>LinkedIn</a></li>
                    {/* <li className='hover:bg-[#fefefe] hover:text-[#111] cursor-pointer p-2 duration-300'> <a href='https://twitter.com/hilai_73' target='_blank'>Twitter</a></li> */}
                </ul>
                <span className='my-10'>or</span>
                <EmailContact />
            </div>
        </div>
    )
}

export default Contact