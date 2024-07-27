import React, { useState } from 'react';
import "../Browsethevideo/BrowserVideo.css";
import BrowseFlimSideMenu from './BrowseFlimSideMenu';
import BrowseFlimVideo from './BrowseFlimVideo';

const BrowseFlim = ({ menuOptions, videoData }) => {
    const [selectedMenu, setSelectedMenu] = useState(menuOptions[0].text);

    return (
        <div className='Browserflims'>
            <BrowseFlimSideMenu menuOptions={menuOptions} setSelectedMenu={setSelectedMenu} />
            <BrowseFlimVideo videos={videoData[selectedMenu] || []} />
        </div>
    );
};

export default BrowseFlim;
