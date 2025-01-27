/* eslint-disable react/prop-types */

import { IoArrowForwardCircleOutline } from "react-icons/io5";

function SingleService({allData}) {
    
  return (
    <>
        <article className={`text-center p-10 w-full md:w-1/2 lg:w-1/3 mb-4 ${allData.border} border-grey-200`}>
            <img src={allData.imgUrl} alt="" className='mx-auto'/>
            <h2 className='font-bold text-xl my-3'>{allData.title}</h2>
            <p className="font-inter text-[17.6px] font-light leading-[26.4px] tracking-[0.16px] text-center underline-from-font decoration-none">{allData.desc}</p>
            <a href={allData.url} className="font-semibold my-5 inline-flex flex-row gap-1 items-center justify-center">learn more <IoArrowForwardCircleOutline /></a>
        </article>
    </>
  )
}

export default SingleService