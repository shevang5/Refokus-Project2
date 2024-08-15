import React from 'react'

function Stripe({val}) {
  return (
    <div className=' stripe w-[16.66%]  px-4  py-3 border-t-[1px] border-b-[1px] border-r-[1px] text-white flex justify-between items-center' >
     <img className=' sLogo h-4' src={val.url} alt="" />
     <span>{val.no}</span>
    </div>
  )
}

export default Stripe