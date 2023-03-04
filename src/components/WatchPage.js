import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeSideBar } from '../utils/reducers/appSlice';

const WatchPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideBar())
  }, []);
  
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div className='col-span-11'>
        <div className='m-8'>
            <iframe width="1100" height="500" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default WatchPage;