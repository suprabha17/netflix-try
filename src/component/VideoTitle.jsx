import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[12%] px-24 absolute text-white bg-gradient-to-b from-black w-screen aspect-video'>
      <h1 style={{ fontFamily:"Playfair Display, sans-serif" }} className='text-4xl font-extrabold
    bg-gradient-to-r from-red-500 to-yellow-400
    text-transparent bg-clip-text
    transition duration-900
    drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]
    hover:scale-105
    ' >{title}</h1>
      <p className='py-6 text-lg w-2/4'>{overview}</p>
      
      <div>
        <button className='bg-white text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg hover:opacity-70'> Play</button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
