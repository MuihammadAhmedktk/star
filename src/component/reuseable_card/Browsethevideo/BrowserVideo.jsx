import React, { useState } from 'react';
import SideMenuList from './SideMenuList';
import VideoAll from './VideoAll';

const BrowserVideo = ({ videos, menuList }) => {
  const [selectedMenu, setSelectedMenu] = useState('ALL');

  return (
    <div className='BrowserVideos'>
      <SideMenuList setSelectedMenu={setSelectedMenu} menuList={menuList} />
      <VideoAll videos={videos[selectedMenu] || []} />
    </div>
  );
};

export default BrowserVideo;
