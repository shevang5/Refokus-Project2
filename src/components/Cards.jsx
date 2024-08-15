import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className=' bCards text-white w-full p-5 flex gap-5 ' >
     <Card w={"w-[30%]"} start={false} ug={true} lets={true} btn={false} expl={true} hover={"hover:bg-slate-400 "}/>
     <Card w={"w-[70%]"} start={true} ug={false} lets={false} btn={true} expl={false} hover={"hover:bg-violet-700 "}/>
    </div>
  )
}

export default Cards