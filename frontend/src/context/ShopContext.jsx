import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "円";
  const delivery_fee = 135;
  // to connect api from .env file.
  const backendURL = import.meta.env.VITE_BACKEND_URL
  const [products, setProducts] = useState([])
  // this state is for token for login
  const [token, setToken] = useState('')
  //this state is for search the items
  const [search, setSearch] = useState("");
  // this state is for display search or hidden
  const [showSearch, setShowSearch] = useState(false);
  // for the cart item
  const [cartItems, setCartItems] = useState({});
  // this hooks is for レジに進むbutton to next page
  let navigate = useNavigate()


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
    // if logged in, we are going to called api.
    if(token) {
      try {
        let response = await axios.post(backendURL + '/api/cart/add', {itemId, size}, {headers: {token}})

        console.log(response)
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }
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

  // to fetch api data by these logic
  const getProductData = async() => {
    try {
      const response = await axios.get(backendURL + '/api/product/list')
      if(response.data.success) {
        setProducts(response.data.products)
      }else {
        toast.error(response.data.message)
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const getUserCart = async(token) => {
    try {
      let response = await axios.get(backendURL + 'api/cart/get', {}, {headers: {token}})

      if(response.data.success) {
        setCartItems(response.data.cartData)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(()=> {
    getProductData();

  })

  useEffect(()=> {
    if(!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))
      getUserCart(localStorage.getItem('token'));
    }
  },[])

  const updateQuantity = async(itemId, size, quantity) => {
     let cartData = structuredClone(cartItems);
     cartData[itemId][size] = quantity;
     setCartItems(cartData);
  }
  
  const getCartAmount = () => {
    let totalAmout = 0;
    for(const items in cartItems) {
      // the loop get id of products
      let itemInfo = products.find((product) => product._id === items);
      // iteminfo get all details of products, with have _id.
      for(const item in cartItems[items]) {
        // this loop get size of products
        try {
          if(cartItems[items][item] > 0) {
            totalAmout += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message)
        }
      }
    }
    return totalAmout;
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
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendURL,
    setToken,
    token 
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
