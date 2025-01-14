import React from "react";

const VideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='p-2 m-2 w-72'>
      <img
        className='rounded-lg shadow-sm'
        alt='img'
        src={thumbnails.medium.url}
      />
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const Adcard = ({ info }) => {
  return (
    <div className='p-1 m-1 border border-red-500'>
      <VideoCards info={info} />
    </div>
  );
};

export default VideoCards;
