import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import PhotoIcon from "@mui/icons-material/Photo";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ArticleIcon from "@mui/icons-material/Article";
import "./css/feed.css";
import Post from "./Post";

const Feed = () => {
  // const[posts,setPost]=useState([])
  const [input, setInput] = useState();
  const submitPost = (e) => {
    e.preventDefault();
    // Extra part firebase//----------------->
    db.collection("posts").add({
      name: "Pavan Mohinkar",
      description: "this is test",
      message: input,
      photoURL: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_input">
        <div className="feed_form">
          <Avatar />
          <form onSubmit={submitPost}>
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}/>
            
            <input type="submit" />
          </form>
        </div>

        <div className="feed_options">
          <div className="option">
            <PhotoIcon style={{ color: "#70b5f9" }} />
            <span>Photo</span>
          </div>
          <div className="option">
            <YouTubeIcon style={{ color: "#7fc15e" }} />
            <span>Video</span>
          </div>
          <div className="option">
            <BusinessCenterIcon style={{ color: "#e7a33e" }} />
            <span>Job</span>
          </div>
          <div className="option">
            <ArticleIcon style={{ color: "#fc9295" }} />
            <span>Write article</span>
          </div>
        </div>
      </div>
      {/* <Post /> */}
      <Post
        name="Pavan Mohinkar"
        description="This test"
        message="we are learning"
        photoURL="https://tse2.mm.bing.net/th?id=OIP.8Cl81-tzomDnq5QyPhGyVgHaD4&pid=Api&P=0&h=180"
      />
    </div>
  );
};

export default Feed;
