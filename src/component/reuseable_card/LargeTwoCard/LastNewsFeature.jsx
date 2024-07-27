import React from 'react'
import './LastNewsFeature.css'
import img0 from "../../../assests/featureCard/the-acolyte-highlights-teach-corrupt_article-feature_23fa6b1a.jpeg"
import video1 from "../../../assests/video_img/main (1).mp4"
import { Card } from '../../../Api/Data'
const LastNewsFeature = ({ showVideo }) => {
  const Single = [
    {
      id: 1,
      type: showVideo ? 'video' : 'image',
      src: showVideo ? video1 : img0,
      text: "The Acolyte Explained | Highlights from Teach/ Corrupt"
    }
  ];

  return (
    <div>
      <div className='feature-card'>
        {Single.map(({ id, type, src, text }) => (
          <div key={id} className='feature-card-first'>
            <div className="media-card color-white">
              {type === 'video' ? (
                <video controls className="media-element">
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={src} alt="" className="media-element" />
              )}
            </div>
            <div className="text-card color-white">
              <p>{text}</p>
            </div>
          </div>
        ))}

        <div className='feature-card-second'>
          {Card.map(({ id, type, src, text }) => (
            <div key={id} className='cards'>
              <div className="media-card">
                {type === 'image' ? (
                  <img src={src} alt="" className="media-element" />
                ) : (
                  <video controls className="media-element">
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              <div className="text-card color-white">
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LastNewsFeature;