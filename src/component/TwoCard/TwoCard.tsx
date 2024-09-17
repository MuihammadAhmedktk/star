import React from 'react'
import "./TwoCard.css"
import img2 from '../../assets/large_card/osws_banner-1_83bde6b0.jpeg'
import img1 from '../../assets/large_card/sasw-externallink-21_fb265c35.jpeg'
const TwoCard = () => {
    const Cards =[
        {
            id:1,
            img:img1,
            main:"Science and Star Wars",
            text:"Presented by Disney Digital Network and Lucasflim, technology. Paid for by IBM. Science and Star Wars takes a look at the relationship between real-world science ans Star Wars",

        },
        {
            id:2,
            img:img2,
            main:"Our Star Wars Stories",
            text:"In Our Star Wars Stories, Jordan Hembrough travels the country talking to fans about how Star Wars has impacted their lives",
                
        },
       
 
]
  return (
    <div className="two-card-all">
        {Cards.map(({id,img,text,main})=>(
            <div className="two-card " key={id}>
            <div className="two-card-img">
                <img src={img} alt="" />
            </div>
            <div className="two-card-text">
                <h4 className='color-white'>{main}</h4>
                <p className='color-white'>{text}</p>
            </div>
            </div>
        ))}
     
    </div>
  )
}

export default TwoCard
