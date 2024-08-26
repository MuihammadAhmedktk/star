import React from 'react'
import Movie from '../component/Movie_Blog/Movie'
import NewFeature from '../component/NewFeature/NewFeature';
import SoicalCard from '../component/SocialCard/SoicalCard';
import LastNew from '../component/LastNew/LastNew';
import { Movie_Comp } from '../Api/Data';
import { video } from '../Api/Data'
import { episode } from '../Api/Data'
import CardSlider from '../component/CardSlider/CardSlider';

const TheAcolytes = () => {
  return (
    <div>
      <Movie Movie_Comp={Movie_Comp}/>
      <div  className='pad-r-l-all'>
      <div className='heading-h2'>
        <h2 className='color-white'>Episode Guides | New Each Wednesday @ 9AM PT</h2>
        <div >
        <hr/>
        </div>
      </div>
        <CardSlider CardDetail={episode}/>
      <div className='heading-h2'>
        <h2 className='color-white'>Latest News + Features</h2>
        <div >
        <hr/>
        </div>
      </div>
      <NewFeature/>
      <div className='heading-h2'>
        <h2 className='color-white'>Databank: The Acolyte</h2>
        <div >
        <hr/>
        </div>
      </div>

      <div className='heading-h2'>
        <h2 className='color-white'>Video</h2>
        <div >
        <hr/>
        </div>
      </div>
      <LastNew LastNewsDetail={video}/>

      <div className='heading-h2'>
        <h2 className='color-white'>#TheAcolyte</h2>
        <div >
        <hr/>
        </div>
      </div>
      <SoicalCard/>

      <div className='heading-h2'>
        <h2 className='color-white'>Galleries</h2>
        <div >
        <hr/>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default TheAcolytes
