import React from 'react'
import FeatureCardRe from '../component/reuseable_card/Feature_card/Feature_card_re'
import InputsDropdown from '../component/reuseable_card/input_dropdown/InputsDropdown'
import { starwarsoutline } from '../Api/Data';

const StarWarsOutline = () => {
  return (
    <div className='pad-r-l-all'>
    <div className='heading-Category'>
      <h2 className='color-white'>Category:Star Wars Outline</h2>
    </div>
    <div className='Inputs-Dropdrown-container'>
    <InputsDropdown/>
    </div>
    <FeatureCardRe CardDetail={starwarsoutline}/>
  </div>
  )
}

export default StarWarsOutline
