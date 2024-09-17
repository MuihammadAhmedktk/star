import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VideoItem } from './types'; // Make sure this import path is correct

interface VideoAllProps {
  videos: VideoItem[]; // Ensure this matches your VideoItem type
}

const VideoAll: React.FC<VideoAllProps> = ({ videos }) => {
  const [visibleCount, setVisibleCount] = useState<number>(5);
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState<boolean>(window.matchMedia("(max-width: 768px)").matches);

  const showMore = () => {
    setVisibleCount(prevCount => prevCount + 2);
  };

  const removeMore = () => {
    setVisibleCount(5);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrSmaller(window.matchMedia("(max-width: 768px)").matches);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const truncateText = (text: string, maxWords: number) => {
    const words = text.split(' ');
    if (isTabletOrSmaller && words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className='video_button-Adjust'>
      <div className='videoall_All'>
        {videos.slice(0, visibleCount).map(({ id, img, text, link, time }) => (
          <div key={id} className='videoall_card'>
            <div className='img_card'>
              <img src={img} alt='' />
            </div>
            <div className='videoall_card_text'>
            <Link to={link || '/'}>
  <hr />
</Link>

              <p className='color-white'>{truncateText(text, 5)}</p>
            </div>
            <p className='color-white times'>{time}</p>
          </div>
        ))}
      </div>
      <div className='button-container'>
        {videos.length > 0 ? (
          visibleCount < videos.length ? (
            <button onClick={showMore}>Show More</button>
          ) : (
            <button onClick={removeMore}>Show Less</button>
          )
        ) : (
          <p className='color-white'>No videos available</p>
        )}
      </div>
    </div>
  );
};

export default VideoAll;
