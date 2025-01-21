import mysql from "../assets/techstacks/mysql.png"
import ghl from "../assets/techstacks/ghl.png"
import { motion } from "motion/react"



import { FaReact, FaWordpress, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiPhp } from "react-icons/si";


const TechStacks = () => {
  return (
    <div className="overflow-x-hidden py-32">
        <motion.div className="w-screen flex justify-between space-x-8"
          animate={{ x: ['-100%', '101%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          }}
        >
          <div className="text-[#3858E9] text-7xl">
            {/* <img src={logo} alt="" className="w-full max-h-[25px]" /> */}
            <FaWordpress />
          </div>
          <div>
            <img src={ghl} alt="ghl" className="w-[4.5rem] h-[4.5rem]" />
          </div>
          <div className="text-[#4F5B93] text-7xl">
            {/* <img src={react} alt="" className="w-full max-h-[25px]" /> */}
            <SiPhp />
          </div>
          <div className="text-[#53c1de] text-7xl">
            {/* <img src={react} alt="" className="w-full max-h-[25px]" /> */}
            <FaReact />
          </div>
          <div className="">
            <img src={mysql} alt="" className="w-full max-w-[100px]" />
          </div>
          <div className="text-[#F44D27] text-7xl">
            {/* <img src={react} alt="" className="w-full max-h-[25px]" /> */}
            <FaGitAlt />
          </div>
        </motion.div>


        <motion.div className="w-screen flex justify-between items-center mt-16 space-x-8"
          animate={{ x: ['100%', '-101%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          }}
        >

          <div className="text-[#ffc107] text-7xl">
            {/* <img src={react} alt="" className="w-full max-h-[25px]" /> */}
            <FaJs />
          </div>
          <div className="text-[#f16529] text-7xl">
            {/* <img src={react} alt="" className="w-full max-h-[25px]" /> */}
            <FaHtml5 />
          </div>
          <div className="text-[#1572B6] text-7xl">
            {/* <img src={logo} alt="" className="w-full max-h-[25px]" /> */}
            <FaCss3Alt />
          </div>
          <div className="text-[#007FFF] text-7xl">
            <SiMui />
          </div>
          <div>
            <svg className="w-[4.5rem] h-[4.5rem]" viewBox="0 0 256 404" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
              <title>daisyUI</title>
              <g>
                <path d="M66.406015,280.753083 L189.593985,280.753083 C223.611404,280.753083 251.18797,308.329649 251.18797,342.347068 C251.18797,376.364486 223.611404,403.941053 189.593985,403.941053 L66.406015,403.941053 C32.3885965,403.941053 4.81203008,376.364486 4.81203008,342.347068 C4.81203008,308.329649 32.3885965,280.753083 66.406015,280.753083 Z" fill="#1AD1A5"></path>
                <circle fill="#FFFFFF" cx="128" cy="128" r="123.18797"></circle>
                <path d="M128,0 C198.692448,0 256,57.307552 256,128 C256,198.692448 198.692448,256 128,256 C57.307552,256 0,198.692448 0,128 C0,57.307552 57.307552,0 128,0 Z M128,4.81203008 C59.9651629,4.81203008 4.81203008,59.9651629 4.81203008,128 C4.81203008,196.034837 59.9651629,251.18797 128,251.18797 C196.034837,251.18797 251.18797,196.034837 251.18797,128 C251.18797,59.9651629 196.034837,4.81203008 128,4.81203008 Z" fillOpacity="0.2" fill="#000000"></path>
                <circle fill="#FF9903" cx="128" cy="128" r="55.1882105"></circle>
              </g>
            </svg>
          </div>
          <div className="text-[#38BDF8] text-7xl">
            {/* <img src={react} alt="" className="w-full max-h-[25px]" /> */}
            <RiTailwindCssFill />
          </div>
        </motion.div>
      </div>
  );
}

export default TechStacks;
