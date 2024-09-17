import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { CiPlay1 } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { fetchLastNewsDetail } from '../../Redux/Slice/lastNewSlice';
// import { Videos } from '../../Api/Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardBtnslider from '../CardBtnslider';
import './LastNew.css';
// Define the AppDispatch type for useDispatch
import { AppDispatch, RootState } from '../../store';

// Define types for video items
interface VideoItem {
  url?: string;
  sources?: { url: string }[];
  videoImg: string;
  text: string;
  link?: string;
  para?: string;
  time?: string;
  videoSrc?: string | { url: string; sources: { url: string }[] };
}

// Define the props interface
interface LastNewProps {
  LastNewsDetail: VideoItem[];
}


Modal.setAppElement('#root');

const LastNew: React.FC<LastNewProps> = ({LastNewsDetail}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useSelector((state: RootState) => state.lastNew);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentSource, setCurrentSource] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLastNewsDetail());
    }
  }, [status, dispatch]);

  const openModal = (videoSrc: VideoItem) => {
    let sourceUrl: string | null = null;

    if (typeof videoSrc.videoSrc === 'string') {
      sourceUrl = videoSrc.videoSrc;
    } else if (videoSrc.videoSrc && typeof videoSrc.videoSrc === 'object') {
      sourceUrl = videoSrc.videoSrc.url;
    } else if (videoSrc.sources && videoSrc.sources.length > 0) {
      sourceUrl = videoSrc.sources[0]?.url || null;
    }

    if (sourceUrl) {
      setSelectedVideo(sourceUrl);
      setCurrentSource(sourceUrl);
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

  return (
    <div>
      <div className='LastNew-all' id='LastNew-all'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            375: { slidesPerView: 1, spaceBetween: 20 },
            425: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {LastNewsDetail.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='LastNew_card'>
                <div className='LastNew_card_img'>
                  <img 
                    src={item.videoImg} 
                    alt={item.text} 
                    onClick={() => openModal(item)} 
                    style={{ cursor: 'pointer' }} 
                  />
                </div>
                <div className="playbutton">
                  <CiPlay1 
                    className='play-icon' 
                    onClick={() => openModal(item)} 
                    style={{ cursor: 'pointer' }} 
                  />
                </div>
                <div className='LastNew_card_text text_line'>
                  {item.link ? <a href={item.link}><hr /></a> : null}
                  <p className='color-white'>{item.text}</p>
                </div>
                <p className='time color-white'>{item.time}</p>
              </div>
            </SwiperSlide>
          ))}
          <CardBtnslider className={'LastNew_btn'} />
        </Swiper>

        {selectedVideo && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Selected Video'
            className="video-model"
            overlayClassName="video-modal-overlay"
          >
            <button onClick={closeModal} id='close-button'>
              <MdClose />
            </button>
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

