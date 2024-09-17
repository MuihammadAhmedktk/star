import React, { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

// Define types for the menu items and nav links
interface NavItem {
  label: string;
  link: string;
}

interface NavLink {
  title: string;
  link: string;
  items: NavItem[];
}

export const NavLinks: NavLink[] = [
  {
    title: 'NEWS + FEATURES',
    link: '/TheLastest',
    items: [
      { label: 'THE LATEST', link: '/TheLastest' },
      { label: 'SkELETON CREW', link: '/Skeleton-crew' },
      { label: 'STAR WARS OUTLINE', link: '/Star-Wars-Outline' },
      { label: 'THE HIGH REPUBLIC', link: '/the-high-republic' },
      { label: 'QUIZZES + POLLS', link: '/quizzes-polls' },
      { label: 'BOOKS + COMICS', link: '/books-comics' },
    ],
  },
  {
    title: 'VIDEO',
    link: '/video',
    items: [
      { label: 'ALL VIDEO', link: '/video' },
      { label: 'THIS WEEK! IN STAR WARS', link: '/week-star-war' },
    ],
  },
  {
    title: 'FLIMS',
    link: '/flims',
    items: [],
  },
  {
    title: 'SERIES',
    link: '/Series',
    items: [
      { label: 'ALL SERIES', link: '/Series' },
      { label: 'THE ACOLYTE', link: '/the-acolytes-Series' },
      { label: 'THE BAD BATCH', link: '/the-bad-batch' },
      { label: 'AHSOKA', link: '/ahsoka' },
      { label: 'ANDOOR', link: '/andoor' },
      { label: 'THE MANDALORIAN', link: '/mandalorian' },
    ],
  },
  {
    title: 'GAMES + INTERACTIVE',
    link: '/games-interactive',
    items: [
      { label: 'VIEW ALL', link: '/TheLastest' },
      { label: 'STAR WORLD OUTLAWS', link: '/star-world-outlaws' },
      { label: 'GAMES + APPS', link: '/game-apps' },
      { label: 'VR + IMMERSIVE', link: '/vr-immersive' },
    ],
  },
  {
    title: 'DATABANK',
    link: '/databank',
    items: [
      { label: 'ALL DATABANK', link: '/all-databank' },
      { label: 'ERAS', link: '/eras' },
    ],
  },
  {
    title: 'DISNEY+',
    link: '/disney',
    items: [
      { label: 'STREAM NOW', link: '/stream-now' },
      { label: 'EXPLORE', link: '/explore' },
      { label: 'THE DISNEY BUNDLE', link: '/the-disney-bundle' },
    ],
  },
];

const NavbarList: React.FC = () => {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const handleToggle = (index: number, e: MouseEvent) => {
    e.stopPropagation();
    setOpenMenuIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <nav className="navbar-list">
      <ul className="navbar-menu">
        {NavLinks.map((menu, index) => (
          <li key={index} className="menu-item">
            <Link
              to={menu.link}
              onClick={(e) => handleToggle(index, e)}
            >
              {menu.title}
            </Link>
            {menu.items.length > 0 && (
              <ul className={`nav-sub-menu ${openMenuIndex === index ? 'open' : ''}`}>
                {menu.items.map((item, subIndex) => (
                  <li key={subIndex}>
                    <a href={item.link}>{item.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarList;
