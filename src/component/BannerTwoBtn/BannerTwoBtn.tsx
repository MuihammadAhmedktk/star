import React from 'react'
import './BannerTwoBtn.css'
import img1 from '../../assets/Flims/tpm-theatres-spheres-hero-desktop_d3aefa27.jpeg'
import img2 from "../../assets/Flims/phantom-menace-ferguson-onesheet-final-empirestrap_arti_e95a79c8.jpeg"
import { Link } from 'react-router-dom'
const BannerTwoBtn:React.FC = () => {
  return (
    <div className='banner-img-all'>
      <div className="banner-img-2 ">
        <img src={img1} alt="" />
      </div>

      <div className="banner-img-2-small">
        <img src={img2} alt="" />
      </div>
      <div className="banner-img-2-text">
        <div className='banner-img-2-text-p-h'>
        <h2 className='color-white'>THE PHANTOM MENACE RETURNS TO THEATERS</h2>
        <p className='color-white'>Tickets are available now, and get details on as exclusive look at <i>The Acolyte</i></p>
        </div>
        <div className='movie_btn '>
               <button className='color-white '> <Link to="#">READ MORE</Link></button>
               <button className='color-white'> <Link to="#">INTERVIEW</Link></button>
       </div>
      </div>
      
    </div>
  )
}

export default BannerTwoBtn
