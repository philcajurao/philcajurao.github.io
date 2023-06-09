import React from 'react'

function Contact() {
    return (
        <div>
            <h2 className="text-[#555] text-lg text-center">Contact</h2>
            <div className="flex flex-col space-y-5 mt-2 items-center text-justify">
                <ul className='flex justify-between space-x-20'>
                    <li className='hover:bg-[#fefefe] hover:text-[#111] p-5 cursor-pointer duration-300'> <a href='https://www.facebook.com/philip.cajurao.7' target='_blank'>Facebook</a></li>
                    <li className='hover:bg-[#fefefe] hover:text-[#111] p-5 cursor-pointer duration-300'> <a href='https://www.instagram.com/philcajurao.dev' target='_blank'>Instagram</a></li>
                    <li className='hover:bg-[#fefefe] hover:text-[#111] p-5 cursor-pointer duration-300'> <a href='https://twitter.com/hilai_73' target='_blank'>Twitter</a></li>
                </ul>
                <div className=' p-5 cursor-pointer duration-300'>09616259849</div>

            </div>
        </div>
    )
}

export default Contact