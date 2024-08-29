import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavLinks = [
  {
    title: 'NEWS + FEATURES',
    link:'/TheLastest',

    items: [
      { label: 'THE LATEST', link: '/TheLastest' },
      { label: 'THE ACOLYTE', link: '/the-acolyte' },
      { label: 'THE BAD BATCH', link: '/the-bad-batch' },
      { label: 'THE HIGH REPUBLIC', link: '/the-high-republic' },
      { label: 'QUIZZES + POLLS', link: '/quizzes-polls' },
      { label: 'BOOKS + COMICS', link: '/books-comics' },
    ],
  },
  {
    title: 'VIDEO',
    link:'/video',
    items: [
      { label: 'ALL VIDEO', link: '/video' },
      { label: 'THIS WEEK!IN STAR WARS', link: '/week-star-war' },
    ],
  },
  {
    title: 'FLIMS',
    link:'/flims',
    items:[]
  },
  {
    title: 'SERIES',
    link:'/Series',
    items: [
      { label: 'ALL SERIES', link: '/Series' },
      { label: 'THE ACOLYTE', link: '/the-acolytes-Series' },
      { label: 'THE BAD BATCH', link: '/the-bad-batch' },
      { label: 'AHSOKA', link: '/the-ahsoka-series' },
      { label: 'ANDOOR', link: '/the-andoor-series' },
      { label: 'THE MANDALORIAN', link: '/the-mandalorian-series' },
    ],
  },
  {
    title: 'GAMES + INTERACTIVE',
    items: [
      { label: 'VIEW ALL', link: '/TheLastest' },
      { label: 'STAR WORLD OUTLAWS', link: '/star-world-outlaws' },
      { label: 'GAMES + APPS', link: '/game-apps' },
      { label: 'VR + IMMERSIVE', link: '/vr-immersive' },
    ]
  },
  {
    title: 'DATABANK',
    items: [
      { label: 'ALL DATABANK', link: '/all-databank' },
      { label: 'ERAS', link: '/eras' },
    ]
  },
  {
    title: 'DISNEY+',
    items: [
      { label: 'STREAM NOW', link: '/stream-now' },
      { label: 'EXPLORE', link: '/explore' },
      { label: 'THE DISNEY BUNDLE', link: '/the-disney-bundle' },
    ]
  },
  
];

const NavbarList = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleToggle = (index, e) => {
    e.stopPropagation();
    setOpenMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <nav className="navbar-list">
      <ul className="navbar-menu">
        {NavLinks.map((menu, index) => (
          <li key={index} className="menu-item">
            <Link
             to={menu.link}
             onClick={(e)=>handleToggle(index,e)}
             >
              {menu.title}
            </Link>
            {menu.items.length > 0 &&(
               <ul className={`nav-sub-menu ${openMenuIndex === index ? 'open' : ''}`}>
               {menu.items.map((item, subIndex) => (
                 <li key={subIndex}><a href={item.link}>{item.label}</a></li>
               ))}
             </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavbarList;
