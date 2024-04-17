import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "../styles/Trending.css";
import styled from "styled-components";

function Trending() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="containerChild">
          <img
            src="https://www.youtube.com/img/trending/avatar/trending_avatar.png"
            alt=""
          />
          <h2>Trending</h2>
        </div>

        <div className="containerChild2">
          <ul>
            <MyLink to={"/feed/now"}>
              <li>Now</li>
            </MyLink>
            <li>Music</li>
            <MyLink to={"/feed/gaming"}>
              <li>Gaming</li>
            </MyLink>

            <li>Movies</li>
          </ul>
        </div>
      </div>

      <div
        className="container2"
        style={{ width: "100%", background: "#0F0F0F" }}
      ></div>
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

export default Trending;
