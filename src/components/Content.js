import React from 'react'

function Content({ cont1, cont2, cont3, cont4,}) {
    return (
        <div className="content bg-[#111] p-3 bottom-0 z-20">
            <div className="text-[#fefefe] flex flex-col items-center mx-[20vw]">
                <div className="flex flex-col items-center mt-2">
                    <h1 className="font-bold text-xl">PHIL CAJURAO</h1>
                    <p className="">&lt;p&gt;Aspiring Developer&lt;/p&gt;</p>
                </div>
                <div id="about" ref={cont1} className="mt-12">
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
                <div id="projects" ref={cont3} className="mt-40">
                    <h2 className="text-[#555] text-lg">Projects</h2>
                    <div className="flex flex-col space-y-5 mt-2 text-justify">
                        <p className="">
                            Culpa deserunt do reprehenderit sunt dolor ad quis ut in aliquip consectetur veniam. Dolor ut aliqua dolor proident culpa occaecat deserunt adipisicing eu non in. Ipsum laborum eiusmod exercitation cillum cupidatat deserunt aute consectetur anim fugiat minim labore nostrud. Nisi ex cupidatat est sint magna deserunt. Consequat adipisicing quis dolore commodo qui amet in tempor irure exercitation in voluptate anim sit.
                        </p>
                        <p className="">
                            Commodo proident tempor non aliqua deserunt eu nisi. Labore dolor ea est adipisicing elit. Tempor mollit veniam occaecat eu et ea in ad aliquip cillum.
                        </p>
                    </div>
                </div>
                <div id="contacts" ref={cont4} className="mt-40 mb-96">
                    <h2 className="text-[#555] text-lg">Contact</h2>
                    <div className="flex flex-col space-y-5 mt-2 text-justify">
                        <ul className='flex justify-between space-x-20'>
                            <li className='hover:bg-[#fefefe] hover:text-[#111] p-5 cursor-pointer duration-300'>Facebook</li>
                            <li className='hover:bg-[#fefefe] hover:text-[#111] p-5 cursor-pointer duration-300'>Instagram</li>
                            <li className='hover:bg-[#fefefe] hover:text-[#111] p-5 cursor-pointer duration-300'>Twitter</li>
                            <li className='hover:bg-[#fefefe] hover:text-[#111] p-5 cursor-pointer duration-300'>09616259849</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content