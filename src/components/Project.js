import React from 'react'
import churchSite from '../images/Church Website.jpeg'

function Project() {
    return (
        <div>
            <h2 className="text-[#555] text-lg">Projects</h2>
            <div className="grid gap-10 mt-2 text-justify">
                <div className='card bg-[#fefefe] text-[#111] p-5 w-full'>
                    Church Website
                    <div className='overflow-y-scroll overflow-x-hidden h-64 shadow my-2'>

                        <img alt='First Project' src={churchSite} clasName="w-full h-auto" />
                    </div>
                    <div className='text-[#777]'>Fugiat eiusmod sit minim pariatur culpa minim cupidatat fugiat adipisicing reprehenderit.</div>
                    <div className='flex justify-evenly my-5'>
                        <button>Github</button>
                        <button>Live demo</button>
                    </div>
                </div>

                <div className='card bg-[#fefefe] text-[#111] p-5 w-full'>
                    Church Website
                    <div className='overflow-y-scroll overflow-x-hidden h-64 shadow my-2'>

                        <img alt='First Project' src={churchSite} clasName="w-full h-auto" />
                    </div>
                    <div className='text-[#777]'>Fugiat eiusmod sit minim pariatur culpa minim cupidatat fugiat adipisicing reprehenderit.</div>
                    <div className='flex justify-evenly my-5'>
                        <button>Github</button>
                        <button>Live demo</button>
                    </div>
                </div>

                <div className='card bg-[#fefefe] text-[#111] p-5 w-full'>
                    Church Website
                    <div className='overflow-y-scroll overflow-x-hidden h-64 shadow my-2'>

                        <img alt='First Project' src={churchSite} clasName="w-full h-auto" />
                    </div>
                    <div className='text-[#777]'>Fugiat eiusmod sit minim pariatur culpa minim cupidatat fugiat adipisicing reprehenderit.</div>
                    <div className='flex justify-evenly my-5'>
                        <button>Github</button>
                        <button>Live demo</button>
                    </div>
                </div>

                <div className='card bg-[#fefefe] text-[#111] p-5 w-full'>
                    Church Website
                    <div className='overflow-y-scroll overflow-x-hidden h-64 shadow my-2'>

                        <img alt='First Project' src={churchSite} clasName="w-full h-auto" />
                    </div>
                    <div className='text-[#777]'>Fugiat eiusmod sit minim pariatur culpa minim cupidatat fugiat adipisicing reprehenderit.</div>
                    <div className='flex justify-evenly my-5'>
                        <button>Github</button>
                        <button>Live demo</button>
                    </div>
                </div>

               
            </div>
            
        </div>
    )
}

export default Project