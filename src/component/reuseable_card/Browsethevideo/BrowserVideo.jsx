import React, { useState,useEffect } from 'react';
import SideMenuList from './SideMenuList';
import VideoAll from './VideoAll';

const BrowserVideo = ({ videos, BrowseMenuList }) => {
  const [selectedMenu, setSelectedMenu] = useState('ALL');
  const [menuList, setMenuList] = useState(BrowseMenuList);

  const calculateMenuCounts = () => {
    return BrowseMenuList.map(menuItem => {
      const count = videos[menuItem.text]?.length || 0;
      return { ...menuItem, count };
    });
};

useEffect(() => {
    setMenuList(calculateMenuCounts());
}, []);

  return (
    <div className='BrowserVideos'>
      <SideMenuList setSelectedMenu={setSelectedMenu} menuList={ menuList} />
      <VideoAll videos={videos[selectedMenu] || []} />
    </div>
  );
};

export default BrowserVideo;
