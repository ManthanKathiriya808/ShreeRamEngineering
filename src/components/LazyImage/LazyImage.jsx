import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';

const LazyImage = ({ 
  src, 
  alt, 
  className = "w-full h-48 object-cover rounded-t-lg", 
  effect = "blur",
  placeholderSrc = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YTNhZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+",
  ...props 
}) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      effect={effect}
      placeholderSrc={placeholderSrc}
      threshold={200}
      loading="lazy"
      delayMethod="throttle"
      delayTime={300}
      {...props}
    />
  );
};

export default LazyImage;
