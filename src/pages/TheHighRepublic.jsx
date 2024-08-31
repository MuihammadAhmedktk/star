import React from 'react'
import InputsDropdown from '../component/reuseable_card/input_dropdown/InputsDropdown'
import FeatureCardRe from '../component/reuseable_card/Feature_card/Feature_card_re'
import {featurecard} from '../Api/Data'

const TheHighRepublic = () => {
  return (
    <div className='pad-r-l-all'>
        <div className='Inputs-Dropdrown-container'>
    <InputsDropdown/>
    </div>
    <div className='heading-Category'>
      <h2 className='color-white'>Category: The High Republic</h2>
    </div>
    <FeatureCardRe CardDetail={featurecard}/>
  </div>
  )
}

export default TheHighRepublic