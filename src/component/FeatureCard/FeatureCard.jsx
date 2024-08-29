import React from 'react'
import './FeatureCard.css'
import FeatureCardRe from '../reuseable_card/Feature_card/Feature_card_re';
import InputsDropdown from '../reuseable_card/input_dropdown/InputsDropdown'
import LastNewsFeature from '../reuseable_card/LargeTwoCard/LastNewsFeature'
import Archive from '../reuseable_card/Archive/Archive';
import { featurecard } from '../../Api/Data';

const FeatureCard = () => {
  return (
    <div className='feature-all'>
     <InputsDropdown/>
    <div className='lastnewsfeatures'>
        <h2 className='color-white'>Latest News + Features</h2>
        <hr className='color-white' />
       </div>
        <LastNewsFeature />
        <div className='lastnewsfeatures'>
        <h2 className='color-white'>More News + Features</h2>
        <hr className='color-white' />
       </div>
       <FeatureCardRe CardDetail={featurecard}/>
       <div className='lastnewsfeatures'>
        <h2 className='color-white'>Archive</h2>
        <hr className='color-white' />
       </div>
      <Archive/>

  </div>
  )
}

export default FeatureCard
