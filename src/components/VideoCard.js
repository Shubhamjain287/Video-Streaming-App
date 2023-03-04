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

export default VideoCard;