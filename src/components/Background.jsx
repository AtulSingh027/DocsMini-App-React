import React from 'react'
import { PlusSquareIcon,PlusCircle } from 'lucide-react'

export default function Background() {
 
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>
     <div className='absolute top-[10px] flex justify-center w-full py-10 text-zinc-900 font-semibold text-xl '>My Notes</div>
      <h1 className='absolute top-1/2 left-1/2 text-[12vw] -translate-x-[50%] -translate-y-[50%] leading-none  tracking-tighter  text-zinc-900'>Docs.</h1>
      <div className='w-full h-full relative'>
        <PlusCircle
         className='absolute top-[40rem] left-1/2 text-zinc-900 -translate-x-[50%] -translate-y-[50%] w-[10vw] h-[10vw] opacity-100' />
      </div>
    </div>
    </>
  )
}
