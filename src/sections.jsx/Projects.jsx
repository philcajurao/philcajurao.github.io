import ie from "../assets/projects/ie.png"
import fts from "../assets/projects/fts.png"
import ghl from "../assets/techstacks/ghl.png"
import { FaReact, FaPhp, FaWordpress } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="h-full px-4 pb-16">
      <h3 className="text-4xl text-center mb-16">Projects</h3>

      <div className="grid lg:grid-cols-2 w-full place-items-center gap-8">
        <div className="card border max-w-md overflow-y-hidden">
          <figure>
            <img
              src={ie}
              alt="Insurance Enterprise USA Site"
              className="h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Insurance Enterprise USA</h2>
            <p className="line-clamp-2 leading-4">Insurance website with quote & enroll feature.</p>

            <div className="flex space-x-2 text-2xl">
              <div className="text-[#3858E9] tooltip tooltip-bottom" data-tip="Wordpress">
                <FaWordpress />
              </div>
              <div className="text-[#4F5B93] tooltip tooltip-bottom" data-tip="PHP">
                <FaPhp />
              </div>
              <div className="tooltip tooltip-bottom" data-tip="GoHighLevel">
                <img src={ghl} alt="ghl" className="w-full max-h-[23.99px]" />
              </div>
              <div className="text-[#53c1de] tooltip tooltip-bottom" data-tip="React JS">
                <FaReact />
              </div>
              <div className="text-[#38BDF8] tooltip tooltip-bottom" data-tip="Tailwind">
                {/* <img src={react} alt="" className="w-full max-h-[25px]" /> */}
                <RiTailwindCssFill />
              </div>
            </div>

            <div className="card-actions mt-8 justify-start sm:justify-end space-x-2">
              {/* <a href="https://www.insuranceenterpriseusa.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-base-300 p-3 text-center border transition-all duration-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[2px_2px_0px_white]">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                </svg>
              </a> */}
              <a href="https://www.insuranceenterpriseusa.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-base-300 p-3 text-center border transition-all duration-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[2px_2px_0px_white]">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="card border max-w-md overflow-y-hidden">
          <figure>
            <img
              src={fts}
              alt="Fortune Tech Solutions Site"
              className="h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fortune Tech Solutions</h2>
            <p className="line-clamp-2 leading-4">Business-focused site offering IT services.</p>

            <div className="flex items-center space-x-2 text-2xl">
              <div className="tooltip tooltip-bottom" data-tip="EmailJS">
                <svg className="w-5 h-5 text-[#FF8434] rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m3.62 6.389 8.396 6.724 8.638-6.572-7.69-4.29a1.975 1.975 0 0 0-1.928 0L3.62 6.39Z" />
                  <path d="m22 8.053-8.784 6.683a1.978 1.978 0 0 1-2.44-.031L2.02 7.693a1.091 1.091 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043V8.053Z" />
                </svg>
              </div>
              <div className="text-[#53c1de] tooltip tooltip-bottom" data-tip="React JS">
                {/* <img src={react} alt="" className="w-full max-h-[25px]" /> */}
                <FaReact />
              </div>
              <div className="tooltip tooltip-bottom" data-tip="DaisyUI">
                <svg className="w-6 h-6" viewBox="0 0 256 404" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                  <title>daisyUI</title>
                  <g>
                    <path d="M66.406015,280.753083 L189.593985,280.753083 C223.611404,280.753083 251.18797,308.329649 251.18797,342.347068 C251.18797,376.364486 223.611404,403.941053 189.593985,403.941053 L66.406015,403.941053 C32.3885965,403.941053 4.81203008,376.364486 4.81203008,342.347068 C4.81203008,308.329649 32.3885965,280.753083 66.406015,280.753083 Z" fill="#1AD1A5"></path>
                    <circle fill="#FFFFFF" cx="128" cy="128" r="123.18797"></circle>
                    <path d="M128,0 C198.692448,0 256,57.307552 256,128 C256,198.692448 198.692448,256 128,256 C57.307552,256 0,198.692448 0,128 C0,57.307552 57.307552,0 128,0 Z M128,4.81203008 C59.9651629,4.81203008 4.81203008,59.9651629 4.81203008,128 C4.81203008,196.034837 59.9651629,251.18797 128,251.18797 C196.034837,251.18797 251.18797,196.034837 251.18797,128 C251.18797,59.9651629 196.034837,4.81203008 128,4.81203008 Z" fillOpacity="0.2" fill="#000000"></path>
                    <circle fill="#FF9903" cx="128" cy="128" r="55.1882105"></circle>
                  </g>
                </svg>
              </div>
              <div className="text-[#38BDF8] tooltip tooltip-bottom" data-tip="Tailwind">
                {/* <img src={react} alt="" className="w-full max-h-[25px]" /> */}
                <RiTailwindCssFill />
              </div>
            </div>

            <div className="card-actions mt-8 justify-start sm:justify-end space-x-2">
              {/* <a href="https://www.insuranceenterpriseusa.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-base-300 p-3 text-center border transition-all duration-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[2px_2px_0px_white]">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                </svg>
              </a> */}
              <a href="https://fortunetechsolutions.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-base-300 p-3 text-center border transition-all duration-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[2px_2px_0px_white]">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;
