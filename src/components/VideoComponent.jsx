import React from "react";
import "../styles/VideoComponent.css";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";

function VideoComponent({
  image,
  title,
  channel,
  views,
  timestamp,
  channelImage,
}) {
  return (
    <div className="videoComponent">
      <img src={image} alt={channel} className="videoComponent__thumbnail" />

      <div className="videoComponent__info">
        <img src={channelImage} alt={channelImage} className="avatar2" />
        <div className="video__text">
          <h4>{title}</h4>
          <p className="channel">{channel}</p>
          <p className="views">
            {views} &#x2022; {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoComponent;
