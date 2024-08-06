import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from 'react-modal';
import { CiPlay1 } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { fetchLastNewsDetail } from '../../Redux/Slice/lastNewSlice';
import { Videos } from '../../Api/Data';
import "./LastNew.css";

Modal.setAppElement('#root');

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
};

const LastNew = () => {
  const dispatch = useDispatch();
  const { data: LastNewsDetail, status } = useSelector((state) => state.lastNew);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSource, setCurrentSource] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLastNewsDetail());
    }
  }, [status, dispatch]);

  const openModal = (videoSrc) => {
    if (videoSrc) {
      setSelectedVideo(videoSrc.url || Videos());
      setCurrentSource(videoSrc.sources ? videoSrc.sources[0]?.url : videoSrc.url);
      setModalIsOpen(true);
    } else {
      console.error('No video source provided');
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
    setCurrentSource(null);
  };

  const setEqualHeight = () => {
    const cards = document.querySelectorAll('.LastNew_card');
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
  };

  useEffect(() => {
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
      <div className='LastNew-all' id='LastNew-all'>
        <Slider {...settings}>
          {LastNewsDetail.map(({ id, videoSrc, time, text, para, link, videoImg }) => (
            <div key={id} className='LastNew_card'>
              <div className='LastNew_card_img'>
                <img src={videoImg} alt={text} onClick={() => openModal(videoSrc)} style={{ cursor: 'pointer' }} />
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
            overlayClassName="video-modal-overlay"
          >
            <button onClick={closeModal} id='close-button'><MdClose /></button>
            <div className="video-container">
              <div className="video-player">
                <video ref={videoRef} controls>
                  <source src={currentSource || selectedVideo} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default LastNew;
