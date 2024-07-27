import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import { CiPlay1 } from "react-icons/ci";
import "./LastNew.css";
Modal.setAppElement('#root');
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
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const LastNew = ({LastNewsDetail}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  const openModal = (videoSrc, isVideo) => {
    setSelectedVideo(videoSrc);
    setIsVideo(isVideo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  useEffect(() => {
    const setEqualHeight = () => {
      const cards = document.querySelectorAll('.LastNew_card');
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
    infinite: false,
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
      <div className='LastNew-all ' id='LastNew-all'>
        <Slider {...settings}>
          {LastNewsDetail.map(({ id, videoSrc,time, text,para, link, videoImg, isVideo }) => (
            <div key={id} className='LastNew_card'>
              <div className='LastNew_card_img'>
                <img src={videoImg} alt={text} onClick={() => openModal(videoSrc, isVideo)} style={{ cursor: 'pointer' }} />
              </div>
              <div className="playbutton">
              <CiPlay1 className='play-icon' />
              </div>
              <div className='LastNew_card_text text_line'>
                {link ? <a href={link}><hr /></a> : null}
                <p className='color-white'>{text}</p>
                <p className='color-white'>{para}</p>
              </div>
              <p className='time color-white'>{time}</p>
            </div>
          ))}
        </Slider>

        {selectedVideo && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Selected Video'
            className="video-model"
            id='model-video'
            overlayClassName="video-modal-overly"
          >
            <button onClick={closeModal} className='close-button'>Close</button>
            <div className="video-container">
              {isVideo ? (
                <video width="100%" height="100vh" controls>
                  <source src={selectedVideo} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  width="100%"
                  height="auto"
                  src={selectedVideo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Video"
                ></iframe>
              )}
            </div>
          </Modal>
        )}
      </div>
    </div>
  )
}

export default LastNew;