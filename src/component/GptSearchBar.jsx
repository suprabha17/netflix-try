import React from 'react'
import  lang  from '../utils/LanguageConstant';
import { useSelector } from 'react-redux';

function GptSearchBar() {
  const langKey = useSelector((store)=>store.config.lang);
  

  return (
   <div className='pt-[15%] flex justify-center'>
     <form action="" className=' w-1/2 bg-black grid grid-cols-12 rounded'>
        <input className='p-4 m-4 bg-white col-span-9' type="text" placeholder={lang[langKey].gptSearchHolder}/>
        <button className='py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg'>{lang[langKey].search}</button>
     </form>
    </div>
  )
}

export default GptSearchBar
