import React from 'react'

function Content({ cont1, cont2, cont3, cont4,}) {
    return (
        <div className="content bg-[#111] p-3 bottom-0 z-20">
            <div className="text-[#fefefe] flex flex-col items-center mx-[20vw]">
                <div className="flex flex-col items-center mt-2">
                    <h1 className="font-bold text-xl">PHIL CAJURAO</h1>
                    <p className="">&lt;p&gt;Aspiring Developer&lt;/p&gt;</p>
                </div>
                <div ref={cont1} className="mt-12">
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
                <div ref={cont2} className="mt-40">
                    <h2 className="text-[#555] text-lg">School</h2>
                    <div className="flex flex-col space-y-5 mt-2 text-justify">
                        <p className="">
                            Ipsum et est et Lorem aliqua dolore. Amet deserunt commodo adipisicing quis culpa cupidatat est ut veniam sit. Ipsum reprehenderit in eiusmod ea exercitation anim adipisicing laboris minim. Do nulla commodo magna aute proident pariatur consectetur nostrud tempor. Incididunt cillum nostrud ullamco culpa. Cupidatat fugiat labore labore et elit dolor amet officia dolore irure consequat anim. Est irure irure anim dolore labore ut ut aliquip.
                        </p>
                        <p className="">
                            Deserunt esse commodo occaecat aute non ad eiusmod laborum reprehenderit. Eiusmod eiusmod culpa sunt commodo voluptate. Eiusmod esse anim enim aute proident culpa magna exercitation nulla exercitation dolore aliquip exercitation. Reprehenderit Lorem enim mollit laboris. Pariatur ex culpa dolore officia mollit incididunt. Commodo dolor esse exercitation enim cillum cillum reprehenderit.
                        </p>
                    </div>
                </div>
                <div ref={cont3} className="mt-40">
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
                <div ref={cont4} className="mt-40 mb-20">
                    <h2 className="text-[#555] text-lg">Contact</h2>
                    <div className="flex flex-col space-y-5 mt-2 text-justify">
                        <p className="">
                            Ex sunt ut tempor aliqua eu excepteur. Aute laboris incididunt Lorem pariatur nulla cillum Lorem dolor id cillum eu Lorem. Ullamco excepteur laborum proident Lorem qui magna proident aute aliquip tempor non exercitation non occaecat. Exercitation enim consectetur magna officia. Sunt proident minim excepteur eu enim sit ad sunt velit incididunt esse fugiat eiusmod aute.
                        </p>
                        <p className="">
                            Sit amet sint reprehenderit est cupidatat dolore consequat do consectetur aliquip aliqua esse veniam et. Est laboris qui aliqua consectetur Lorem aute commodo consequat veniam elit. Nostrud ex laboris adipisicing eu nulla voluptate sint pariatur non consequat.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content