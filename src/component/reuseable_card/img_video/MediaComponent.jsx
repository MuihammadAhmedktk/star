import React from 'react';

const MediaComponent = ({ type, src, alt, text, className, imgClassName, textClassName }) => {
  return (
    <div className={className}>
      {type === 'image' ? (
        <img className={imgClassName} src={src} alt={alt} />
      ) : (
        <video className={imgClassName} controls>
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className={textClassName}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MediaComponent;

//   <div className='feature-card'>
//     {Single.map(({ id, type,src, text }) => (
//       <MediaComponent
//         key={id}
//         type={type}
//         src={src}
//         alt={text}
//         text={text}
//         className="feature-card-first"
//         imgClassName="image-card img-first"
//         textClassName="text-card text-first color-white"
//       />
//     ))}
