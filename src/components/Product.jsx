import React from 'react'
import { IoMdReturnRight } from "react-icons/io";
import Button from './Button'

function Product({val,mover,count}) {
  return (
    <div onMouseEnter={()=>{mover(count)}}  className=' product flex px-32 justify-between items-center w-full p-10  hover:bg-violet-950 relative  ' >
      
     <h1 className=' p-h1 w-[65%] text-white  flex items-center    text-[3rem] ' >{val.title}</h1>

     <div className='pDiv px-6  w-[50%] py-4   flex justify-center items-center flex-col' >
      <p className='   w-[60%] text-white flex  text-sm mb-3  ' >{val.disc}</p>
      <div className='flex gap-3  w-full justify-center' >
        {val.live && <Button val="live" />}
        {val.case && <Button val="case study"/>}
      </div>
     </div>
    </div>
  )
}

export default Product