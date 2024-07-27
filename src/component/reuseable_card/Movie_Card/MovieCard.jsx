import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './MovieCard.css';

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

const MovieCard = ({CardDetail}) => {
  useEffect(() => {
    const setEqualHeight = () => {
      const cards = document.querySelectorAll('.Movie_card');
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className='Movie_card-all '>
      <Slider {...settings}>
        {CardDetail.map(({ id, img, text, para, link,esp }) => (
          <div key={id} className='Movie_card'>
            <div className='Movie_card_img'>
              <img src={img} alt='Movie_card img' />
            </div>
            <div className='Movie_card_text'>
              <a href={link}><hr /></a>
              <p>{text}</p>
              <p className='para'>{para}</p>
            </div>
            {esp && <p className='guide-esp color-white'>{esp}</p>}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MovieCard;
