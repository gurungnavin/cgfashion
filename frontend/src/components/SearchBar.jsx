import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import {useLocation} from 'react-router-dom'

const SearchBar = () => {
    const [visible, setVisible] = useState(false)
    //now we have to import search states form useContext
    const {search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    // useLocation is used for which pages(home, about etc) are you in, that can find out.
    const location = useLocation();

    useEffect(()=> {
        // console.log(location.pathname)
        if(location.pathname.includes('collection')) {
            setVisible(true)
        }
        else {
            setVisible(false)}
    }, [location])
    // if showSerach and the loaction of visible is true then display search bar input
    return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2
      my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input value={search} onChange={(e)=> setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="検索する" />
        <img className="w-4" src={assets.search_icon} alt="search icon" />
      </div>
      <img onClick={()=> setShowSearch(false)} className="inline cursor-pointer w-3" src={assets.cross_icon} alt="cancel icon for search"/>
    </div>
  ): null
}

export default SearchBar
