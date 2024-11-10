import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  // these states are used for menu in small screen
  const [visible, setVisible] = useState(false);
  // we need to display the search bar so, only setShowSearch is imported form useContext
  const {setShowSearch} = useContext(ShopContext);
  return (
    <div className="flex justify-between items-center py-8 font-medium">
      <NavLink to="/">
        <img src={assets.logo} className="w-32" alt="logo" />
      </NavLink>
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* nav collection of search, user and cart */}
      <div className="flex items-center gap-6">
        <img onClick={()=> setShowSearch(true)} className="w-5" src={assets.search_icon} alt="search-icon" />
        {/* div for profile icon and when we hover it, the dropdown menu, will display. */}
        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="user-icon"
          />
          {/* this div will display as block of group className */}
          <div className="hidden group-hover:block absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-3 w-36 py-3 px-5 bg-slate-100 text-gray-400 rounded">
              {/* this div is for card of menu list */}
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        {/* link component(imported form react-router-dom) as work same as link(a-tag) with to =" " */}
        <Link to="/cart" className="relative">
          <img className="w-5 min-w-5" src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black rounded-full text-white leading-4 aspect-square text-[10px]">
            11
          </p>
        </Link>
        {/* now we want to display menu icon on small screen */}
        <img onClick={()=>setVisible(true)} className="w-5 sm:hidden cursor-pointer" src={assets.menu_icon} alt="" />
      </div>
      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 bg-white 
        overflow-hidden transition-all  ${visible? 'w-full' : 'w-0'}`}>
          <div className="flex flex-col text-gray-600">
            {/* this div is for back and arrow icon */}
            <div onClick={()=> setVisible(false)} className="flex items-center gap-3 p-3 cursor-pointer">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
              <p>Back</p>
            </div>
            {/* onclick is passed as setVisible false, that the menu will be close when clicked */}
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/'>HOME</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/about'>ABOUT</NavLink>
            <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to='/contact'>CONTACT</NavLink>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
