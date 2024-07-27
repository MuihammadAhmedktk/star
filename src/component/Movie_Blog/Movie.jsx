import React from 'react'
import './Movie.css'
import { Link } from 'react-router-dom'

const Movie = ({Movie_Comp}) => {
  return (
    <div className='movie_blog_all'>
      {Movie_Comp.map(({img,img1,img2,btn1,btn2,btn3,para,head},index)=>(
    <div  className='movie_blog' key={index} >
    <img src={img} alt="background_image" />
    <img src={img2} alt="" />
  <div className='movie_heading bg-color'>
        <div className='movie_para_img bg-color'>
        <img src={img1} alt=""width={400} height={200} className='bg-color'/>
        <h2  className='color-white'>{head}</h2>
        <p className='color-white bg-color'>{para}</p>
        </div>
        <div className='movie_btn bg-color'>
              {btn1 && <button className='color-white'><Link to="#">{btn1}</Link></button>}
              {btn2 && <button className='color-white'><Link to="#">{btn2}</Link></button>}
              {btn3 && <button className='color-white'><Link to="#">{btn3}</Link></button>}
        </div>
    </div>
  </div>
      ))}
  
    </div>
      
  )
}

export default Movie
