import React from 'react'
import { MdOutlineEngineering } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import { GoDiscussionClosed } from "react-icons/go";
import { MdDomain } from "react-icons/md";
const Services = () => {
  return (
    <div className="div py-6 bg-[#F3F4F8]">
        
    <div className='py-10 px-5 md:px-0  mx-auto max-w-7xl '>
        <p className='text-md tracking-wider text-[var(--blue)] '>SERVICES</p>
        <h2 className=' text-4xl font-light py-4 '>
            A height level service provider that <br /> recommended to any companies
        </h2>

        <div className="div my-4 py-5">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="bg-white  rounded-lg hover:scale-105 flex flex-col items-center justify-center py-5 text-center">
                 
                    <MdOutlineEngineering  className='text-6xl my-6 text-[var(--blue)] ' />
                    <p className='text-lg pb-8'>
                        Custom Engineering
                    </p>
                </div>
                <div className="bg-white rounded-lg hover:scale-105 flex flex-col items-center justify-center py-5 text-center">
                 
                    <SiAntdesign   className='text-6xl my-6 text-[var(--blue)] ' />
                    <p className='text-lg pb-8'>
                        Product Design
                    </p>
                </div>
                <div className="bg-white rounded-lg hover:scale-105 flex flex-col items-center justify-center py-5 text-center">
                 
                    <GoDiscussionClosed   className='text-6xl my-6 text-[var(--blue)] ' />
                    <p className='text-lg pb-8'>
                        Consultation
                    </p>
                </div>
                <div className="bg-white rounded-lg hover:scale-105 flex flex-col items-center justify-center py-5 text-center">
                 
                    <MdDomain   className='text-6xl my-6 text-[var(--blue)] ' />
                    <p className='text-lg pb-8'>
                    Maintenance
                    </p>
                </div>
             
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services