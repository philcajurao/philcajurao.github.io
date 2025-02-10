import { Link } from 'react-scroll'
import { useState } from 'react'

const DrawerWrap = ({ children }) => {

    const [isChecked, setisChecked] = useState(false);
    const handleIsCheckedChange = () => {
        setisChecked(isChecked => !isChecked)
    }

    return (
        <div>
            <div className="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" checked={isChecked} onChange={handleIsCheckedChange} className="drawer-toggle" />
                <div className="drawer-content">
                    {children}
                </div>
                <div className="drawer-side md:hidden z-50">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu menu-md bg-base-200 text-base-content min-h-full w-80 p-4">
                        <li><Link onClick={handleIsCheckedChange} to='section0' smooth={true} offset={-700} className='rounded py-4 text-3xl'>Home</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section1' smooth={true} className='rounded py-4 text-3xl'>About</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section2' smooth={true} className='rounded py-4 text-3xl'>Projects</Link></li>
                        <li><Link onClick={handleIsCheckedChange} to='section3' smooth={true} className='rounded py-4 text-3xl'>Contacts</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default DrawerWrap;
