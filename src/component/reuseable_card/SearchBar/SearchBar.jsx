import React from 'react'
import './SearchBar.css'
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
  
      <div className='search-bar'>
        <div className='serach-bar-input'>
        <input type="search" placeholder='Search Video' />
        <hr />
        </div>
       
        <div className='search-bar-icon'>
        <IoMdSearch className='icon'/>
        <p className='color-white'>Search</p>
        </div>
        
      </div>
   
  )
}

export default SearchBar
