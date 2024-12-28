import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/Siderbar';

const App = () => {
  return (
    <BrowserRouter>
     <div className='bg-gray-50 min-h-screen'>
    <>
    <Navbar />
    <hr />
    <div className='flex w-full'>
      <SideBar />
    </div>
    </>
    </div>
    </BrowserRouter>
   
  )
}

export default App