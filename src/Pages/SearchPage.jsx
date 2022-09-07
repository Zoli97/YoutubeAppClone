import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ChannelComponent from "../components/ChannelComponent";
import VideoRow from "../components/VideoRow";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import "../styles/SearchPage.css";
import "../styles/ChannelComponent.css";
function SearchPage() {
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

          <hr />

          {/**channel row  takes some props*/}
          <ChannelComponent
            image="https://i.ytimg.com/vi/2zssIFN2mso/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLABk3e86Ls3B_U-VhdZikyme88q5Q"
            channel="VICE News"
            verified
            subscribsNumber="16M subscribers"
            noOfVideos="3713"
            descirption="Enlightening commentary, authoritative advice, and unique stories you won't find anywhere else. Our immersive and ground-breaking storytelling has changed the way people think about culture, crime, art, parties, fashion, protest, the internet and..."
          />

          <hr />

          <VideoRow
            title="The Central African Republic Is Enlisting Russians in Its War Against Rebels"
            image="https://i.ytimg.com/vi/oK63yqJYkGg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD2KsROVHkdWavqrG-cNpG6kg4avA"
            channel="VICE News"
            verified
            views="1.2M "
            timestamp="1 year ago"
            channelImage="https://yt3.ggpht.com/7Rovb42ic91FtDS7hu-xfJVGtDLJXpkurMaKGisFKNRq0seH_qZ74ihhB5YRfEao0I5xiZnu=s68-c-k-c0x00ffffff-no-rj"
            description="A new rebel movement in the Central African Republic is pushing to take the capital and has displaced over 400,000 people along..."
          />

          <VideoRow
            title="Inside the US-Iran Shadow War for Control of the Middle East"
            channel="VICE News"
            verified
            views="4M Views"
            timestamp="1 years ago"
            image="https://i.ytimg.com/vi/xrfDDrPOtlo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-qnUPs_dlJebkTG0tWvCbAdbcRQ"
            channelImage="https://yt3.ggpht.com/7Rovb42ic91FtDS7hu-xfJVGtDLJXpkurMaKGisFKNRq0seH_qZ74ihhB5YRfEao0I5xiZnu=s68-c-k-c0x00ffffff-no-rj"
            description="Back in March we sent a crew, including VICE Founder Suroosh Alvi, to Iran. We wanted to do a story about a rash of ..."
          />

          <VideoRow
            title=" Ambushed in South Sudan (Full Length)"
            channel="VICE News"
            verified
            views="6.6M Views"
            timestamp="8 years ago"
            image="https://i.ytimg.com/vi/bmZBgZfGbhM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoieuH3fN-OZox1WJyetYYqL4zKA"
            channelImage="https://yt3.ggpht.com/7Rovb42ic91FtDS7hu-xfJVGtDLJXpkurMaKGisFKNRq0seH_qZ74ihhB5YRfEao0I5xiZnu=s68-c-k-c0x00ffffff-no-rj"
            description="The war in South Sudan began in murky circumstances in mid-December, when tribal factions within the country's army, the SPLA, ..."
          />

          <VideoRow
            title="The Next Phase Of Russia’s War In Ukraine"
            channel="VICE News"
            verified
            views="3.5m Views"
            timestamp="3 months ago"
            image="https://i.ytimg.com/vi/IvNc9yDox8U/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLClhVf2JEdZe17IxWPvpIaqM95Eng"
            channelImage="https://yt3.ggpht.com/7Rovb42ic91FtDS7hu-xfJVGtDLJXpkurMaKGisFKNRq0seH_qZ74ihhB5YRfEao0I5xiZnu=s68-c-k-c0x00ffffff-no-rj"
            description="Note: Warning for Graphic Content The war in Ukraine has entered a new stage. As villagers around Kiyv emerge from a ..."
          />

          <VideoRow
            title="Inside the US War On Terror in Somalia"
            channel="VICE News"
            verified
            views="5.9M Views"
            timestamp="1 year ago"
            image="https://i.ytimg.com/vi/6DD9-W9z62o/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDv4wPLRaky4-9pNCcpN96IUboqtA"
            channelImage="https://yt3.ggpht.com/7Rovb42ic91FtDS7hu-xfJVGtDLJXpkurMaKGisFKNRq0seH_qZ74ihhB5YRfEao0I5xiZnu=s68-c-k-c0x00ffffff-no-rj"
            description="Fifteen years after the creation of al-Shabaab in Somalia, terror still reigns and the reality on the ground just shifted more in their ..."
          />

          <VideoRow
            title="How Coups Are Derailing the US War on Terror in Africa"
            channel="VICE News"
            verified
            views="1.2M Views"
            timestamp="4 months ago"
            image="https://i.ytimg.com/vi/mfuQYrqXxbI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9t3QioMmpji8sEm19LXnwH1x1lg"
            channelImage="https://yt3.ggpht.com/7Rovb42ic91FtDS7hu-xfJVGtDLJXpkurMaKGisFKNRq0seH_qZ74ihhB5YRfEao0I5xiZnu=s68-c-k-c0x00ffffff-no-rj"
            description="Fifteen years after the creation of al-Shabaab in Somalia, terror still reigns and the reality on the ground just shifted more in their ..."
          />

          <hr />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
