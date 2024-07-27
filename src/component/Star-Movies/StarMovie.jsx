import React from 'react'
import MovieCard from '../reuseable_card/Movie_Card/MovieCard';
import { CardDetail } from '../../Api/Data';
const StarMovie = () => {
  return (
    <div>
      <MovieCard CardDetail={CardDetail}/>
    </div>
  )
}

export default StarMovie
