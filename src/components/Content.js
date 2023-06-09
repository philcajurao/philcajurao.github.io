import React from 'react'
import Contact from './Contact'
import Project from './Project'
import About from './About'

function Content({ cont1, cont2, cont3, cont4, }) {
    return (
        <div className="content bg-[#111] p-3 bottom-0 z-20">
            <div className="text-[#fefefe] flex flex-col items-center mx-[20vw]">
                <div className="flex flex-col items-center mt-2">
                    <h1 className="font-bold text-xl">PHIL CAJURAO</h1>
                    <p className="">&lt;p&gt;Aspiring Developer&lt;/p&gt;</p>
                </div>
                <div id="about" ref={cont1} className="mt-12">
                   <About />
                </div>
                <div id="projects" ref={cont3} className="mt-40 w-full">
                   <Project />
                </div>
                <div id="contacts" ref={cont4} className="mt-40 w-full">
                  <Contact />
                </div>
            </div>
        </div>
    )
}

export default Content