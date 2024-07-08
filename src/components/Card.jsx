import React from 'react'

function Card({w,start,ug,lets,btn,expl ,hover}) {
  return (
    
     <div className={` ${w} h-96 p-5 hover:px-7 ease-out transition rounded-xl bg-slate-700  flex flex-col justify-between ${hover} `} >
     
     <div>
          <h2 className='text-s' >
          {ug===true? "Up Next":"Get In Touch"}
     </h2>
     <h2 className='text-3xl font-semibold ' >
          {lets ===true? "Insight and behind the scene":"Let's get it, together."}
     </h2>
     
     </div>

     <div>         
     <h1 className='text-[5vw] tracking-tighter leading-0 mt-12  ' >
          {start === true? "Start a project": null}
     </h1>
     {btn===true? (
          <button className='px-5 py-3 border-[1px] w-[10vw] rounded-full border-white' >Contact Us</button>
     ) : null }
     {expl===true? (
          <p>Explore what drives our team</p>
     ) : null}
                                   
     </div>
    </div>
    
  )
}

export default Card