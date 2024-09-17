import React from 'react';
import './Card.css';
import { CardData } from '../../Api/Data';
import { Link } from 'react-router-dom';

// Define a type for the card data
interface CardType {
  id: number;
  img: string;
  text: string;
  link: string;
}

const Card: React.FC = () => {
  return (
    <div className='card-all'>
      {CardData.map(({ id, img, text, link }: CardType) => (
        <div key={id} className='card'>
          <div className='card_img'>
            <img src={img} alt='card img' />
          </div>
          <div className='card_text'>
            <Link to={link}><hr /></Link>
            <p className='color-white'>{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
