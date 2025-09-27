import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { FaCheckCircle, FaStar, FaClipboardCheck } from "react-icons/fa";

const MoreInfo = () => {
  return (
    <div className="div py-10 bg-[var(--blue)]/20 ">

    <div className='grid max-w-7xl place-items-center    mx-auto py-5 md:grid-cols-2 grid-cols-1'>
     
      <div className="content px-4 mb-10 md:px-0 md:mb-0 ">
        <h4 className='text-3xl text-[var(--blue)] mb-8 font-semibold  ' > Quality Assurance ---</h4>
        <h2 className='text-4xl  mb-8  ' >Manufacture industrial valves, indigenous engineering</h2>
        <p className='text-xl mb-10 ' >Shree Ram Engineering complies
with all codes and standards
applic able to products
manufactured by the company. It i s
committed to maintain high
standard of quality in compliance
with customer specificatio</p>
<div className="">
          <h4 className='text-3xl text-[var(--blue)] mb-8 font-semibold  ' >Our Motto ---</h4>
            <div className="flex flex-col ">
                <ul className="space-y-4 text-start  text-lg">
        <li className="flex items-center gap-3">
          <FaCheckCircle className="text-blue-600 text-2xl" />
          Adopt recognized standard of quality system.
        </li>
        <li className="flex items-center gap-3">
          <FaStar className="text-yellow-500 text-2xl" />
          Maintain high standard of quality to customer's satisfaction.
        </li>
        <li className="flex items-center gap-3">
          <FaClipboardCheck className="text-green-600 text-2xl" />
          Products should be fully in conformity with customer's specification
          and design.
        </li>
      </ul>
            </div>
</div>
      </div>
 <div className="images">
       
        <LazyLoadImage
          src='/moreInfo/image1.png'
          alt='loading...'
          effect='blur'
          className='w-full   h-auto'
         
        />
      

      </div>
    </div>
    </div>
  )
}

export default MoreInfo
