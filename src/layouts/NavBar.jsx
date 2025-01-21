import { Link } from "react-scroll";

const NavBar = () => {
    return (
        <div className="navbar px-4 py-0 h-20">


            <div className="navbar-start">
                <Link to='section0' smooth={true} offset={-100} className="border px-2 py-1 text-2xl no-underline hover:no-underline text-inherit cursor-pointer flex sm:hidden" >
                    p.
                </Link>
                <Link to='section0' smooth={true} offset={-100} className="border px-2 py-1 text-2xl no-underline hover:no-underline text-inherit cursor-pointer hidden sm:flex" >
                    philcajurao.
                </Link>
            </div>


            <div className='navbar-end hidden md:flex justify-end h-full'>
                <Link to='section1' smooth={true} className='h-full flex items-center px-4 cursor-pointer hover:bg-base-content hover:text-primary transition-all duration-100'>About</Link>
                <Link to='section2' smooth={true} className='h-full flex items-center px-4 cursor-pointer hover:bg-base-content hover:text-primary transition-all duration-100'>Projects</Link>
                <Link to='section3' smooth={true} className='h-full flex items-center px-4 cursor-pointer hover:bg-base-content hover:text-primary transition-all duration-100'>Contacts</Link>
            </div>





            <div className="navbar-end md:hidden">
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost rounded btn-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
            </div>


        </div>
    );
}

export default NavBar;
