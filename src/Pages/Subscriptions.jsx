import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import VideoComponent from "../components/VideoComponent";

function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);

  /* useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=RO&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.items);
        getSubscriptionsVideos(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getSubscriptionsVideos = async (subscribtionVideos) => {
    let newSubscriptionVideos = [];
    for (const subscriptions of subscribtionVideos) {
      const videoId = subscriptions.id;
      const snippet = subscriptions.snippet;
      const channelId = snippet.channelId;
      const response = await axios.get(
        ` https://www.googleapis.com/youtube/v3/subscriptions&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&id=${channelId}&maxResults=20`
      );
      const channelImage =
        response.data.items[0].snippet.thumbnails.default.url;

      const title = snippet.title;
      const image = snippet.thumbnails.medium.url;

      newSubscriptionVideos.push({
        videoId,
        snippet,
        channelId,
        title,
        image,
        channelImage,
      });
    }
    setSubscriptions(newSubscriptionVideos);
  };
  */
  return (
    <div>
      <h1>Subscriptions</h1>
      <div className="recommendeVideos__videos">
        {subscriptions.map((subs) => {
          return (
            <VideoComponent
              key={subs.videoId}
              title={subs.title}
              channel={subs.channelName}
              views={subs.views}
              image={subs.image}
              channelImage={subs.channelImage}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Subscriptions;
