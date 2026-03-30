import React from 'react'

function GptSearchBar() {
  return (
   <div className='pt-[15%] flex justify-center'>
     <form action="" className=' w-1/2 bg-black grid grid-cols-12 rounded'>
        <input className='p-4 m-4 bg-white col-span-9' type="text" placeholder='What would yo like to watch today?'/>
        <button className='py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg'>Search</button>
     </form>
    </div>
  )
}

export default GptSearchBar
