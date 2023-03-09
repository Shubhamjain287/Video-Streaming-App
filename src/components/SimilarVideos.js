import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SimilarVideos = ({videoId}) => {

  const [similarVideos, setSimilarVideos] = useState([]);

  useEffect(()=>{
    fetchSimilarVideos();
  },[]);

  const fetchSimilarVideos = async () => {
    try {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&maxResults=50&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        const res = await data.json();
        console.log(res);
        setSimilarVideos(res.items);
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className='px-2 '>
        <div className='font-bold text-xl mx-4'>SimilarVideos</div>
        {
            similarVideos && similarVideos.map((video) => {
                return (
                <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
                  <div className='flex flex-row p-2 w-full shadow-xl'>
                  <img className='rounded-xl w-[200px] h-[100px]' alt='Video-thumbnail' src={video.snippet.thumbnails?.medium?.url} />
                      <ul className='px-4'>
                          <li className='font-bold text-sm my-2'> {video.snippet.title}  </li>
                          <li className='my-2 text-sm font-semibold'> {video.snippet.channelTitle}  </li>
                      </ul>
                  </div>
                  </Link>
                )
            })
        }
    </div>
  )
}

export default SimilarVideos;