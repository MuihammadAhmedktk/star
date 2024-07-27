import React from 'react'
import img1 from "../assests/moivie_card/the-acolyte-character-posters-featured-2_15c6967f.jpeg"
import img2 from "../assests/moivie_card/the-acolyte-104-main_8af5a1d1.jpeg"
import img3 from "../assests/moivie_card/the-acolyte-creature-feature-bazil-featured_17dde8c4.jpeg"
import MovieCard from '../component/reuseable_card/Movie_Card/MovieCard';
import BrowseFlim from '../component/reuseable_card/Browse Flims/BrowseFlim';
import { CardDetail } from '../Api/Data';

const menuOptions = [
  { id: 1, text: 'ALL', link: '/all', count: 25 },
  { id: 2, text: 'LIVEACTION', link: '/asoka', count: 5 },
  { id: 3, text: 'ANIMATION', link: '/asoka', count: 5 },
  { id: 4, text: 'LEOSTARWARS', link: '/asoka', count: 5 },

];

const videoData = {
  ALL: [
      { id: 1, img: img1, text: "Lies and Heartbreak | This week! in star war dispatch" },
      { id: 2, img: img2, text: "Many UNknows| This week! in star war dispatch" },
      { id: 3, img: img3, text: "Jedi vs the stranger| This week! in star war dispatch"  },
   
  ],
  LIVEACTION: [
      { id: 1, img: img1, text: "Asoka | Star Wars Dispatch"},
      { id: 2, img: img2, text: "Asoka's Journey | Star Wars Dispatch" },
  ],
  ANIMATION:[
    { id: 1, img: img1, text: "Asoka | Star Wars Dispatch" },
    { id: 2, img: img2, text: "Asoka's Journey | Star Wars Dispatch" },
  ],
  LEOSTARWARS:[
    { id: 1, img: img1, text: "Asoka | Star Wars Dispatch" },
    { id: 2, img: img2, text: "Asoka's Journey | Star Wars Dispatch"},
  ],
};

const Series = () => {
  return (
    <div className=' pad-r-l-all'>
       <div className='heading-h2'>
        <h2 className='color-white'>Latest News + Feature</h2>
        <div >
        <hr/>
        </div>
      </div>
      <MovieCard CardDetail={CardDetail}/>
      <div className='heading-h2'>
        <h2 className='color-white'>Latest News + Feature</h2>
        <div >
        <hr/>
        </div>
      </div>
      <BrowseFlim menuOptions={menuOptions} videoData={videoData} />
    </div>
  )
}

export default Series
