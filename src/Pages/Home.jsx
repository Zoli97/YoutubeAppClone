import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import RecommendedVideo from "../components/RecommendedVideo";
function Home() {
  return (
    <div>
      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideo />
      </div>
    </div>
  );
}

export default Home;
