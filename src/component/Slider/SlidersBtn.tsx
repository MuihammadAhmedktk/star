import React from 'react';
import './Silder.css';
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

// Add props for className
interface SlidersBtnProps {
    className?: string;
}

const SlidersBtn: React.FC<SlidersBtnProps> = ({ className }) => {
    const swiper = useSwiper();

    return (
        <div className={`containerStyles ${className || ''}`}>
            <button className="btnStyles" onClick={() => swiper.slidePrev()}>
                <PiCaretLeftBold className="iconStyles" />
            </button>
            <button className="btnStyles" onClick={() => swiper.slideNext()}>
                <PiCaretRightBold className="iconStyles" />
            </button>
        </div>
    );
};

export default SlidersBtn;


