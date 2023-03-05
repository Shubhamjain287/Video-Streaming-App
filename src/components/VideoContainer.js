import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoCard, { AdVideoCard } from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);
  
  const fetchVideos = async () => {
      const data = await fetch(process.env.REACT_APP_YOUTUBE_API_URL);
      const res = await data.json();
      // console.log(res.items);
      setVideos(res.items);
  }

  return (
    <div className='flex flex-wrap m-2 p-2'>
        {
          (videos[0]) && <AdVideoCard data={videos[0]} />
        }
       {
        (videos?.length > 0) && 
         videos.map((video) => {
          return (
            <Link key={video.id} to={`/watch?v=${video.id}`} >
              <VideoCard data={video} />
            </Link>
          )
         })
       }
    </div>
  )
}

export default VideoContainer;