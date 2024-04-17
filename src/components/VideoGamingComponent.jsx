import React from "react";
import "../styles/VideoGamingComponent.css";
function VideoGamingComponent({
  title,
  channelName,
  views,
  image,
  verified,
  description,
}) {
  return (
    <div>
      <img src={image} alt="" />
      <div className="videorow_text">
        <h3 className="title">{title}</h3>
        <p className="videoRow__headline">
          {channelName} {views} &#x2022;
        </p>

        <p className="description" style={{ paddingTop: "0.8em" }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default VideoGamingComponent;
