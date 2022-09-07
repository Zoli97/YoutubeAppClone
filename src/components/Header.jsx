import React, { useState } from "react";
import "../styles/Header.css";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ytIcon from "../assets/YouTube_logo-rmb.png";
import { Link } from "react-router-dom";

function Header() {
  //always empty, constantly remmaping it back to the empty
  const [myInputSearch, setMyInputSearch] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon style={{ color: "white" }} />

        <Link to="/">
          <img className="header_logo" src={ytIcon} alt="yt_img" />
        </Link>
      </div>

      <div className="header__input">
        <input
          type="text"
          placeholder="Search"
          value={myInputSearch}
          onChange={(e) => setMyInputSearch(e.target.value)}
        />
        <Link to={`/search/${myInputSearch}`}>
          <SearchOutlinedIcon
            className="header__inputButton"
            style={{ cursor: "pointer" }}
          />
        </Link>
      </div>

      <div className="header__right__icons">
        <VideoCallOutlinedIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <AccountCircleIcon className="header__icon" />
      </div>
    </div>
  );
}

export default Header;
