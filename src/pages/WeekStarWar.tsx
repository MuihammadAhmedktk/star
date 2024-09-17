import React from 'react';
import BannerWeek from '../component/BannerWeek/BannerWeek';
import LastNewsFeature from '../component/reuseable_card/LargeTwoCard/LastNewsFeature';
import LastNew from '../component/LastNew/LastNew';
import { ThisWeekInStarWars } from '../Api/Data';
import CardSlider from '../component/CardSlider/CardSlider';
import img11 from "../assets/silder/thr-quiz-sw2-hero-desktop_25adae14.jpeg";
import Video from "../assets/video_img/main (1).mp4";

// Define types for LastNewsDetail items
interface LastNewsDetailItem {
  id: number;
  videoSrc: string;
  isVideo: boolean;
  videoImg: string;
  text: string;
  link: string;
  time: string;
}

const LastNewsDetail: LastNewsDetailItem[] = [
  {
    id: 1,
    videoSrc: Video,
    isVideo: true,
    videoImg: img11,
    text: "Quiz: Which High Republic Job Is Right for You?",
    link: '/#',
    time: '0:12',
  },
  {
    id: 2,
    videoSrc: Video,
    isVideo: true,
    videoImg: img11,
    text: "The Acolyte Explained | Highlights from Day",
    link: '/#',
    time: '0:14',
  },
  {
    id: 3,
    link: 'https://www.example.com',
    videoSrc: Video,
    isVideo: true,
    videoImg: img11,
    text: "Visit Example Website",
    time: '0:19',
  }
];

const WeekStarWar: React.FC = () => {
  return (
    <div>
      <BannerWeek />
      <div className='pad-r-l-all'>
        <div className='heading-h2'>
          <h2 className='color-white'>Latest Episode | This Week! in Star Wars</h2>
          <div>
            <hr />
          </div>
        </div>
        <LastNewsFeature showVideo={true} />
        <div className='heading-h2'>
          <h2 className='color-white'>More Episodes</h2>
          <div>
            <hr />
          </div>
        </div>
        <LastNew LastNewsDetail={LastNewsDetail} />
        <div className='heading-h2'>
          <h2 className='color-white'>News + Feature</h2>
          <div>
            <hr />
          </div>
        </div>
        <CardSlider CardDetail={ThisWeekInStarWars} />
      </div>
    </div>
  );
};

export default WeekStarWar;
