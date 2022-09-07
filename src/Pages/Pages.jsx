import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import SearchedVideo from "./SearchedVideo";
import Home from "./Home";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:search" element={<SearchedVideo />} />
      </Routes>
    </div>
  );
}

export default Pages;
