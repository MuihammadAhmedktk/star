import React, { useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import { MenuOption } from '../../../types';

// Define the type for menu options

interface BrowseFlimSideMenuProps {
  menuOptions: MenuOption[];
  setSelectedMenu: (menu: string) => void;
}

const BrowseFlimSideMenu: React.FC<BrowseFlimSideMenuProps> = ({ menuOptions, setSelectedMenu }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(menuOptions[0]?.text || 'ALL');

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleOptionClick = (option: MenuOption) => {
    setSelectedOption(option.text);
    setSelectedMenu(option.text);
    setIsOpen(false);
  };

  return (
    <div className='menu-list-all menu-item-adjust'>
      <div className='for-large-screen for-large-screen-flims'>
        {menuOptions.map(({ id, text, count }) => (
          <div className='menu-list' key={id}>
            <span
              onClick={() => handleOptionClick({ id, text, count })}
              className='color-white'
            >
              {text} ({count})
            </span>
          </div>
        ))}
      </div>

      <div className='input-tab for-small-screen'>
        <div className="dropdown" onClick={handleToggle}>
          <input
            type="text"
            value={selectedOption}
            readOnly
            placeholder='ALL'
            className="dropdown-input"
          />
          <div className={`dropdown-icon ${isOpen ? 'open' : ''}`}>
            <RiArrowDownSLine />
          </div>
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            {menuOptions.map(option => (
              <div key={option.id} className="dropdown-option">
                <span onClick={() => handleOptionClick(option)}>
                  {option.text} ({option.count})
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseFlimSideMenu;
