import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div className="hero h-[calc(100svh-5rem)] relative px-4" id="section0">
            <div className="hero-content text-start">
                <div className="w-full">
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold">
                        I build websites so you don&apos;t have to.
                    </h1>
                    <div className="py-4 sm:py-8 text-xl sm:text-2xl lg:text-4xl sm:flex justify-start items-center">
                        <p>
                            I&apos;m <span className="bg-base-content text-primary px-2 mr-2">Phil Cajurao,</span>
                        </p>
                        <p>
                            a <span className="bg-base-content text-primary px-2">Web Developer.</span>
                        </p>
                    </div>
                    <div className="flex justify-start space-x-2">
                        <Link to='section3' smooth={true} className="bg-base-300 py-3 w-full text-center sm:w-auto md:py-5 sm:px-10 border transition-all duration-300 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[4px_4px_0px_white]">
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
