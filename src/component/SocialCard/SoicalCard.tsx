import React, { useEffect } from 'react';
import './SoicalCard.css';
import { SoicalData } from '../../Api/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardBtnslider from '../CardBtnslider';

// Define the type for each social data item
interface SocialItem {
  img: string;
  link: string;
  text: string;
}

const SoicalCard: React.FC = () => {
  const adjustCardHeight = () => {
    const cards = document.querySelectorAll<HTMLDivElement>('.Social_card');
    let maxHeight = 0;

    cards.forEach(card => {
      card.style.height = 'auto'; // Reset height to auto
      const height = card.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    cards.forEach(card => {
      card.style.height = `${maxHeight}px`;
    });
  };

  const handleSlideChange = () => {
    // Adjust card height after slide change
    requestAnimationFrame(adjustCardHeight);
  };

  useEffect(() => {
    adjustCardHeight();
    window.addEventListener('resize', adjustCardHeight);

    return () => {
      window.removeEventListener('resize', adjustCardHeight);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <div className='Soical_card-all'>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
      >
        {SoicalData.map((item: SocialItem, index: number) => (
          <SwiperSlide key={index}>
            <div className='Social_card'>
              <div className='Social_card_img'>
                <img src={item.img} alt='Social card img' />
              </div>
              <div className='Social_card_text text_line'>
                <a href={item.link}><hr /></a>
                <p>{item.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <CardBtnslider />
      </Swiper>
    </div>
  );
};

export default SoicalCard;
