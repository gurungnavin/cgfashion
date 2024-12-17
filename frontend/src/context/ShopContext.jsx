import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "円";
  const delivery_fee = 130;
  //this state is for search the items
  const [search, setSearch] = useState("");
  // this state is for display search or hidden
  const [showSearch, setShowSearch] = useState(false);
  // for the cart item
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {

    if (!size) {
        toast.error('サイズを選択してください。');
        return;
    }
    //このメソッドでは、元の値の移譲可能オブジェクトを、新しいオブジェクトにクローンするのではなく、移譲することもできます。
    let cartData = structuredClone(cartItems);

    if(cartData[itemId]) {
        if(cartData[itemId][size]) {
            cartData[itemId][size] += 1;
        }
        else {
            cartData[itemId][size] = 1;
        }
    }
    else {
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    // this for loop will help us to iterate the items
    for(const items in cartItems) {    
      // this for loop will help us to iterate the items's size
      for(const item in cartItems[items]) {
        try {
          if(cartItems[items][item] > 0) {
            totalCount += cartItems[items][item]
          }
        }
        catch (error) {
          console.error(error)
          }
      }
    }
    return totalCount;
  }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
