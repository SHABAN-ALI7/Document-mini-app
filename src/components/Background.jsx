import React from 'react'

function Background() {
  return (
   <>
   <div className=' w-full h-screen fixed z-[2]'>

   <div className=' absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold '> Docs Documents</div>
   <h1 className=' absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-900 text-[11vw] leading-none tracking-[-0.07em]'>Docs.</h1>
   </div>
   </>
  )
}

export default Background