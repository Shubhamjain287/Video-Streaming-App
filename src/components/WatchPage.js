import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeSideBar } from '../utils/reducers/appSlice';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import SimilarVideos from './SimilarVideos';

const WatchPage = () => {

  const dispatch = useDispatch();

  const [video,setVideo] = useState();

  useEffect(() => {
    dispatch(closeSideBar())
    fetchVideoDetails();
  }, []);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const fetchVideoDetails = async () => {
    const data = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
    const res = await data.json();
    setVideo(res.items[0].snippet);
  }
  

  return (
    <div className='col-span-11 flex flex-col'>
        <div className='m-4 flex flex-row overflow-auto'>
            <div className='flex flex-col'>
              <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              <div className='my-4 border border-black py-4 px-2 rounded-xl bg-gray-300'>
                <ul>
                  <li className='font-bold text-xl'> {video?.title} </li>
                  <li className=''> {video?.channelTitle} </li>
                  <li className='font-bold mt-4'> Description </li>
                  <li className=''> {video?.description.substr(0,200) + "..."} </li>
                </ul>
              </div>
              <div className=''> 
                <CommentsContainer />
              </div>
            </div>
            <div className='w-full'>
               {/* Live Chat */}
              {/* <LiveChat /> */}
              <SimilarVideos videoId={videoId} />
            </div>
        </div>
    </div>
  )
}

export default WatchPage;