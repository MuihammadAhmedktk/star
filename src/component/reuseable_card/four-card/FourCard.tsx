// import React from 'react'
// import './FourCard.css'
// import {Fourcards} from '../../../Api/Data';

// const FourCard = () => {
//     const cards = Fourcards();
   
//   return (
//     <div className='Fourcard-all'>
//     {
//         cards.map(({id,img,para})=>(
//             <div className='Fourcard' key={id}>
//             <div className='Fourcard-img'>
//                 <img src={img} alt="four card images" />
//                 </div>
//                 <div className='Fourcard-para'>
//                     <hr className='Fourcard-line'/>
//                     <p className='color-white'>{para}</p>
//                 </div>
//           </div>
//         ))
//     }
    
//     </div>
//   )
// }

// export default FourCard
import React from 'react';
import './FourCard.css';
import { Fourcards } from '../../../Api/Data';

interface CardItem {
  id: number;
  img: string;
  para: string;
}

const FourCard: React.FC = () => {
  const cards: CardItem[] = Fourcards(); // Ensure that `Fourcards` returns an array of `CardItem`.

  return (
    <div className='Fourcard-all'>
      {cards.map(({ id, img, para }) => (
        <div className='Fourcard' key={id}>
          <div className='Fourcard-img'>
            <img src={img} alt='four card images' />
          </div>
          <div className='Fourcard-para'>
            <hr className='Fourcard-line' />
            <p className='color-white'>{para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FourCard;

