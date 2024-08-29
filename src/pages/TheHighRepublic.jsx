import React from 'react'
import InputsDropdown from '../component/reuseable_card/input_dropdown/InputsDropdown'
import FeatureCardRe from '../component/reuseable_card/Feature_card/Feature_card_re'
import {featurecard} from '../Api/Data'

const TheHighRepublic = () => {
  return (
    <div className='pad-r-l-all'>
        <div style={{paddingBottom:"24px",paddingTop:"24px"}}>
    <InputsDropdown/>
    </div>
    <div className='heading' style={{paddingTop:"30px",paddingBottom:"30px"}}>
      <h2 className='color-white'>Category: The High Republic</h2>
    </div>
    <FeatureCardRe CardDetail={featurecard}/>
  </div>
  )
}

export default TheHighRepublic