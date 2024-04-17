import React, { useState, useEffect } from "react";
import { Link as Link2 } from "react-router-dom";
import axios from "axios";
import VideoComponent from "../components/VideoComponent";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/ExploreVideo.css";
import { Icon } from "react-icons-kit";
import { fire } from "react-icons-kit/icomoon/fire";
import { ic_audiotrack } from "react-icons-kit/md/ic_audiotrack";
import { ic_sentiment_satisfied_twotone } from "react-icons-kit/md/ic_sentiment_satisfied_twotone";
import { ic_star } from "react-icons-kit/md/ic_star";
import { Link } from "@mui/material";

function Explore() {
  const [exploreVideo, setExploreVideo] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=RO&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      )
      .then((response) => {
        console.log(response.data.items);
        createExploreVideoItems(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function createExploreVideoItems(exploreVideoItems) {
    let newVideoCards = [];
    for (const video of exploreVideoItems) {
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
      const channelName = snippet.channelTitle;

      newVideoCards.push({
        videoId,
        image,
        title,
        channelName,
        channelImage,
      });
    }
    setExploreVideo(newVideoCards);
  }
  return (
    <div>
      <Header />
      <div className="explore__video">
        <h2 className="title">Explore</h2>
        <div className="parent">
          <div className="grandparent">
            <Link2 to={"/feed/trending"}>
              <div className="box1">
                <div style={{ color: "#e01212" }}>
                  <Icon size={32} icon={fire} />
                </div>
                <h4>Trending</h4>
              </div>
            </Link2>
            <div className="box2">
              <div style={{ color: "#fbff02" }}>
                <Icon size={32} icon={ic_audiotrack} />
              </div>
              <h4>Music</h4>
            </div>
            <div className="box3">
              <div style={{ color: "#ffc400" }}>
                <Icon size={32} icon={ic_sentiment_satisfied_twotone} />
              </div>
              <h4>Gaming</h4>
            </div>
            <div className="box4">
              <div style={{ color: "#12b5e7" }}>
                <Icon size={32} icon={ic_star} />
              </div>
              <h4>Sports</h4>
            </div>
          </div>
        </div>
        <h3
          style={{ color: "white", marginBottom: "0.8em", paddingLeft: "1em" }}
        >
          Trending videos
        </h3>

        <div className="explore__videos">
          {exploreVideo.map((explVideo) => {
            return (
              <VideoComponent
                key={explVideo.videoId}
                title={explVideo.title}
                channel={explVideo.channelName}
                views={explVideo.views}
                image={explVideo.image}
                channelImage={explVideo.channelImage}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Explore;
