import React, { useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";
import "./Databank.css";

interface MenuItem {
  id: number | string;
  text: string;
  link: string;
  count?: number;
}

interface DatabankMenuProps {
  setSelectedMenu: (menu: string) => void;
  Databankmenu: MenuItem[];
}

const DatabankMenu = ({ setSelectedMenu, Databankmenu }: DatabankMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('ALL');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Add the type MenuItem to the option parameter
  const handleOptionClick = (option: MenuItem) => {
    setSelectedOption(option.text);
    setSelectedMenu(option.text);
    setIsOpen(false);
  };

  return (
    <div className='menu-list-all'>
      <div className='for-large-screen'>
        {Databankmenu.map((item: MenuItem) => (
          <div className='menu-list' key={item.id}>
            <span onClick={() => handleOptionClick(item)} className='color-white'>
              {item.text} ({item.count})
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
          <div className={`dropdown-icon ${isOpen ? 'open' : ''}`}><RiArrowDownSLine /></div>
        </div>
        {isOpen && (
          <div className="dropdown-menu">
            {Databankmenu.map((option: MenuItem) => (
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
}

export default DatabankMenu;
