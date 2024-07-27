import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
          <p className='color-white'>More From Star Wars:</p>
        <div className='footer-menu'>
      <div className='social-menu'>
        <div className='tiktok icons-color '><IoLogoTiktok className='icon-size' /></div>
        <div className='instagram icons-color'><FaInstagram className='icon-size'/></div>
        <div className='facebook icons-color'><FaXTwitter className='icon-size' /></div>
        <div className='facebook icons-color'><CiFacebook className='icon-size'/></div>
        <div className='facebook icons-color'><IoLogoYoutube className='icon-size'/></div>
      </div>
      <div className='line'></div>
      <div className='btn-kid color-white'> KIDS</div>
      </div>

      <div>
        <p className='color-white'>TM & Lucasfilm Ltd. All Rights Reserved</p>

        <div className='last_link_1'>
              <Link>Term of Use</Link><hr/>
              <Link>Additional Content Information</Link><hr/>
              <Link>Privacy Policy </Link><hr/>
              <Link>Childern's Online Privacy Policy</Link><hr/>
              <Link>Your Us State Privacy Rights</Link><hr/>
        </div>
        <div className='last_link'>
        <Link>Star Wars at shopDisney</Link><hr/>
              <Link>Star Wars Helpdesk</Link><hr/>
              <Link>Interest-Based Ads</Link><hr/>
        </div>
      </div>
     
    </div>
  )
}

export default Footer
