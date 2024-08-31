import React from 'react'
import FeatureCardRe from '../component/reuseable_card/Feature_card/Feature_card_re'
import InputsDropdown from '../component/reuseable_card/input_dropdown/InputsDropdown'
import { skeletonCrew, } from '../Api/Data';

const SkeletonCrew = () => {
  return (
    <div className='pad-r-l-all'>
    <div className='heading-Category'>
      <h2 className='color-white'>Category:Skeleton Crew</h2>
    </div>
    <div className='Inputs-Dropdrown-container'>
    <InputsDropdown/>
    </div>
    <FeatureCardRe CardDetail={skeletonCrew}/>
  </div>
  )
}

export default SkeletonCrew
