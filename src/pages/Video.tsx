import React from 'react'
import FourCard from '../component/reuseable_card/four-card/FourCard'
import SearchBar from '../component/reuseable_card/SearchBar/SearchBar'
import LastNewsFeature from '../component/reuseable_card/LargeTwoCard/LastNewsFeature'
import BrowserVideo from '../component/reuseable_card/Browsethevideo/BrowserVideo'
import TwoCard from '../component/TwoCard/TwoCard'
import { BrowseMenuList, videos } from '../Api/Data'
const Video = () => {
  return (
    <div className='pad-r-l-all'>
        <div className='heading-h2'>
        <SearchBar/>
        </div>
       
      <FourCard/>
      <div className='heading-h2'>
        <h2 className='color-white'>Feature Video</h2>
        <div >
        <hr/>
        </div>
      </div>
      <LastNewsFeature showVideo={true}/>
      <div className='heading-h2'>
        <h2 className='color-white'>Browser More Video</h2>
        <div >
        <hr/>
        </div>
      </div>
      <BrowserVideo videos={videos} BrowseMenuList={BrowseMenuList} />
      <div className='heading-h2'>
        <h2 className='color-white'>More StarWars.Com Video Series</h2>
        <div >
        <hr/>
        </div>
      </div>
      <TwoCard/>
     
    </div>
  )
}

export default Video
