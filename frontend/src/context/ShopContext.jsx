import { createContext, useState } from "react";
import {products} from '../assets/assets'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '円';
    const delivery_fee = 130;
    //this state is for search the items
    const [search, setSearch] = useState('');
    // this state is for display search or hidden
    const [showSearch, setShowSearch] = useState(false);
    // for the cart item
    const [cartItems, setCartItems] = useState({});

    const addToCard = async(itemId, size) => {
        let cartData = structuredClone(cartItems);
    }
    const value = {
        products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;