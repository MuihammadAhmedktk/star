import React from 'react'
import './FourCard.css'
import {Fourcards} from '../../../Api/Data';

const FourCard = () => {
    const cards = Fourcards();
   
  return (
    <div className='Fourcard-all'>
    {
        cards.map(({id,img,para})=>(
            <div className='Fourcard' key={id}>
            <div className='Fourcard-img'>
                <img src={img} alt="four card images" />
                </div>
                <div className='Fourcard-para'>
                    <hr className='Fourcard-line'/>
                    <p className='color-white'>{para}</p>
                </div>
          </div>
        ))
    }
    
    </div>
  )
}

export default FourCard
