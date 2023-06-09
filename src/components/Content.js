import React from 'react'

function Content({ cont1, cont2, cont3, cont4, }) {
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
                    <div className="grid grid-cols-2 gap-10 mt-2 text-justify">
                        <div className=" p-5 flex flex-col items-center">
                            <div className='text-left slef-starth3  '>Title</div>
                            <div>Media</div>
                            <div>Summary Laborum mollit cillum culpa culpa Lorem dolore aliquip eiusmod ea anim.</div>
                        </div>
                        <div className="p-5 flex flex-col items-center">

                            <di className='text-left  slef-starth3  '>Title</di>
                            <div>Media</div>
                            <div>Summary Velit proident labore duis exercitation officia ullamco duis.</div>
                        </div>
                    </div>
                </div>
                <div id="contacts" ref={cont4} className="mt-40 ">
                    <h2 className="text-[#555] text-lg text-center">Contact</h2>
                    <div className="flex flex-col space-y-5 mt-2 items-center text-justify">
                        <ul className='flex justify-between space-x-20'>
                            <li className='hover:bg-[#fefefe] hover:text-[#111] p-5 cursor-pointer duration-300'> <a href='https://www.facebook.com/philip.cajurao.7' target='_blank'>Facebook</a></li>
                            <li className='hover:bg-[#fefefe] hover:text-[#111] p-5 cursor-pointer duration-300'> <a href='https://www.instagram.com/philcajurao.dev' target='_blank'>Instagram</a></li>
                            <li className='hover:bg-[#fefefe] hover:text-[#111] p-5 cursor-pointer duration-300'> <a href='https://twitter.com/hilai_73' target='_blank'>Twitter</a></li>
                        </ul>
                        <div className=' p-5 cursor-pointer duration-300'>09616259849</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content