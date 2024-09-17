import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <p className='color-white'>More From Star Wars:</p>
      <div className='footer-menu'>
        <div className='social-menu'>
          <a href="https://www.tiktok.com" className='tiktok icons-color'>
            <IoLogoTiktok className='icon-size' />
          </a>
          <a href="https://www.instagram.com" className='instagram icons-color'>
            <FaInstagram className='icon-size' />
          </a>
          <a href="https://twitter.com" className='facebook icons-color'>
            <FaXTwitter className='icon-size' />
          </a>
          <a href="https://www.facebook.com" className='facebook icons-color'>
            <CiFacebook className='icon-size' />
          </a>
          <a href="https://www.youtube.com" className='facebook icons-color'>
            <IoLogoYoutube className='icon-size' />
          </a>
        </div>
        <div className='line'></div>
        <div className='btn-kid color-white'>KIDS</div>
      </div>

      <div>
        <p className='color-white'>TM & Lucasfilm Ltd. All Rights Reserved</p>

        <div className='last_link_1'>
          <Link to="/terms-of-use">Terms of Use</Link><hr />
          <Link to="/additional-content-information">Additional Content Information</Link><hr />
          <Link to="/privacy-policy">Privacy Policy</Link><hr />
          <Link to="/childrens-online-privacy-policy">Children's Online Privacy Policy</Link><hr />
          <Link to="/your-us-state-privacy-rights">Your US State Privacy Rights</Link><hr />
        </div>
        <div className='last_link'>
          <Link to="/shopdisney">Star Wars at shopDisney</Link><hr />
          <Link to="/helpdesk">Star Wars Helpdesk</Link><hr />
          <Link to="/interest-based-ads">Interest-Based Ads</Link><hr />
        </div>
      </div>
    </div>
  );
}

export default Footer;
