import React from 'react';
import './Movie.css';
import { Link } from 'react-router-dom';

// Define the type for each movie item
interface MovieItem {
  img: string;
  img2: string;
  img1: string;
  img4: string;
  head: string;
  para: string;
  btn1?: string;
  btn2?: string;
  btn3?: string;
  btn4?: string;
  id: number;
}

// Define the props type
interface MovieProps {
  Movie: MovieItem[];
}

const Movie: React.FC<MovieProps> = ({ Movie }) => {
  return (
    <div className='movie_blog_all'>
      {Movie.map((item, index) => (
        <div className='movie_blog' key={index}>
          <img src={item.img} alt="Main background" />
          <img src={item.img2} alt="Secondary background" />
          <div className='movie_heading bg-color'>
            <div className='movie_para_img bg-color'>
              <img src={item.img1} alt="Poster" width={400} height={200} className='bg-color' />
              <img src={item.img4} alt="Thumbnail" width={400} height={400} className='bg-color' />
              <h2 className='color-white'>{item.head}</h2>
              <p className='color-white bg-color'>{item.para}</p>
            </div>
            <div className='movie_btn bg-color'>
              {item.btn1 && <button className='color-white'><Link to="#">{item.btn1}</Link></button>}
              {item.btn2 && <button className='color-white'><Link to="#">{item.btn2}</Link></button>}
              {item.btn3 && <button className='color-white'><Link to="#">{item.btn3}</Link></button>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movie;
