import React, { useState, useEffect, useCallback } from 'react';
import SideMenuList from './SideMenuList';
import VideoAll from './VideoAll';
import { MenuItem, Videos } from './types'; // Update the import path as necessary

interface BrowserVideoProps {
  videos: Videos;
  BrowseMenuList: MenuItem[];
}

const BrowserVideo: React.FC<BrowserVideoProps> = ({ videos, BrowseMenuList }) => {
  const [selectedMenu, setSelectedMenu] = useState<string>('ALL');
  const [menuList, setMenuList] = useState<MenuItem[]>(BrowseMenuList);

  const calculateMenuCounts = useCallback(() => {
    return BrowseMenuList.map(menuItem => {
      const count = videos[menuItem.text]?.length || 0;
      return { ...menuItem, count };
    });
  }, [BrowseMenuList, videos]);

  useEffect(() => {
    setMenuList(calculateMenuCounts());
  }, [calculateMenuCounts]);

  return (
    <div className='BrowserVideos'>
      <SideMenuList setSelectedMenu={setSelectedMenu} menuList={menuList} />
      <VideoAll videos={videos[selectedMenu] || []} />
    </div>
  );
};

export default BrowserVideo;
