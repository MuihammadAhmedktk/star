import React, { useState, useEffect, useCallback } from 'react';
import DatabankImages from './DatabankImages';
import DatabankMenu from './DatabankMenu';
import './Databank.css';
import { DataAcolytes } from '../../Api/Data';

// Adjust the MenuItem type to match the one in DatabankMenu.tsx
interface MenuItem {
  id: number | string;
  text: string;
  link: string;
  count?: number;
}

interface DatabankProps {
  Images: { [key: string]: { id: string | number; name: string; img: string }[] }; // Adjust type based on your Images structure
  Databankmenu: MenuItem[];
}

const Databank: React.FC<DatabankProps> = ({ Images, Databankmenu }) => {
  const [selectedMenu, setSelectedMenu] = useState('ALL');
  const [menuList, setMenuList] = useState<MenuItem[]>(Databankmenu);

  // Calculate menu counts based on data
  const calculateMenuCounts = useCallback(() => {
    return Databankmenu.map((menuItem) => {
      const count = DataAcolytes[menuItem.text as keyof typeof DataAcolytes]?.length || 0; // Default to 0
      return { ...menuItem, count };
    });
  }, [Databankmenu]);
  
  
  useEffect(() => {
    setMenuList(calculateMenuCounts());
  }, [calculateMenuCounts]);

  return (
    <div className="databank">
      <DatabankMenu setSelectedMenu={setSelectedMenu} Databankmenu={menuList} />
      <DatabankImages Images={Images[selectedMenu] || []} />
    </div>
  );
};

export default Databank;
