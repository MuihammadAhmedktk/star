import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BrowseFlimSideMenu from './BrowseFlimSideMenu';
import BrowseFlimVideo from './BrowseFlimVideo';
import "../Browsethevideo/BrowserVideo.css";
import { ClipLoader } from 'react-spinners';

const BrowseFlim = () => {
  const { menuOptions, videoData, loading } = useSelector((state) => state.videos);
  const [selectedMenu, setSelectedMenu] = useState(menuOptions[0]?.text || '');

  return (
    <div className='Browserflims'>
      <BrowseFlimSideMenu menuOptions={menuOptions} setSelectedMenu={setSelectedMenu} />
      {loading ? (
        <div className="loader-container">
          <ClipLoader color="#FFFFFF" size={50} />
        </div>
      ) : (
        <BrowseFlimVideo videos={videoData[selectedMenu] || []} loading={loading} />
      )}
    </div>
  );
};

export default BrowseFlim;


