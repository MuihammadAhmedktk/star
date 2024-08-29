import React from 'react'
import FeatureCardRe from '../component/reuseable_card/Feature_card/Feature_card_re'
import { featurecard } from '../Api/Data';

const TheAcolyte = () => {
  return (
    <div className='pad-r-l-all'>
      <div className='heading' style={{paddingTop:"25px",paddingBottom:"30px"}}>
        <h2 className='color-white'>Tagged:The Acolyte</h2>
      </div>
      <FeatureCardRe CardDetail={featurecard}/>
    </div>
  )
}

export default TheAcolyte
