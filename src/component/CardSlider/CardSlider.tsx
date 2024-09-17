import React, { useEffect } from 'react';
import './CardSlider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardBtnslider from '../CardBtnslider';

interface CardDetailType {
  id:number;
  img: string;
  link?: string;
  text?: string;
  para?: string;
  esp?: string;
}

interface CardSliderProps {
  CardDetail: CardDetailType[];
}

const CardSlider: React.FC<CardSliderProps> = ({ CardDetail }) => {

  useEffect(() => {
    const setEqualHeight = () => {
      const cards = document.querySelectorAll('.Movie_card');
      let maxHeight = 0;

      cards.forEach(card => {
        const cardElement = card as HTMLElement; // Cast to HTMLElement
        cardElement.style.height = 'auto'; // Reset height to auto
        const height = cardElement.getBoundingClientRect().height;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      cards.forEach(card => {
        const cardElement = card as HTMLElement; // Cast to HTMLElement
        cardElement.style.height = `${maxHeight}px`;
      });
    };

    setEqualHeight();
    window.addEventListener('resize', setEqualHeight);

    return () => {
      window.removeEventListener('resize', setEqualHeight);
    };
  }, [CardDetail]);

  const handleSlideChange = () => {
    setTimeout(() => {
      const cards = document.querySelectorAll('.Movie_card');
      let maxHeight = 0;

      cards.forEach(card => {
        const cardElement = card as HTMLElement; // Cast to HTMLElement
        cardElement.style.height = 'auto';
        const height = cardElement.getBoundingClientRect().height;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      cards.forEach(card => {
        const cardElement = card as HTMLElement; // Cast to HTMLElement
        cardElement.style.height = `${maxHeight}px`;
      });
    }, 0); // Recalculate height after slide change
  };

  return (
    <div className='Movie_card-all'>
      <Swiper
        slidesPerView={3} // Default to 3 slides per view
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
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {CardDetail.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='Movie_card'>
              <div className='Movie_card_img'>
                <img src={item.img} alt='Movie card img' />
              </div>
              <div className='Movie_card_text'>
                <a href={item.link}><hr /></a>
                <p>{item.text}</p>
                <p className='para'>{item.para}</p>
              </div>
              {item.esp && <p className='guide-esp color-white'>{item.esp}</p>}
            </div>
          </SwiperSlide>
        ))}
        <CardBtnslider  />
      </Swiper>
    </div>
  );
};

export default CardSlider;
