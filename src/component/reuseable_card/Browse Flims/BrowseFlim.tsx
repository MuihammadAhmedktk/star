// BrowseFlim.tsx
import React, { useState } from 'react';
import BrowseFlimSideMenu from './BrowseFlimSideMenu';
import BrowseFlimVideo from './BrowseFlimVideo';
import "../Browsethevideo/BrowserVideo.css";
import { ClipLoader } from 'react-spinners';
import { MenuOption, CategoryData } from '../../../types'; // Ensure import paths and types are correct

interface CardProps {
  menuOptions: MenuOption[];
  videoData: CategoryData;
  loading: boolean;
  showVideo: boolean;
}

const BrowseFlim: React.FC<CardProps> = ({ menuOptions, videoData, loading, showVideo }) => {
  const [selectedMenu, setSelectedMenu] = useState<string>(menuOptions[0]?.text || '');

  return (
    <div className='Browserflims'>
      <BrowseFlimSideMenu menuOptions={menuOptions} setSelectedMenu={setSelectedMenu} />
      {loading ? (
        <div className="loader-container">
          <ClipLoader color="#FFFFFF" size={50} />
        </div>
      ) : (
        showVideo && <BrowseFlimVideo videos={videoData[selectedMenu] || []} />
      )}
    </div>
  );
};

export default BrowseFlim;
