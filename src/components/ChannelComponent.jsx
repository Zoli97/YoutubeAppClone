import React from "react";
import "../styles/ChannelComponent.css";
import { Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ChannelComponent({
  image,
  verified,
  channel,
  subscribsNumber,
  noOfVideos,
  descirption,
}) {
  return (
    <div className="channelComponent">
      <Avatar className="channel_logo" alt={channel} src={image} />
      <div className="channel_text">
        <h4 className="channel_name">
          {channel}
          {verified && (
            <span>
              <CheckCircleIcon className="checked" />
            </span>
          )}
        </h4>
        <p>
          {subscribsNumber} &#x2022; {noOfVideos} videos
        </p>

        <p className="description">{descirption}</p>
      </div>
    </div>
  );
}

export default ChannelComponent;
