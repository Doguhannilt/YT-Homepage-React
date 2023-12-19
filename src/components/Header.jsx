import React from 'react';
import { useState } from 'react';
import '../styles/header_styles.css';
import hamburgerMenuIcon from '../images/header-images/hamburger-menu-icon.webp';
import youtubeMenuIcon from '../images/header-images/youtube.png';
import youtubeLogo from '../images/header-images/youtube-logo.png';
import micPng from "../images/header-images/mic.png";
import createIcon from "../images/header-images/create-icon.png";
import bellIcon from "../images/header-images/bell.png";
import channelProfile from  "../images/header-images/channels_profile.jpg";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <div onClick={handleToggle}>
        <img class = "profile-picture profile-picture-settings" src={channelProfile} alt="Channel Profile" />
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item">Profile</div>
          <div className="dropdown-item">Contents</div>
          <div className="dropdown-item">Sign out</div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="left-bar">
        <img className="hamburger_menu" src={hamburgerMenuIcon} alt="Hamburger Menu" />
        <img className="youtube_png" src={youtubeMenuIcon} />
        <img className="youtube_icon" src={youtubeLogo} />
      </div>

      <div className="middle-bar">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
        />
        <img className="mic_icon" src={micPng} />
      </div>

      <div className="right-bar">
        <img className="create_icon" src={createIcon} />
        <img className="bell_icon" src={bellIcon} />
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
