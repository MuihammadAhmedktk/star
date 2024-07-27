import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewFeature.css"
import { NewsDetail } from '../../Api/Data';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }
const NewFeature = () => {

    useEffect(() => {
        const setEqualHeight = () => {
          const cards = document.querySelectorAll('.News_card');
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
      }, []);
    
      const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 10000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div>
    
      <div className='News_card-all'>
      <Slider {...settings}>
        {NewsDetail.map(({ id, img, text, para, link }) => (
          <div key={id} className='News_card'>
            <div className='News_card_img'>
              <img src={img} alt='News_card img' />
            </div>
            <div className='News_card_text text_line'>
              <a href={link}><hr /></a>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    </div>
  )
}

export default NewFeature
