import React from 'react'

function Footer() {
    const footer = [
     "Privacy Policy","Cookie Policy","Impressum","Term","Webflow Agency"
    ]
  return (
    <div className=' footer w-full py-5 px-10 text-gray-500 flex justify-between gap-5  text-xs' >
     <div className='flex gap-5' >
          {footer.map((item,i) => <h1 key={i} className='' >{item}</h1>)}
     </div>
     <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt=""  />
    </div>
  )
}

export default Footer