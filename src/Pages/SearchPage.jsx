import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoSearchComponent from "../components/VideoSearchComponent";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "../styles/SearchPage.css";
import "../styles/ChannelComponent.css";
import "../styles/VideoRow.css";
import { useParams } from "react-router-dom";

function SearchPage() {
  const [searchVideo, setSearchVideo] = useState([]);
  let params = useParams();

  /// take a query take it from params and update every time i searched
  useEffect(() => {
    getSearchVideo(params.search);
    createSearchVideo(params.search);
  }, [params.search]);

  const getSearchVideo = async (name) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=20&q=${name}&type=video,channel&maxResults=20`
      );
      const videoData = await response.json();
      setSearchVideo(videoData.items);
      createSearchVideo(videoData.items);
      console.log(videoData.items);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const createSearchVideo = async (searchVideos) => {
    let newVideoCards = [];

    for (const video of searchVideos) {
      const videoId = video.id;
      const snippet = video.snippet;
      const title = video.title;
      const channelId = video.channelId;
      const channelName = video.channelName;
      // const response2 = await fetch(
      //   `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      // );
      //const channelImage = response2.video.snippet.channelImage;
      //const timestamp = Moment(snippet.publishedAt, "YYYYMMDD").fromNow();
      const image = video.thumbnails.medium.url;
      newVideoCards.push({
        videoId,
        title,
        channelId,
        channelName,

        image,
      });
    }
    setSearchVideo(newVideoCards);
  };
  return (
    <div>
      <Header />
      <div className="app__page">
        <Sidebar />
        <div className="searchPage">
          <div className="searchPage__filter">
            <TuneOutlinedIcon
              className="filter_icon"
              style={{ color: "#807d7d" }}
            />
            <h2 className="title" style={{ color: "#807d7d" }}>
              FILTERS
            </h2>
          </div>

          {/**channel row  takes some props*/}
          {/* <ChannelComponent
            image="https://i.ytimg.com/vi/2zssIFN2mso/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABk3e86Ls3B_U-VhdZikyme88q5Q"
            channel="VICE News"
            verified
            subscribsNumber="16M subscribers"
            noOfVideos="3713"
            descirption="Enlightening commentary, authoritative advice, and unique stories you won't find anywhere else. Our immersive and ground-breaking storytelling has changed the way people think about culture, crime, art, parties, fashion, protest, the internet and..."
          /> */}

          <hr />
          {searchVideo?.map((video, index) => {
            return (
              <VideoSearchComponent
                videoId={video.videoId}
                key={index}
                title={video.snippet.title}
                image={video.snippet.thumbnails.medium.url}
                channelImage={video.snippet.thumbnails.default.url}
                channelTitle={video.snippet.channelTitle}
                description={video.snippet.description}
                timestamp={video.snippet.publishedAt}
                verified
              />
            );
          })}

          <hr />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
