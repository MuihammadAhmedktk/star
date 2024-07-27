import React from 'react'
import './BannerWeek.css'
import img0 from '../../assests/weekstar/this-week-in-star-wars-singlehero-landing-desktop_2010a0cd.jpeg'
import img1 from '../../assests/weekstar/twisw-logo-v5_4b12b6ac.png'

const BannerWeek = () => {
  return (
    <div>
      <div className='bannerimge'>
        <img src={img0} alt="" />
      </div>
      <div className='second-banner'>
      <div className="small-img">
        <img src={img1} alt="" />
      </div>
      <div className="smallimg-text">
        <h4 className='color-white'>THIS WEEK! IN STAR WARS</h4>
        <p className='color-white'>This Week! in Star Wars is the only weekly Star Wars news show direct from Lucasflim headquarter,
             featuring the latest headlines, big announcements, exclusive reveals, and trivia.</p>
      </div>
      </div>
     
    </div>
  )
}

export default BannerWeek
