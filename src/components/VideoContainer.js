import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);
  
  const fetchVideos = async () => {
      const data = await fetch(process.env.REACT_APP_YOUTUBE_API_URLS);
      const res = await data.json();
      console.log(res.items);
      setVideos(res.items);
  }

  return (
    <div className='flex flex-wrap m-2 p-2'>
       {
        (videos?.length > 0) && 
         videos.map((video) => {
          return (
            <VideoCard data={video} />
          )
         })
       }
    </div>
  )
}

export default VideoContainer;