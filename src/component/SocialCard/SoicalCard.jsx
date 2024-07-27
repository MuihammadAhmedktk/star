import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "./SoicalCard.css";
import { SoicalData } from '../../Api/Data';



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
const SoicalCard = () => {
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
      }, []);
    
      const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
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
              slidesToShow: 5,
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
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },{
            breakpoint:425,
            settings:{
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ],
      };
  return (
    <div className='Soical_card-all '>
        <Slider {...settings}>
        {SoicalData.map(({ id, img, text, link }) => (
          <div key={id} className='Soical_card'>
            <div className='Social_card_img'>
              <img src={img} alt='Social_card img' />
            </div>
            <div className='Soical_card_text text_line'>
              <a href={link}><hr /></a>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SoicalCard
