import { Avatar } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./css/post.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import ReportIcon from '@mui/icons-material/Report';
const Post = () => {
  return (
    <div className="posts">
      <div className="post_header">
        <div className="post_headerLeft">
          <Avatar />
          <div className="post_profile_details">
            <h3>Pavan Mohinkar</h3>
            <p>We are learning react js</p>
          </div>
        </div>
        <MoreVertIcon />
      </div>
      <div className="post_body">
        <p>This is test post, we are
            tygvhvhv
        </p>
      </div>
      <div className="post_footer">
        <div className="post_footer_option">
             <ThumbUpIcon />
             <span>Like</span>
        </div>
        <div className="post_footer_option">
             <CommentIcon/>
             <span>Comment</span>
        </div>
        <div className="post_footer_option">
             <ShareIcon />
             <span>Share</span>
        </div>
        <div className="post_footer_option">
             <ReportIcon />
             <span>Report</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
