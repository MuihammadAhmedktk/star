import React, { useState } from 'react';
import './Fearure_card_re.css';

interface CardDetailItem {
  Img: string;
  text: string;
  date: string;
}

interface FeatureCardReProps {
  CardDetail: CardDetailItem[];
}

const FeatureCardRe: React.FC<FeatureCardReProps> = ({ CardDetail }) => {
  const [visableCount, setVisableCount] = useState<number>(8);

  const showMore = () => {
    setVisableCount((prevCount) => prevCount + 4);
  };

  const removeMore = () => {
    setVisableCount(8);
  };

  return (
    <div>
      <div className='morenews'>
        {CardDetail.slice(0, visableCount).map((item, index) => (
          <div className="news_card" key={index}>
            <div className="news_card_img">
              <img src={item.Img} alt="news" />
            </div>
            <div className="news_card_text">
              <p>{item.text}</p>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='btn-adjust'>
        {visableCount < CardDetail.length ? (
          <button onClick={showMore}>Show More</button>
        ) : (
          <button onClick={removeMore}>Show Less</button>
        )}
      </div>
    </div>
  );
};

export default FeatureCardRe;
