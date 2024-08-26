import React from 'react'
import './Movie.css'
import { Link } from 'react-router-dom'

const Movie = ({Movie_Comp}) => {
  return (
    <div className='movie_blog_all'>
      {Movie_Comp.map((item,index)=>(
    <div  className='movie_blog' key={index} >
    <img src={item.img} alt="background_image" />
    <img src={item.img2} alt="" />
  <div className='movie_heading bg-color'>
        <div className='movie_para_img bg-color'>
        <img src={item.img1} alt=""width={400} height={200} className='bg-color'/>
        <h2  className='color-white'>{item.head}</h2>
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
      
  )
}

export default Movie
