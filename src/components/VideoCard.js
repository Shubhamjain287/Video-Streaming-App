import React from 'react'

const VideoCard = ({data}) => {

  const { snippet , statistics} = data;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-64 shadow-xl'>
        <img className='rounded-lg' alt='Video-thumbnail' src={thumbnails?.medium?.url} />
        <ul className='p-2'>
            <li className='font-bold '> {title}  </li>
            <li className='my-1'> {channelTitle}  </li>
            <li> {statistics.viewCount} Views  </li>
        </ul>
    </div>
  )
}

// Higher Order Component
/**
 * A higher-order component is a function that takes a component and returns a new component.
 * A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
 */

const AdVideoCard = ({data}) => {
    return (
        <div className='border border-red-600 rounded-xl p-1 hover:bg-gray-500'>
            <h4 className='text-center font-bold'> Advertisment </h4>
            <VideoCard data={data} />  
        </div>
    );
}

export default VideoCard;
export { AdVideoCard };