import React, { useState } from "react";
import "../styles/Header.css";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ytIcon from "../assets/YouTube_logo-rmb.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import DropdownListItems from "./DropdownListItems";
import "../styles/Tooltip.css";
import Tooltip from "./Tooltip";

function Header() {
  //always empty, constantly remmaping it back to the empty
  const [myInputSearch, setMyInputSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  //submit the form and dont refresh the page
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + myInputSearch);
  };

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon style={{ color: "white" }} />

        <Link to="/">
          <img className="header_logo" src={ytIcon} alt="yt_img" />
        </Link>
      </div>

      <div className="header_parent_i">
        <form action="" onSubmit={submitHandler} className="header__input">
          <input
            type="text"
            placeholder="Search"
            value={myInputSearch}
            onChange={(e) => setMyInputSearch(e.target.value)}
          />

          <Link to={`/searched/${myInputSearch}`}>
            <SearchOutlinedIcon
              className="header__inputButton"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </form>
      </div>

      <div className="header__right__icons">
        <Tooltip content="Create" direction="bottom">
          <div className="Tooltip-Wrapper ">
            <VideoCallOutlinedIcon className="header__icon" />
          </div>
        </Tooltip>
        <Tooltip content="Notify" direction="bottom">
          <div className="Tooltip-Wrapper">
            <NotificationsIcon className="header__icon" />
          </div>
        </Tooltip>

        <AppsIcon className="header__icon" />

        <AccountCircleOutlinedIcon
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />

        <div className={`dropdown-menu ${isOpen ? "active" : "inactive"}`}>
          <DropdownListItems />
        </div>
      </div>
    </div>
  );
}

const NavigationWrapper = styled.div`
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0px 20px 40px rgba(31, 47, 71, 0.25),
    0px 1px 5px rgba(0, 0, 0, 0.1), inset 0 0 0 0.5px rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  padding: 20px 20px;
`;

export default Header;
