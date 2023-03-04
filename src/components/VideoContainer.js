import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);
  
  const fetchVideos = async () => {
      const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyB4imQd6FOoA9MpsE25hVxwgY_KLungYGQ`);
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