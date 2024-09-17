import React from 'react'
import Movie from '../component/Movie_Blog/Movie'
import { ahsoka_hero,episodesahsoka,DatabankAcolytemenu,DataAcolytes} from '../Api/Data'
import CardSlider from '../component/CardSlider/CardSlider'
import Databank from '../component/TheAcolytesDatabank/Databank';

const Ahsoka:React.FC = () => {
  return (
    <div >
      <Movie Movie={ahsoka_hero}/> 
      <div className='pad-r-l-all'>
         <div >
        <div className="news_header">
            <h1 className='color-white'>Episode Guides</h1>
        </div>
        <div className='line-adjust'>
        <hr className='color-white' />
        </div>
      </div>
      <CardSlider CardDetail={episodesahsoka}/>
      <div >
        <div className="news_header">
            <h1 className='color-white'>Latest News + Features</h1>
        </div>
        <div className='line-adjust'>
        <hr className='color-white' />
        </div>
      </div>
      <CardSlider CardDetail={episodesahsoka}/>
      <div >
        <div className="news_header">
            <h1 className='color-white'>Databank:Ahsoka</h1>
        </div>
        <div className='line-adjust'>
        <hr className='color-white' />
        </div>
      </div>

      <Databank Images={DataAcolytes} Databankmenu={DatabankAcolytemenu}/>
      
      </div>
     
      
      
    </div>
  )
}

export default Ahsoka
