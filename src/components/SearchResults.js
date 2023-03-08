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
    <div className="mx-28 col-span-11">
      <h1 className="font-bold m-5 p-5 text-3xl"> Search Results </h1>
      <div>
        <div className="flex flex-wrap flex-col m-2 p-2">
          {/* {videos[0] && <AdVideoCard data={videos[0]} />}
          
           */}
          {videos?.length > 0 &&
            videos.map((video) => {
              return (
                  <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
                  <div className='flex flex-row p-2 m-2 w-full shadow-xl'>
                  <img className='rounded-2xl w-[320px] h-[202px]' alt='Video-thumbnail' src={video.snippet.thumbnails?.medium?.url} />
                      <ul className='px-4'>
                          <li className='font-bold text-xl'> {video.snippet.title}  </li>
                          <li className='my-1 text-sm font-semibold'> {video.snippet.channelTitle}  </li>
                          <li className='my-1 text-base'> {video.snippet.description}  </li>
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
