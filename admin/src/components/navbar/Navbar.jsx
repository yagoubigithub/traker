import "./Navbar.scss"

import React from 'react';

import { NotificationsNone, Language, Settings } from "@material-ui/icons";
const Navbar = () => {
  return   <div className="navbar">
      <div className="navbarWrapper">
        <div className="topLeft">
          <span className="logo">Wohance Tracker</span>
        </div>
     {/*    <div className="topRight">
          <div className="navbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="navbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div> */}
      </div>
    </div>;
};

export default Navbar;
