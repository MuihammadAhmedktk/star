import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../ExploreMore/ExploreNews.css"
import img1 from "../../assests/silder/thr-quiz-sw2-hero-desktop_25adae14.jpeg"
import img2 from "../../assests/silder/thr-quiz-sw2-hero-desktop_25adae14.jpeg"
import img3 from "../../assests/silder/the-acolyte-104-highlights_article-feature_c2671ca5.jpeg"

const ExploreMoreDetail =[
    {
        id: 1,
        img: img1,
        text: "Quiz: Which High Republic Job Is Right for You?",
        link: '/#'
      },
      {
        id: 2,
        img: img2,
        text: "The Acolyte Explained | Highlights from Day",
        link: '/#'
      },
      {
        id: 3,
        img: img3,
        text: "Grammy Award-Winner Victoria Monet Lends Her Voice to The Acolyte"
      }
]
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

const NewFeature= () => {
    useEffect(() => {
        const setEqualHeight = () => {
          const cards = document.querySelectorAll('.ExploreMore_card');
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
        
        
<div className='ExploreMore-all '>

<Slider {...settings}>
  {ExploreMoreDetail.map(({ id, img, text, link }) => (
    <div key={id} className='ExploreMore_card'>
      <div className='ExploreMore_card_img'>
        <img src={img} alt='LastNew card img' />
      </div>
      <div className='ExploreMore_card_text text_line'>
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


