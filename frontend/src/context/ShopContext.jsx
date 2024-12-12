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

  useEffect(() => {
     console.log(cartItems)
  }, [cartItems]);


  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
