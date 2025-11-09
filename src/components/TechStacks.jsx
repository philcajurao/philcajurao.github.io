import mysql from "../assets/techstacks/mysql.png"
import ghl from "../assets/techstacks/ghl.png"



import { FaReact, FaWordpress, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiPhp, SiNextdotjs } from "react-icons/si";
import { DiMaterializecss } from "react-icons/di";



const TechStacks = () => {
  return (
    <div className="w-full mx-auto px-4 py-32">
      <div className="flex flex-col items-center">
        <h2 className="text-center text-2xl font-semibold mb-16">Technologies I recently used</h2>


        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">



          <div className="p-12 hover:bg-base-content hover:text-[#3858E9] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">Wordpress</p>
            <FaWordpress />
          </div>
          <div className="hover:bg-base-content group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">GoHighLevel</p>
            <img src={ghl} alt="ghl" className="w-[4.5rem] h-[4.5rem] grayscale group-hover:grayscale-0 transition-all" />
          </div>
          <div className="p-12 hover:bg-base-content hover:text-[#4F5B93] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">PHP</p>
            <SiPhp className="" />
          </div>
          <div className="p-12 hover:bg-base-content hover:text-[#53c1de] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">React JS</p>
            <FaReact className="" />
          </div>
          <div className="p-12 hover:bg-base-content hover:text-[#1572B6] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">CSS</p>
            <FaCss3Alt className="" />
          </div>
          <div className="p-12 hover:bg-base-content hover:text-[#F44D27] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">Git</p>
            <FaGitAlt className="" />
          </div>



          <div className="p-12 hover:bg-base-content hover:text-[#F7BB00] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">JavaScript</p>
            <FaJs className="" />
          </div>
          <div className="p-12 hover:bg-base-content hover:text-[#f16529] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">HTML</p>
            <FaHtml5 className="" />
          </div>
          <div className="p-12 hover:bg-base-content hover:text-[#EB7077] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">Materialize CSS</p>
            <DiMaterializecss className="" />
          </div>
          <div className="p-12 hover:bg-base-content hover:text-[#007FFF] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">MUI</p>
            <SiMui className="" />
          </div>
          <div className="hover:bg-base-content group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">DaisyUI</p>
            <svg className="w-[4.5rem] h-[4.5rem] grayscale group-hover:grayscale-0 transition-all" viewBox="0 0 256 404" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
              <title>daisyUI</title>
              <g>
                <path d="M66.406015,280.753083 L189.593985,280.753083 C223.611404,280.753083 251.18797,308.329649 251.18797,342.347068 C251.18797,376.364486 223.611404,403.941053 189.593985,403.941053 L66.406015,403.941053 C32.3885965,403.941053 4.81203008,376.364486 4.81203008,342.347068 C4.81203008,308.329649 32.3885965,280.753083 66.406015,280.753083 Z" fill="#1AD1A5"></path>
                <circle fill="#FFFFFF" cx="128" cy="128" r="123.18797"></circle>
                <path d="M128,0 C198.692448,0 256,57.307552 256,128 C256,198.692448 198.692448,256 128,256 C57.307552,256 0,198.692448 0,128 C0,57.307552 57.307552,0 128,0 Z M128,4.81203008 C59.9651629,4.81203008 4.81203008,59.9651629 4.81203008,128 C4.81203008,196.034837 59.9651629,251.18797 128,251.18797 C196.034837,251.18797 251.18797,196.034837 251.18797,128 C251.18797,59.9651629 196.034837,4.81203008 128,4.81203008 Z" fillOpacity="0.3" fill="#000000"></path>
                <circle fill="#FF9903" cx="128" cy="128" r="55.1882105"></circle>
              </g>
            </svg>
          </div>
          <div className="p-12 hover:bg-base-content hover:text-[#38BDF8] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">Tailwind</p>
            <RiTailwindCssFill className="" />
          </div>


          <div className="p-12 hover:bg-base-content hover:text-[#0a0a0a] text-base-content transition-all text-7xl group cursor-default relative flex justify-center items-center md:col-span-2 lg:col-span-1">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">Next JS</p>
            <SiNextdotjs />
          </div>
          <div className="hover:bg-base-content group cursor-default relative flex justify-center items-center md:col-span-2 lg:col-span-1">
            <p className="absolute h-full w-full text-center top-12 ease-out opacity-0 group-hover:-translate-y-8 scale-0 group-hover:scale-100 group-hover:opacity-100 duration-300 transition-all text-lg text-base-content/90 group-hover:text-primary">MySQL</p>
            <img src={mysql} alt="" className="w-full max-w-[100px] grayscale group-hover:grayscale-0 transition-all" />
          </div>




        </div>
      </div>
    </div>
  );
}

export default TechStacks;
