import React, { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';
import logo from '../../assests/logo.png';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import { CiFacebook } from "react-icons/ci";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import {NavLinks} from './NavbarList';
import { Link } from 'react-router-dom';

const HumberMenu = () => {
  const [openMenus, setOpenMenus] = useState({});
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggle = (index) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleMenuVisibility = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className='humber-all'>
      <div className='humber-menu'>
        <div className='humber-menu-icon icons-color icon-size' onClick={handleMenuVisibility}>
          <BiMenuAltLeft className='icon-size' />
        </div>
        <div className='humber-logo'>
          <Link to="/"><img src={logo} alt="Logo" width={100} height={70} /></Link>
        </div>
        <div className='humber-search icons-color'>
          <IoIosSearch className='icon-size' />
        </div>
      </div>
      <div className='navbar-text color-white'><p>STARS WARS: THE ACOLYTE I NOW STREAMING ON DISNEY+</p></div>
      <nav className={`menu_list ${menuVisible ? 'open' : ''}`}>
        <ul className='menu_list_ul'>
          {NavLinks.map((menu, index) => (
            <li key={index} className={openMenus[index] ? 'open' : ''}>
              <p  onClick={(e) => { e.preventDefault(); handleToggle(index); }}>
                {menu.title} <span className={openMenus[index] ? 'rotate' : ''}><MdOutlineKeyboardArrowDown className='icon-size' /></span>
              </p>
              {openMenus[index] && (
                <ul className="sub-menu">
                  {menu.items.map((item, subIndex) => (
                    <li key={subIndex}><a href={item.link}>{item.label}</a></li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <hr />
        <div className='small-menu-user'>
        <FiUser className='icons-color'/> <span className='color-white text-size'>Login</span>
        </div>
       
        <div className='top-menu'>
      <div className='social-menu'>
        <div className='tiktok icons-color '><IoLogoTiktok className='icon-size-mobile' /></div>
        <div className='instagram icons-color'><FaInstagram className='icon-size-mobile'/></div>
        <div className='facebook icons-color'><FaXTwitter className='icon-size-mobile' /></div>
        <div className='facebook icons-color'><CiFacebook className='icon-size-mobile'/></div>
        <div className='facebook icons-color'><IoLogoYoutube className='icon-size-mobile'/></div>
      </div>
      <div className='line'></div>
      <div className='btn-kid color-white'> KIDS</div>
      </div>
        {menuVisible && (
          <IoMdClose className='close-icon icon-size' onClick={handleMenuVisibility} />
        )}
      </nav>
    </div>
  );
};

export default HumberMenu;
