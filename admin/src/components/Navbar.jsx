import React from 'react'
import {assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-32' src={assets.logo} alt="" />
      <button onClick={()=> setToken('')} className='bg-gray-600 text-xs text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full'>ログアウト</button>
    </div>
  )
}

export default Navbar