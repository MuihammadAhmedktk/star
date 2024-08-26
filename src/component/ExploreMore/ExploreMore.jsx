
import React from 'react';
import { ExploreMoreDetail } from '../../Api/Data';
import CardSlider from '../CardSlider/CardSlider';
const ExploreMore= () => {
  return (
    <div>
        <CardSlider CardDetail={ExploreMoreDetail}/>
      </div>
  )
}
export default ExploreMore

