import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../utils/reducers/appSlice';

const Header = () => {
  
  const dispatch = useDispatch();

  const handleSideBar = () => {
    dispatch(toggleSideBar());
  }
    
  return (
    <div className="grid grid-flow-col shadow-lg p-2"> 
        <div className="col-span-1 flex items-center">
            <div className='mx-2 cursor-pointer'>
                <GiHamburgerMenu size="1.5rem" onClick={handleSideBar}/>
            </div>
            <img className='h-6 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="Youtube-logo" />
        </div>
        <div className='col-span-10 flex justify-center'>
            <input className="border border-gray-400 rounded-l-full w-1/2 p-2" type="text" placeholder="Search Video" />
            <button className="border border-gray-400 rounded-r-full p-3 bg-gray-300" > <HiSearch size="1.2rem"/> </button>
        </div>
        <div className='col-span-1 flex items-center'>
            <CgProfile size="2rem" />
        </div>
    </div>
  )
}

export default Header;