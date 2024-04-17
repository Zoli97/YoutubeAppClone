import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchedVideo from "./SearchedVideo";
import Subscriptions from "./Subscriptions";
import Explore from "./Explore";

import Trending from "../Pages/Trending";
import Gaming from "../components/Gaming";
import Now from "../components/Now";
import Home from "./Home";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/searched/:search" element={<SearchedVideo />} />
        <Route path="/feed/subscription" element={<Subscriptions />} />
        <Route path="/feed/explore" element={<Explore />} />
        <Route path="/feed/trending" element={<Trending />} />
        <Route path="/feed/gaming" element={<Gaming />} />
        <Route path="/feed/now" element={<Now />} />
      </Routes>
    </div>
  );
}

export default Pages;
