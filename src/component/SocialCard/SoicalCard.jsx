import React, { useEffect, useState } from 'react';
import  "./SoicalCard.css";
import { SoicalData } from '../../Api/Data';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardBtnslider from '../CardBtnslider';


const SoicalCard = () => {
  const [project, setProject] = useState(SoicalData [0]);

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.activeIndex;
    setProject(SoicalData[currentSlide]);
    setTimeout(() => {
      const cards = document.querySelectorAll('.Movie_card');
      let maxHeight = 0;

      cards.forEach(card => {
        card.style.height = 'auto';
        const height = card.offsetHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
      });
    }, 0); // Recalculate height after slide change
  };
  useEffect(() => {
    const setEqualHeight = () => {
      const cards = document.querySelectorAll('.Soical_card');
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

    setEqualHeight();
    window.addEventListener('resize', setEqualHeight);

    return () => {
      window.removeEventListener('resize', setEqualHeight);
    };
  }, [SoicalData]);
    
  return (
    <div className='Soical_card-all '>
        <Swiper
        slidesPerView={5} // Default to 3 slides per view
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
        {SoicalData.map((item,index) => {
          return <SwiperSlide key={index}>
                <div className='Soical_card'>
            <div className='Social_card_img'>
              <img src={item.img} alt='Social_card img' />
            </div>
            <div className='Soical_card_text text_line'>
              <a href={item.link}><hr /></a>
              <p>{item.text}</p>
            </div>
          </div>
          </SwiperSlide>
        })}
        <CardBtnslider  />
      </Swiper>
    </div>
  )
}

export default SoicalCard
