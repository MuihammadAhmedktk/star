import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { CiPlay1 } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { fetchLastNewsDetail } from '../../Redux/Slice/lastNewSlice';
import { Videos } from '../../Api/Data';
import "./LastNew.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardBtnslider from '../CardBtnslider';

Modal.setAppElement('#root');

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

  const handleSlideChange = (swiper) => {
    // You can use swiper.activeIndex if needed
    // e.g., to log the current slide index or fetch additional data
    // console.log('Slide changed to:', swiper.activeIndex);
  };

  return (
    <div>
      <div className='LastNew-all' id='LastNew-all'>
        <Swiper
          slidesPerView={3} // Default to 3 slides per view
          spaceBetween={30}
          onSlideChange={handleSlideChange} // Update this line to use the correct Swiper prop
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
          {LastNewsDetail.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='LastNew_card'>
                <div className='LastNew_card_img'>
                  <img src={item.videoImg} alt={item.text} onClick={() => openModal(item.videoSrc)} style={{ cursor: 'pointer' }} />
                </div>
                <div className="playbutton">
                  <CiPlay1 className='play-icon' onClick={() => openModal(item.videoSrc)} style={{ cursor: 'pointer' }} />
                </div>
                <div className='LastNew_card_text text_line'>
                  {item.link ? <a href={item.link}><hr /></a> : null}
                  <p className='color-white'>{item.text}</p>
                  <p className='color-white'>{item.para}</p>
                </div>
                <p className='time color-white'>{item.time}</p>
              </div>
            </SwiperSlide>
          ))}
          <CardBtnslider />
        </Swiper>

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
