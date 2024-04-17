import React, { useState, useEffect } from "react";
import "../styles/RecommendedVideo.css";
import axios from "axios";
import VideoComponent from "./VideoComponent";
import { v4 as uuidv4 } from "uuid";

function RecommendedVideo() {
  const [recommendedVideo, setrecommendedVideo] = useState([]);
  //const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=RO&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.items);
        createVideoItems(response.data.items);
      })
      .catch((error) => {
        console.log(error);
        // setIsError(true);
      });
  }, []);

  //extract info for video taht i need and finally i store the clean data in the components state.
  //i use usestate for setting video items to store whether the components is still accessing and cleaning the response.

  async function createVideoItems(videoItems) {
    let newVideoCards = [];
    for (const video of videoItems) {
      const videoId = video.id;
      const snippet = video.snippet;
      const channelId = snippet.channelId;
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      const channelImage =
        response.data.items[0].snippet.thumbnails.default.url;

      const title = snippet.title;
      const image = snippet.thumbnails.medium.url;
      // const views = video.statistics.viewCount;
      // const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
      const channelName = snippet.channelTitle;

      newVideoCards.push({
        videoId,
        image,
        title,
        channelName,
        channelImage,
      });
    }
    setrecommendedVideo(newVideoCards);
  }

  return (
    <div className="recommended__video">
      <h2 className="title">Recommended</h2>
      <div className="recommendVideos__videos">
        {recommendedVideo.map((video) => {
          return (
            <VideoComponent
              id={video.videoId}
              key={uuidv4()}
              title={video.title}
              channel={video.channelName}
              views={video.views}
              image={video.image}
              channelImage={video.channelImage}
            />
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default RecommendedVideo;
