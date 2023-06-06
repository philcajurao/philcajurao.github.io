import React from 'react'

function Content() {
    return (
        <div className="content bg-[#111] p-3 bottom-0 z-20">
            <div className="text-[#fefefe] flex flex-col items-center mx-[20vw]">
                <div className="flex flex-col items-center mt-2">
                    <h1 className="font-bold text-xl">PHIL CAJURAO</h1>
                    <p className="">&lt;p&gt;Aspiring Developer&lt;/p&gt;</p>
                </div>
                <div className="mt-10">
                    <h2 className="text-[#555] text-lg">About Me</h2>
                    <div className="flex flex-col space-y-5 mt-2 text-justify">
                        <p className="">
                            Hi! My name's <b>Phil</b>, currently a graduating college student aspiring
                            to be a great developer. I've met programming in an interesting
                            and unusual way that brought me wanting to know it more.
                        </p>
                        <p className="">
                            Along with my school projects, I did some freelancing alone or
                            together with my friends to earn more exciting experience. This
                            faced me with common problems and bugs that helped me learned a
                            lot.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content