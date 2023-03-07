import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);

  // Early Return 
  if(!isSideBarOpen){
    return null;
  }

  return (
    <div className='col-span-1 shadow-lg p-5'>
      <ul className='mt-4'>
        <Link to="/"> Home </Link>
        <li><Link to="/hooks"> Hooks </Link></li>
        <li> Shorts </li>
        <li> Subscriptions </li>
      </ul>
      <h1 className="font-bold mt-4"> Subscription </h1>
      <ul>
        <li> Shubham Jain </li>
        <li> Sakshi Raghuwanshi </li>
        <li> Yash Sharma </li>
      </ul>
      <h1 className="font-bold mt-4"> Explore </h1>
      <ul>
        <li> Trending </li>
        <li> Shopping </li>
        <li> Music </li>
        <li> Movie </li>
        <li> Live </li>
        <li> Gaming </li>
        <li> News </li>
        <li> Sports </li>
        <li> Learning </li>
        <li> Fashion & Beauty </li>
      </ul>
    </div>
  )
}

export default SideBar;