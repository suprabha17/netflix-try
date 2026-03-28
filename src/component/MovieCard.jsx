import React from 'react'
import { baseImageUrl } from '../utils/constants';

function MovieCard({title, image}) {
  return (
    <div className='w-48 mt-7 m-2 flex-shrink-0 hover:-translate-y-6 transition-transform duration-300 rounded-lg overflow-hidden cursor-pointer'>
        {/* <div><h1>{title}</h1></div> */}
        <div><img src={baseImageUrl + image} alt={title}/></div>
    </div>
  )
}

export default MovieCard
