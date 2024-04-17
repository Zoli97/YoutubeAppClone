import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import VideoNowRow from "./VideoNowRow";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../styles/Now.css";

function Now() {
  const [videoNow, setVideoNow] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=RO&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.items);
        videoNowItems(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  async function videoNowItems(videoItems) {
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
    setVideoNow(newVideoCards);
  }

  return (
    <div>
      <Header />
      <div className="app_page">
        <Sidebar />
        <div className="BigContainer">
          <div className="containerChild">
            <img
              src="https://www.youtube.com/img/trending/avatar/trending_avatar.png"
              alt=""
            />
            <h2>Trending</h2>
          </div>

          <div className="containerChild2">
            <ul>
              <li>Now</li>
              <li>Music</li>
              <MyLink to={"/feed/gaming"}>
                <li>Gaming</li>
              </MyLink>
              <li>Movies</li>
            </ul>
          </div>
          {videoNow.map((item) => {
            return (
              <VideoNowRow
                key={item.videoId}
                title={item.title}
                channel={item.channelName}
                views={item.views}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const MyLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  padding: 1.5em;
  color: rgb(175, 171, 171);
  cursor: pointer;

  :hover {
    color: white;
  }
`;

export default Now;
