import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

function Work() {
// 
const { scrollYProgress } = useScroll()

const [images , setImages] = useState([
          {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top: "50%", left: "50%", isActive: false },
          {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top: "56%", left:"30%", isActive: false },
          {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top: "54%", left:"60%", isActive: false },
          {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top: "55%", left:"20%", isActive: false },
          {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top: "56%", left:"70%", isActive: false },
          {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top: "57%", left:"10%", isActive: false },
         
     ])

scrollYProgress.on("change",(data)=>{
     function showimages(arr) {
          setImages(prev =>(
               prev.map((item,index)=>(
                    arr.indexOf(index)=== -1?(
                         {...item, isActive: false}
                    ):(
                         {...item, isActive:true}
                    )
               ))
          ))
     }

     switch(Math.floor(data*50)){
          case 0:
               showimages([]);
          break;
          case 1:
               showimages([0, ])
          break;
          case 2:
               showimages([0, 1, ])
          break;
          case 3:
               showimages([0, 1, 2, ])
          break;
          case 4:
               showimages([0, 1, 2, 3, ])
          break;
          case 5:
               showimages([0, 1, 2, 3, 4, ])
          break;
          case 6:
               showimages([0, 1, 2, 3, 4, 5])
          break;
          
          
     }
})

function showNhideImgs(scrollval) {
     console.log(scrollval);
}

     

  return (
    <div className='w-full h-[90vh] ' >
     <div className='max-w-screen-lg  mx-auto flex flex-col justify-center items-center relative' >
          <h1 className='text-white pt-[5%] mt-[30%]  flex flex-col justify-center items-center text-[30vw] font-semibold leading-none rotate-90  leading-0 sm:rotate-0 sm:mt-0   ' >
               <div className='sm:hidden'>work</div>
               <div className='' >work</div>
               <div className='sm:hidden' >work</div>
          </h1>
          <p className='text-zinc-600  text-xs'>Web Design, React Devlopment, Creative Design</p>
          
          <div className='w-full h-96  absolute top-0 left-0 ' >
               {images.map((elem, index)=>
               elem.isActive &&
               (
                    <img className=' h-[30vh] w-30 sm:w-80 sm:h-80 rounded-xl  absolute  sm:top-10 ' style={{ top: elem.top, left: elem.left}} key={index} src={elem.url} />
              ))}
          </div>
     </div>
    </div>
  )
}

export default Work