import React from "react";
import {
  AiOutlineHome,
  AiFillFire,
  AiTwotoneShopping,
  AiTwotoneBulb,
} from "react-icons/ai";
import {
  MdVideoSettings,
  MdSubscriptions,
  MdLibraryMusic,
  MdImage,
} from "react-icons/md";
import { GiHook } from "react-icons/gi";
import { HiOutlineSignal, HiNewspaper, HiTrophy } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { GiHanger } from "react-icons/gi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const explore = [ { name:"Trending", Icon:AiFillFire}, {name:"Shopping", Icon:AiTwotoneShopping},{name:"Music", Icon:MdLibraryMusic},{name:"Live", Icon:HiOutlineSignal},{name:"Gaming", Icon:SiYoutubegaming},{name:"News", Icon:HiNewspaper},{name:"Sports", Icon:HiTrophy},{name:"Learning", Icon:AiTwotoneBulb},{name:"Fashion & Beauty", Icon:GiHanger} ];

const SideBar = () => {
  const isSideBarOpen = useSelector((store) => store.app.isSideBarOpen);

  // Early Return
  if (!isSideBarOpen) {
    return null;
  }

  return (
    <div className="col-span-1 shadow-lg p-4">
      <ul className="mt-4">
        <li className="flex items-center m-2 p-2 font-semibold hover:bg-gray-300 rounded-lg">
          <AiOutlineHome className="mx-2" size="1.4rem" />
          <Link to="/"> Home </Link>
        </li>
        <li className="flex items-center m-2 p-2 font-semibold hover:bg-gray-300 rounded-lg">
          <MdVideoSettings className="mx-2" size="1.4rem" />
          <Link to="/"> Shorts </Link>
        </li>
        <li className="flex items-center m-2 p-2 font-semibold hover:bg-gray-300 rounded-lg">
          <MdSubscriptions className="mx-2" size="1.4rem" />
          <Link to="/"> Subscriptions </Link>
        </li>
        <li className="flex items-center m-2 p-2 font-semibold hover:bg-gray-300 rounded-lg">
          <GiHook className="mx-2" size="1.4rem" />
          <Link to="/hooks"> Hooks </Link>
        </li>
      </ul>
      <hr />
      <h1 className="font-semibold mt-4 text-lg"> Subscription </h1>
      <ul>
        <li className="flex items-center m-2 p-2 font-semibold hover:bg-gray-300 rounded-lg">
          <MdImage className="mx-2" size="1.2rem" /> Shubham Jain
        </li>
        <li className="flex items-center m-2 p-2 font-semibold hover:bg-gray-300 rounded-lg">
          <MdImage className="mx-2" size="1.2rem" /> Yash Sharma
        </li>
        <li className="flex items-center m-2 p-2 font-semibold hover:bg-gray-300 rounded-lg">
          <MdImage className="mx-2" size="1.2rem" /> Sakshi
        </li>
      </ul>
      <h1 className="font-semibold mt-4 text-lg"> Explore </h1>
      <ul className="mt-4">
        {
          explore.map((item,index)=>{
              const { name , Icon } = item;
              return (
                <li key={index} className="flex items-center m-2 p-2 font-semibold hover:bg-gray-300 rounded-lg">
                  <Icon className="mx-2" size="1.4rem" />
                  <Link to={`/results?search_query=${name}`} > {name} </Link>
                </li>
              )
          })
        }
      </ul>
    </div>
  );
};

export default SideBar;
