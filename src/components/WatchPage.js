import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeSideBar } from '../utils/reducers/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSideBar())
  }, []);
  
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <div className='col-span-11 flex flex-col w-full'>
        <div className='m-8 flex flex-row'>
            <div>
              <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className='w-full'>
              <LiveChat />
            </div>
        </div>
        <div> 
          <CommentsContainer />
        </div>
    </div>
  )
}

export default WatchPage;