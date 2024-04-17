import React from "react";
import "../styles/Sidebar.css";
import SidebarItem from "../components/SidebarItem";
import HomeIcon from "@mui/icons-material/Home";
import Home from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import QueueMusicOutlinedIcon from "@mui/icons-material/QueueMusicOutlined";
import { Link } from "react-router-dom";

function Sidebar() {
  const titleHome = "Home";
  const titleExplore = "Explore";
  const titleShorts = "Shorts";
  const titleSubscription = "Subscriptions";
  const titleVideoLibrary = "Library";
  const titleHistory = "History";
  const titleYourVideos = "Your Videos";
  const titleLater = "Watch later";
  const titleLikeVIdeo = "Like videos";
  const titleCercleMusic = "Cercle music";

  return (
    <div className="sidebar">
      <SidebarItem selected Icon={Home} title={titleHome} />
      <Link to={"/feed/explore"}>
        <SidebarItem Icon={ExploreOutlinedIcon} title={titleExplore} />
      </Link>
      <SidebarItem Icon={WhatshotOutlinedIcon} title={titleShorts} />
      <Link to={"/feed/subscription"}>
        <SidebarItem
          Icon={SubscriptionsOutlinedIcon}
          title={titleSubscription}
        />
      </Link>
      <hr />
      <SidebarItem Icon={VideoLibraryOutlinedIcon} title={titleVideoLibrary} />
      <SidebarItem Icon={HistoryOutlinedIcon} title={titleHistory} />
      <SidebarItem Icon={SmartDisplayOutlinedIcon} title={titleYourVideos} />
      <SidebarItem Icon={WatchLaterOutlinedIcon} title={titleLater} />
      <SidebarItem Icon={ThumbUpOutlinedIcon} title={titleLikeVIdeo} />
      <SidebarItem Icon={QueueMusicOutlinedIcon} title={titleCercleMusic} />
      <hr />
    </div>
  );
}

export default Sidebar;
