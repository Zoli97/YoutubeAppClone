import React from "react";
import "../styles/ChannelComponent.css";
import Moment from "react-moment";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function VideoSearchComponent({
  videoId,
  image,
  channelImage,
  title,
  channelTitle,
  description,
  timestamp,
  verified,
}) {
  return (
    <div className="videoRow" key={videoId}>
      <img src={image} alt="" />
      <div className="videoRow__text">
        <h3 className="title">{title}</h3>
        <p className="videoRow__headline">
          {} views &#x2022; <Moment fromNow>{timestamp}</Moment>
        </p>

        <div className="videoComponent__info2">
          <img src={channelImage} alt="" className="avatar2" />
          <div className="video__text">
            <p className="channelInfo">
              {channelTitle}{" "}
              <span>{verified && <CheckCircleIcon className="checked" />}</span>
            </p>
          </div>
        </div>

        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default VideoSearchComponent;
