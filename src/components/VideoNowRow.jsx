import React from "react";
import "../styles/Now.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function VideoNowRow({
  views,
  verified,
  subscribers,
  description,
  timestamp,
  channel,
  title,
  image,
  channelImage,
}) {
  return (
    <div className="videoRow">
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3 className="title">{title}</h3>
        <p className="videoRow__headline">
          {channel} &#x2022; {subscribers} Subscribers {views} views &#x2022;{" "}
          {timestamp}
        </p>
        <div className="videoComponent__info2">
          <div className="video__text">
            <p className="channelInfo">
              {channel}{" "}
              <span>{verified && <CheckCircleIcon className="checked" />}</span>
            </p>
          </div>
        </div>

        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default VideoNowRow;
