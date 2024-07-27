import React, { useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import "./BrowserVideo.css";

const SideMenuList = ({ setSelectedMenu, menuList }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('ALL');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.text);
    setSelectedMenu(option.text);
    setIsOpen(false);
  };

  return (
    <div className='menu-list-all'>
      <div className='for-large-screen'>
        {menuList.map(({ id, text, link, count }) => (
          <div className='menu-list' key={id}>
            <span onClick={() => handleOptionClick({ text, link, count })} className='color-white'>{text} ({count})</span>
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
          <div className={`dropdown-icon ${isOpen ? 'open' : ''}`}><RiArrowDownSLine /></div>
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            {menuList.map((option) => (
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

export default SideMenuList;
