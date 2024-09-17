import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'; // Corrected path
import { CiFacebook } from 'react-icons/ci';
import { IoLogoTiktok, IoLogoYoutube } from 'react-icons/io5';
import { FaInstagram, FaSearch } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FiUser } from 'react-icons/fi';
import NavbarList from './NavbarList';
import HumberMenu from './HumberMenu';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="main-navbar">
      <div className="navbar">
        <div className="top-menu">
          <div className="social-menu">
            <div className="icon-container icons-color tiktok">
              <IoLogoTiktok className="icon-size" />
            </div>
            <div className="icon-container icons-color instagram">
              <FaInstagram className="icon-size" />
            </div>
            <div className="icon-container icons-color twitter">
              <FaXTwitter className="icon-size" />
            </div>
            <div className="icon-container icons-color facebook">
              <CiFacebook className="icon-size" />
            </div>
            <div className="icon-container icons-color youtube">
              <IoLogoYoutube className="icon-size" />
            </div>
          </div>
          <div className="line"></div>
          <div className="btn-kid color-white">KIDS</div>
        </div>
        
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" width={190} height={100} />
          </Link>
        </div>
        
        <div className="search-icons">
          <div className="search-text">
            <FaSearch className="icons-color" />
            <span className="color-white text-size">Search</span>
          </div>
          <div className="login">
            <FiUser className="icons-color" />
            <span className="color-white text-size">Login</span>
          </div>
        </div>
      </div>
      
      <NavbarList />
      
      <hr className="line-edit" />
      
      <div className="navbar-text color-white">
        <p>STAR WARS: THE ACOLYTE NOW STREAMING ON DISNEY+</p>
        <p>THE ACOLYTE | DISNEY+</p>
      </div>
      
      <HumberMenu className="humber_whole" />
    </div>
  );
};

export default Navbar;
