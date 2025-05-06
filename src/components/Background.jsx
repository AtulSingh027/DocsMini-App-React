import React from 'react'

export default function Background() {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>
     <div className='absolute top-[10px] flex justify-center w-full py-10 text-zinc-900 font-semibold text-xl '>Documents</div>
      <h1 className='absolute top-1/2 left-1/2 text-[12vw] -translate-x-[50%] -translate-y-[50%] leading-none  tracking-tighter  text-zinc-900'>Docs.</h1>
    </div>
    </>
  )
}
