import React from 'react';
import  './Card.css';
import { CardData } from '../../Api/Data';

const Card = () => {
  return (
    <div className='card-all '>
        {CardData.map(({id,img,text,link})=>(
             <div key={id} className='card'>
                <div className='card_img'>
                <img src={img} alt='card img' />
                </div>
            <div className='card_text'>
                <a href={link}><hr /></a>
               <p className='color-white'>{text}</p>
            </div>
            </div>
        ))}
        
  
    </div>
  )
}

export default Card
