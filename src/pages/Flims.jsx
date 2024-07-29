import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchVideos } from '../Redux/Slice/videoSlice';
import BannerTwoBtn from '../component/BannerTwoBtn/BannerTwoBtn';
import LastNewsFeature from '../component/reuseable_card/LargeTwoCard/LastNewsFeature';
import BrowseFlim from '../component/reuseable_card/Browse Flims/BrowseFlim';
import { ClipLoader } from 'react-spinners';

const Flims = () => {
  const dispatch = useDispatch();
  const { videoData, menuOptions, loading } = useSelector((state) => state.videos);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);
  useEffect(() => {
    if (!loading) {
      setIsLoading(false);
    }
  }, [loading]);

  if (isLoading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#FFFFFF" size={50} />
      </div>
    );
  }
  return (
    <div className='pad-r-l-all'>
      <BannerTwoBtn />
      <div className='heading-h2'>
        <h2 className='color-white'>Latest News + Feature</h2>
        <div>
          <hr />
        </div>
      </div>
      <LastNewsFeature />
      <div className='heading-h2'>
        <h2 className='color-white'>Browse Flims</h2>
        <div>
          <hr />
        </div>
      </div>
      <BrowseFlim menuOptions={menuOptions} videoData={videoData} loading={loading} />
    </div>
  );
};

export default Flims;
