import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/Siderbar';
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import env(backend api) and export as backendURL to use.
export const backendURL = import.meta.env.VITE_BACKEND_URL
export const currency = '円'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'): "")

  // to prevent from auto logout by using local storage
  useEffect(()=> {
    localStorage.setItem('token', token)
  }, [token])

  return (
    <BrowserRouter>
      <div className='bg-gray-50 min-h-screen'>
        <ToastContainer />
    {token === '' ? <Login setToken= {setToken}/>:
     <>
     <Navbar  setToken = {setToken}/>
     <hr />
     <div className='flex w-full'>
       <SideBar />
       <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base'>
         <Routes>
          {/* why token, because of permission to add,list and orders */}
           <Route path='/add' element = {<Add token = {token} />} />
           <Route path='/list' element = {<List token = {token} />} />
           <Route path='/orders' element = {<Orders token = {token} />} />
         </Routes>
       </div>
     </div>
     </>
    }
    </div>
    </BrowserRouter>
   
  )
}

export default App