// import React, { useState, useEffect } from "react";
// import "../styles/VideoRow.css";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { useParams } from "react-router-dom";
// function VideoRow({
//   views,
//   verified,
//   subscribers,
//   description,
//   timestamp,
//   channel,
//   title,
//   image,
//   channelImage,
// }) {
//   const [searchVideo, setSearchVideo] = useState([]);
//   let params = useParams();
//   /// take a query take it from params and update every time i searched

//   useEffect(() => {
//     getSearchVideo(params.search);
//   }, [params.search]);
//   const getSearchVideo = async (name) => {
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=20&q=${name}&type=video&maxResults=20`
//       );
//       const videoData = await response.json();
//       setSearchVideo(videoData);
//       console.log(videoData);
//     } catch (error) {
//       console.log("Error: " + error);
//     }
//   };
//   return (
//     <div className="videoRow">
//       {searchVideo.map((video) => {})}
//       <img src={image} alt="" />
//       <div className="videoRow__text">
//         <h3 className="title">{title}</h3>
//         <p className="videoRow__headline">
//           {channel} &#x2022; {subscribers} Subscribers {views} views &#x2022;{" "}
//           {timestamp}
//         </p>

//         <div className="videoComponent__info2">
//           <img src={channelImage} alt="" className="avatar2" />
//           <div className="video__text">
//             <p className="channelInfo">
//               {channel}{" "}
//               <span>{verified && <CheckCircleIcon className="checked" />}</span>
//             </p>
//           </div>
//         </div>

//         <p className="description">{description}</p>
//       </div>
//     </div>
//   );
// }

// export default VideoRow;
