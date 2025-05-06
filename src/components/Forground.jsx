import React from 'react'
import Card from './card'
import { useRef } from 'react'


function Forground() {

  const ref = useRef(null)
  const data = [
    {
      desc :"This is A Tasting Cards For Just Fun..",
      filesize : ".9MB",
      close : true,
      tag:{isOpen:true, tagTittle:"Download Now",tagColor:"green"},

    },{
      desc :"This is A Tasting Cards For Just Fun..",
      filesize : ".9MB",
      close : true,
      tag:{isOpen:true, tagTittle:"Download Now",tagColor:"blue"},

    },{
      desc :"This is A Tasting Cards For Just Fun..",
      filesize : ".9MB",
      close : true,
      tag:{isOpen:true, tagTittle:"Download Now",tagColor:"red"},

    },
  ]
  return (
    <div ref={ref} className='fixed z-[3] h-full w-full  top-0 left-0 flex gap-8 flex-wrap p-8'>
     {
      data.map((item, index)=>(
        <Card data={item} refrence={ref}/>
      ))
     }
    </div>
  )
}

export default Forground
