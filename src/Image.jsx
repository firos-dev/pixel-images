import React from 'react'
import image from "./assets/image.jpg"

const Image = () => {
  return (
    <div className='w-full flex justify-center items-center pt-3 m-0'>
        <img src={image} width="1057px"/>
    </div>
  )
}

export default Image