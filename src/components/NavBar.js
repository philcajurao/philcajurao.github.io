import React from 'react'
import { BiMenu } from 'react-icons/bi'

function NavBar() {
  return (
    <div className="navbar top-0 w-full z-20">
        <div className="fixed flex px-7 justify-between w-full">
          <button className="p-3 font-extrabold">Phil.</button>
          <div className="flex">
            <BiMenu
              size={30}
              className="cursor-pointer sm:hidden self-center"
            />
            <ul className="sm:flex hidden ">
              <li>
                <button className="p-3 cursor-pointer transition duration-300 hover:bg-[#111] hover:text-[#fefefe]">
                  About me
                </button>
              </li>
              <li>
                <button className="p-3 cursor-pointer transition duration-300 hover:bg-[#111] hover:text-[#fefefe]">
                  Projects
                </button>
              </li>
              <li>
                <button className="p-3 cursor-pointer transition duration-300 hover:bg-[#111] hover:text-[#fefefe]">
                  Contacts
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default NavBar