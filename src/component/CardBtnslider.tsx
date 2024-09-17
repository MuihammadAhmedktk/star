import React from 'react';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

interface CardBtnsliderProps {
  className?: string; // Optional className prop
}

const CardBtnslider: React.FC<CardBtnsliderProps> = () => {
  const swiper = useSwiper();
  
  return (
    <div className="btnSlider"> {/* Apply className here */}
      <button className="btnStyles" onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className="iconStyles" />
      </button>
      <button className="btnStyles" onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className="iconStyles" />
      </button>
    </div>
  );
};

export default CardBtnslider;
