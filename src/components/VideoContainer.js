import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import VideoCards, { Adcard } from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [video, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  });

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className='flex flex-wrap'>
      {video[0] && <Adcard info={video[0]} />}
      {video.map((vid) => (
        <Link to={"/watch?v=" + vid.id}>
          <VideoCards key={vid.id} info={vid} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
