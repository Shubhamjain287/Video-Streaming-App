import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SideBar from './SideBar';

const Body = () => {
  return (
    <div>
      <Header />
      <div className='grid grid-flow-col' >
        <SideBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Body;