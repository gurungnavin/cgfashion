import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/Siderbar';
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';

const App = () => {
  return (
    <BrowserRouter>
     <div className='bg-gray-50 min-h-screen'>
    <>
    <Navbar />
    <hr />
    <div className='flex w-full'>
      <SideBar />
      <div className='w-70% mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base'>
        <Routes>
          <Route path='/add' element = {<Add />} />
          <Route path='/list' element = {<List />} />
          <Route path='/orders' element = {<Orders />} />
        </Routes>
      </div>
    </div>
    </>
    </div>
    </BrowserRouter>
   
  )
}

export default App