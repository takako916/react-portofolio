import React, { useState, useEffect } from 'react';

const OptimizedImage = ({ src, alt, className, ...props }) => {
  const [loaded, setLoaded] = useState(false);

  // 画像のプリロード
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <div className={`image-container ${loaded ? 'loaded' : ''}`}>
      <img
        src={src}
        alt={alt}
        className={`optimized-image ${className || ''}`}
        loading="lazy"
        {...props}
      />
      {!loaded && <div className="image-placeholder" />}
    </div>
  );
};

export default OptimizedImage; 