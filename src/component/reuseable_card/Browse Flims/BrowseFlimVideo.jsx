import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrowseFlimVideo = ({ videos }) => {
    const [visibleCount, setVisibleCount] = useState(5);
    const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(window.matchMedia("(max-width: 768px)").matches);

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

    const truncateText = (text, maxWords) => {
        const words = text.split(' ');
        if (isTabletOrSmaller && words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return text;
    };

    return (
        <div className='browser-flim-all-above'>
            <div className='browser-flim-all'>
                {videos.slice(0, visibleCount).map(({ id, img, text, link, time }) => (
                    <div key={id} className='browser-flim-card'>
                        <div className='browser-flim-img-card'>
                            <img src={img} alt='' />
                        </div>
                        <div className='browser-flim-card-text'>
                            <Link to={link}><hr /></Link>
                            <p className='color-white'>{truncateText(text, 5)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='button-container'>
                {videos && videos.length > 0 ? (
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

export default BrowseFlimVideo;

