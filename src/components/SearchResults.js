import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import VideoCard, { AdVideoCard } from "./VideoCard";

const SearchResults = () => {

  const [videos, setVideos] = useState([]);
  const [search_param] = useSearchParams();

  const searchValue = search_param.get(
    "search_query"
  );

  useEffect(() => {
    fetchVideos();
  }, [searchValue]);

  const fetchVideos = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_SEARCH_BY_KEYWORD_API}${searchValue}`
    );
    const res = await data.json();
    setVideos(res.items);
    console.log(res);
  };

  return (
    <div className="col-span-11">
      <h1 className="font-bold m-5 p-5 text-3xl"> Search Results </h1>
      <div>
        <div className="flex flex-wrap m-2 p-2">
          {/* {videos[0] && <AdVideoCard data={videos[0]} />}
          
           */}
          {videos?.length > 0 &&
            videos.map((video) => {
              return (
                  <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
                  <div className='p-2 m-2 w-72 shadow-xl'>
                  <img className='rounded-lg' alt='Video-thumbnail' src={video.snippet.thumbnails?.medium?.url} />
                      <ul className='p-2'>
                          <li className='font-bold '> {video.snippet.title.substr(0,50) + "..."}  </li>
                          <li className='my-1'> {video.snippet.description}  </li>
                          <li className='my-1'> {video.snippet.channelTitle}  </li>
                      </ul>
                  </div>
                  </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
