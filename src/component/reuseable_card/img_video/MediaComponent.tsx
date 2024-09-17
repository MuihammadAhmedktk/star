import React from 'react';

interface MediaComponentProps {
  type: 'image' | 'video';
  src: string;
  alt?: string;
  text: string;
  className?: string;
  imgClassName?: string;
  textClassName?: string;
}

const MediaComponent: React.FC<MediaComponentProps> = ({
  type,
  src,
  alt,
  text,
  className,
  imgClassName,
  textClassName,
}) => {
  return (
    <div className={className}>
      {type === 'image' ? (
        <img className={imgClassName} src={src} alt={alt || 'image'} />
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
