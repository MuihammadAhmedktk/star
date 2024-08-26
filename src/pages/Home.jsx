import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLastNewsDetail } from '../Redux/Slice/lastNewSlice';
import Sliders from '../component/Slider/Slider'
import Movie from '../component/Movie_Blog/Movie'
import Card from '../component/Card/Card'
import SoicalCard from '../component/SocialCard/SoicalCard'
import NewFeature from '../component/NewFeature/NewFeature'
import LastNew from '../component/LastNew/LastNew'
import { ExploreMoreDetail, CardDetail } from '../Api/Data';
import CardSlider from '../component/CardSlider/CardSlider';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import StarMovie from '../component/Star-Movies/StarMovie'
import { Link } from 'react-router-dom'
import { Movie_Comp } from '../Api/Data';

const Home = () => {
  const dispatch = useDispatch();
  const lastNewsDetail = useSelector((state) => state.lastNew.data);
  const lastNewsStatus = useSelector((state) => state.lastNew.status);
  const error = useSelector((state) => state.lastNew.error);
  useEffect(() => {
    if (lastNewsStatus === 'idle') {
      dispatch(fetchLastNewsDetail());
    }
  }, [lastNewsStatus, dispatch]);

  return (
    <div >
      <Sliders />
      <Movie Movie_Comp={Movie_Comp}/> 
      <div className='three-card-bg-color'>
        <div className=' pad-r-l-all'>
      <Card/>
      <CardSlider CardDetail={CardDetail}/>
      <SoicalCard/>
        </div>
      </div>
      <div className='pad-r-l-all'>
      <div >
        <div className="news_header">
            <h1 className='color-white'>Latest News + Features</h1>
        <p className='color-white arrow-adjust'> <Link to="/TheLastest"><div><p>VIEW ALL</p> <span className='view-arrow-span'><MdOutlineKeyboardArrowRight className='view-arrow' /></span></div></Link></p>
        </div>
        <div className='line-adjust'>
        <hr className='color-white' />
        </div>
      </div>
      <NewFeature/>
      <div>
        <div className="news_header">
          <h1 className='color-white'>Latest Video</h1>
          <div className='color-white arrow-adjust'> <Link to="/video"><div><p>VIEW ALL</p> <span className='view-arrow-span'><MdOutlineKeyboardArrowRight className='view-arrow' /></span></div></Link></div>
        </div>
        <div className='line-adjust'>
        <hr className='color-white' />
        </div>
      </div>
      {error ? (
          <div className="error-message">
            <p className='color-white'>Failed to load the latest news. Please try again later.</p>
          </div>
        ) : (
          <LastNew LastNewsDetail={lastNewsDetail} />
        )}
      <div >
        <div className="news_header">
            <h1 className='color-white'>Explore More</h1>
        </div>
        <div className='line-adjust'>
        <hr className='color-white' />
        </div>
      </div>
      <CardSlider CardDetail={ExploreMoreDetail}/>
      </div>
    </div>
  )
}

export default Home
