import React from "react";
import "./css/sidebar.css";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_profile">
        <img src="https://media.licdn.com/dms/image/D5616AQEtomQYxO16cQ/profile-displaybackgroundimage-shrink_200_800/0/1687330807564?e=1694044800&v=beta&t=4P6-qmknzFiMWudQD5LEScchKPGmvLDPUd3OX8V8rsc" />
        <div className="profile_details">
          <Avatar />
          <h4>Pavan Mohinkar</h4>
          <p>Frontend Developer</p>
        </div>
        <div className="profile_stats">
          <span>Who viewed your profile</span>
          <span className="stat_number">20</span>
        </div>
        <div className="profile_stats">
          <span>
            Connection
            <br />
            <b>Grow Your Natwork</b>
          </span>
          <span className="stat_number">150</span>
        </div>
      </div>
      <div className="sidebar_recent">
        <p>Recent</p>
        <p className="hash">#<span>  branding</span></p>
        <p className="hash">#<span>  marketing</span></p>
        <p className="hash">#<span>  webdevelopment</span></p>
        <p className="hash">#<span>  programming</span></p>
        <p className="hash">#<span>  reactjs</span></p>
        <p className="hash">#<span>  javaScrpit</span></p>
      </div>
    </div>
  );
};

export default Sidebar;
