import React, { useEffect, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiSearch } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSideBar } from '../utils/reducers/appSlice';
import { cacheResults } from '../utils/reducers/searchSlice';
import { Link } from 'react-router-dom';

const Header = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchCache = useSelector((store) => store.search);
  
  const dispatch = useDispatch();

  useEffect(() => {

    // Debouncing Effect
    
    const timer = setTimeout(() => {

        if(searchCache[searchQuery]){
          setSuggestions(searchCache[searchQuery]);
        }
        else{
          getSearchSuggestions();
        }

    }, 200);
  
    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const handleSideBar = () => {
    dispatch(toggleSideBar());
  }

  const getSearchSuggestions = async () => {
      const data = await fetch(`${process.env.REACT_APP_SEARCH_API}${searchQuery}`);
      const res = await data.json();
      setSuggestions(res[1]);

      // Update Cache !!

      dispatch(cacheResults({
        [searchQuery] : res[1]
      }));
  }
    
  return (
    <div className="grid grid-flow-col shadow-lg p-2"> 
        <div className="col-span-1 flex items-center">
            <div className='mx-2 cursor-pointer'>
                <GiHamburgerMenu size="1.5rem" onClick={handleSideBar}/>
            </div>
            <img className='h-6 mx-2' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="Youtube-logo" />
        </div>
        <div className='col-span-10 px-10'>
            <div className='flex '>
              <input className="border border-gray-400 rounded-l-full w-1/2 p-2 placeholder:px-2" type="text" onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setShowSuggestions(true)} onBlur={()=> setShowSuggestions(false)} placeholder="Search Video" />
              <button className="border border-gray-400 rounded-r-full p-3 bg-gray-300" > <HiSearch size="1.2rem"/> </button>
            </div>
            {
              (searchQuery.length > 0) && (showSuggestions) &&
              <div className='absolute bg-white w-1/3 m-2 px-2 py-5 rounded-lg font-semibold'>
              <ul>
                {
                  suggestions?.length>0 && suggestions.map((suggestion,index) => {
                    return (
                      <a href={`https://www.youtube.com/results?search_query=${suggestion}`} key={index}> 
                      <li  className='p-2 grid grid-flow-col content-center items-center justify-start cursor-pointer hover:bg-gray-300'><div className='col-span-1'><HiSearch size="1.2rem"/></div><div className='px-2 grid-cols-11'> {suggestion} </div> </li>
                      </a>
                    )
                  })
                }
                
              </ul>
              </div>
            }
        </div>
        <div className='col-span-1 flex items-center'>
            <CgProfile size="2rem" />
        </div>
    </div>
  )
}

export default Header;

    // Debouncing Effect
    /**
     * Time, Tide and Javascripts Waits for None.
     * 
     * Calling Search Query / Auto Complete API After 200 ms
     * Example ( Without Debouncing )
     * Input --> Iphone pro max - 14 Character
     *       --> Assumed User - 1000000 i.e 10 Lakh user
     *       --> 14 * 10 lakh => 14000000 i.e 1 Crore 40 Lakh API Calls
     * 
     * Example ( With Debouncing )
     * Input --> Iphone pro max - 14 Character
     *       --> Assumed User - 1000000 i.e 10 Lakh user
     *       --> After Debouncing 3 API Calls
     *       --> 3 * 10 lakh => 3000000 i.e 13 Lakh API Calls 
     */

    // Dry Run
    /**
     * key - i
     *  Render the Components 
     *  Calls Use Effect 
     *  Make an API Calls after 200 ms
     * 
     * key - ip
     *  destory the old component by calling return method of use effect
     *  Render the Components 
     *  Call Use effect()
     *  Make an API Calls after 200 ms
     * 
     */

    /**
     * 
     * When we change a State of UseState Variable,
     * as soon as state varible changes, it will quicly trigger the reconsilation process and react trys to render it once again
     * when it was destroying the function it will call useEffect return method i.e component unmount method
     * 
     */