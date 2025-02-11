import Resume from "../assets/personal/Latest Resume - Cris Philip Cajurao.pdf"
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="h-full overflow-x-hidden py-16">

      <div className="grid lg:grid-cols-2 mx-auto w-full max-w-5xl gap-4 px-4">

        <div className="text-2xl border p-8 bg-base-100 flex flex-col justify-center items-start">
          {/* <div className="border mb-4 p-1">
          <img src={dp} alt="" className="w-full max-h-[120px]" />
        </div> */}
          <p className="text-base-content/80 font-light">
            Take a look at my Resume by clicking this button.
          </p>
          <a href={Resume} download target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-lg space-x-2 mt-8 bg-base-300 py-3 w-full max-w-[12rem] text-center border transition-all duration-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[4px_4px_0px_white]">
            <span>Download</span>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://github.com/philcajurao"
            target="_blank"
            referrerPolicy="no-referrer"
            className="border group
            h-full flex justify-center items-center text-8xl text-base-100 bg-base-content
            ">
            <FaGithubSquare className="lg:group-hover:rotate-3 lg:group-hover:scale-110 lg:group-hover:text-base-300 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/philcajurao/"
            target="_blank"
            referrerPolicy="no-referrer"
            className="border group
            h-full flex justify-center items-center text-8xl text-base-100 bg-base-content
            ">
            <FaLinkedin className="lg:group-hover:rotate-3 lg:group-hover:scale-110 lg:group-hover:text-[#0A66C2] transition-all duration-300" />

          </a>
        </div>

        <div className="text-2xl lg:col-span-2 border p-8 bg-base-100 flex justify-center items-center">
          <p className="text-base-content/80 font-light">
            <span className="bg-base-content font-normal text-primary px-1">Web design is my passion.</span>&nbsp;
            I enjoy building a simple, clean and smooth websites like this one.
            Apart from that, expanding my knowledge through experimenting and learning new technologies are so important
            to keep a fresh perspective.
          </p>
        </div>
      </div>

    </div>
  );
}

export default About;
