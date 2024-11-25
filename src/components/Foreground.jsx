import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {

  const ref = useRef(null)

  const data = [
    {
      desc: "what a good day it is",
      filesize: ".8mb",
      close: false,
      tag: {isOpen: false, tagTitle: "Download", tagColor: "green"}
    },
    {
      desc: "what a good day its",
      filesize: ".12mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {
      desc: "what a good day its",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "upload", tagColor: "blue"}
    },
  ]

  return (
    <div ref={ref} className=' fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground