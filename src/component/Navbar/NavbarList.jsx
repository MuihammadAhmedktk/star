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
      { label: 'THE ACOLYTE', link: '/the-acolytes' },
      { label: 'THE BAD BATCH', link: '/the-bad-batch' },
      { label: 'AHSOKA', link: '/the-high-republic' },
      { label: 'ANDOOR', link: '/quizzes-polls' },
      { label: 'THE MANDALORIAN', link: '/books-comics' },
    ],
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
