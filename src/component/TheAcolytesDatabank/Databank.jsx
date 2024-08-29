import React,{useState,useEffect,useCallback} from 'react'
import DatabankImages from './DatabankImages'
import DatabankMenu from './DatabankMenu'
import './Databank.css'
import {DataAcolytes  } from '../../Api/Data'

const Databank = ({Images, Databankmenu}) => {
    const [selectedMenu, setSelectedMenu] = useState('ALL');
    const [menuList, setMenuList] = useState(Databankmenu);

   // Mapping function
  // Calculate menu counts based on data
  const calculateMenuCounts = useCallback(() => {
    return Databankmenu.map(menuItem => {
      const count = DataAcolytes[menuItem.text]?.length || 0;
      return { ...menuItem, count };
    });
  }, [Databankmenu]);

  useEffect(() => {
    setMenuList(calculateMenuCounts());
  }, [calculateMenuCounts]);
 
  return (
    <div className='databank'>
        <DatabankMenu  setSelectedMenu={setSelectedMenu} Databankmenu={ menuList}/>
        <DatabankImages  Images={Images[(selectedMenu)] || []}/>
    </div>
  )
}

export default Databank
