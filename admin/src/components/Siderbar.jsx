import React from 'react';
import { NavLink } from "react-router-dom";
import { assets } from '../assets/assets'

const Siderbar = () => {
  return (
    <div className="w-[19%] min-h-screen border-r-2">
      <div className="flex flex-col gap-4 pt-6 pl-[20%] text-[15px]">
        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-2 py-2 rounded-l-lg" to='/add'>
            <img className='w-5 h-5' src={assets.add_icon}/>
            <p className='hidden md:block'>追加</p>
        </NavLink>
        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-2 py-2 rounded-l-lg" to='/list'>
            <img className='w-5 h-5' src={assets.order_icon}/>
            <p className='text-smhidden md:block'>リスト</p>
        </NavLink>
        <NavLink className="flex items-center gap-3 border border-gray-300 border-r-0 px-2 py-2 rounded-l-lg" to='/orders'>
            <img className='w-5 h-5' src={assets.order_icon}/>
            <p className='hidden md:block'>注文</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Siderbar;