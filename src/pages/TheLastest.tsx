import React from 'react'
import FeatureCardRe from '../component/reuseable_card/Feature_card/Feature_card_re';
import InputsDropdown from '../component/reuseable_card/input_dropdown/InputsDropdown'
import LastNewsFeature from '../component/reuseable_card/LargeTwoCard/LastNewsFeature'
import Archive from '../component/reuseable_card/Archive/Archive';
import { featurecard } from '../Api/Data';

interface FeatureCard {
  id: number;
  text: string;
  date: string;
  Img: string;
}

const TheLatest = () => {
  return (
    <div className='pad-r-l-all'>
      <div className="Inputs-Dropdrown-container">
        <InputsDropdown />
      </div>

      <div className='news_header'>
        <h2 className='color-white'>Latest News + Features</h2>
      </div>
      <div className="line-adjust"><hr className='color-white' /></div>
      {/* Pass the required showVideo prop */}
      <LastNewsFeature showVideo={true} />
      <div className='news_header'>
        <h2 className='color-white'>More News + Features</h2>
      </div>
      <div className='line-adjust'>
        <hr className='color-white' />
      </div>
      <FeatureCardRe CardDetail={featurecard as FeatureCard[]} />
      <div className='news_header'>
        <h2 className='color-white'>Archive</h2>
      </div>
      <div className='line-adjust'>
        <hr className='color-white' />
      </div>
      <Archive />
    </div>
  )
}

export default TheLatest;
