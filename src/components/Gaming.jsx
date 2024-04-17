import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import VideoComponent from "./VideoComponent";
import styled from "styled-components";
import "../styles/Gaming.css";
import { gamingData } from "../util/gamingData";
import VideoGamingComponent from "./VideoGamingComponent";
import { v4 as uuidv4 } from "uuid";
function Gaming() {
  return (
    <div>
      <Header />

      <div className="app__page">
        <Sidebar />
        <div className="gaming_page">
          <div className="">
            <div className="container_gaming">
              <div className="container_child_gaming">
                <img
                  src="https://www.youtube.com/img/trending/avatar/trending_avatar.png"
                  alt=""
                />
                <h2>Trending</h2>
              </div>

              <div className="list_container">
                <ul>
                  <li>Now</li>
                  <li>Music</li>
                  <MyLink to={"/feed/gaming"}>
                    <li>Gaming</li>
                  </MyLink>

                  <li>Movies</li>
                </ul>
              </div>
            </div>
            {/**  container videos*/}

            <div
              className="container2"
              style={{ width: "100%", background: "#0F0F0F" }}
            >
              {gamingData.map((gaming_Video, index) => {
                return (
                  <div className="gaming__video" key={index}>
                    <div className="gamingVideos__videos">
                      <VideoGamingComponent
                        id={gaming_Video.id}
                        key={gaming_Video.id}
                        title={gaming_Video.title}
                        channelName={gaming_Video.channelName}
                        views={gaming_Video.views}
                        image={gaming_Video.image}
                        description={gaming_Video.description}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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

export default Gaming;
