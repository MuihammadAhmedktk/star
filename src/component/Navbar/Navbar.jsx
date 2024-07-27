import React from 'react';
import './Navbar.css';
import{Link} from "react-router-dom";
import Logo from '../../assests/logo.png'
import { CiFacebook } from "react-icons/ci";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import NavbarList from './NavbarList';
import HumberMenu from './HumberMenu';

const Navbar = () => {
  return (
    <div>
       <div className='main-navbar'>
       <div className='navbar'>
      <div className='top-menu'>
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
      
      <div className="logo">
        <Link to="/"><img src={Logo} alt="" width={190} height={100} /></Link>
        
      </div>
      <div className='search-icons'>
        <div className='search-text'>
        <FaSearch className='icons-color'/><span className='color-white text-size'>Search</span>
        </div>
        <div className=''>
        <FiUser className='icons-color'/> <span className='color-white text-size'>Login</span>
        </div>
      </div>
    </div>
    <NavbarList/>
    <hr className='line-edit'></hr>
    <div className='navbar-text color-white'>
      <p>STARS WARS: THE ACOLYTE I NOW STREAMING ON DISNEY+</p>
      <p>THE ACOLYTE | DISNEY+</p>
      </div>
    </div>
    <HumberMenu className="humber_whole"/>
    </div>
   
      
    
  )
}

export default Navbar
