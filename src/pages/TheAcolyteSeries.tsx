import React from 'react'
import Movie from '../component/Movie_Blog/Movie'
import SoicalCard from '../component/SocialCard/SoicalCard';
import LastNew from '../component/LastNew/LastNew';
import { episode,DatabankAcolytemenu,DataAcolytes,video,Movie_Comp,AcolyteLastestNewsandFeature   } from '../Api/Data'
import CardSlider from '../component/CardSlider/CardSlider';
import Databank from '../component/TheAcolytesDatabank/Databank';

const TheAcolyteSeries = () => {
  return (
    <div>
      <Movie Movie={Movie_Comp}/>
      <div  className='pad-r-l-all'>
      <div className='news_header'>
        <h2 className='color-white'>Episode Guides | New Each Wednesday @ 9AM PT</h2>
        </div>
        <div className='line-adjust' >
        <hr className='color-white'/>
        </div>
      
        <CardSlider CardDetail={episode }/>
      <div className='news_header'>
        <h2 className='color-white'>Latest News + Features</h2>
        </div>
        <div className='line-adjust'>
        <hr className='color-white'/>
        </div>
      
      <CardSlider CardDetail={ AcolyteLastestNewsandFeature}/>
      <div className='news_header'>
        <h2 className='color-white'>Databank: The Acolyte</h2>
        </div>
        <div className='line-adjust'>
        <hr className='color-white'/>
        </div>
      <Databank Images={DataAcolytes} Databankmenu={DatabankAcolytemenu}/>

      <div className='news_header'>
        <h2 className='color-white'>Video</h2>
        </div>
        <div className='line-adjust'>
        <hr className='color-white'/>
        </div>
      <LastNew LastNewsDetail={video}/>

      <div className='news_header'>
        <h2 className='color-white'>#TheAcolyte</h2>
        <div >
        <hr className='color-white'/>
        </div>
      </div>
      <SoicalCard/>

      <div className='news_header'>
        <h2 className='color-white'>Galleries</h2>
        </div>
        <div className='line-adjust'>
        <hr className='color-white'/>
        </div>
      </div>
      
    </div>
  )
}

export default TheAcolyteSeries
