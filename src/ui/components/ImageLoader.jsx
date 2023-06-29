import React, { useEffect, useState, useContext } from 'react'
import { SearchContext } from '../../SearchContext.js';

const ImageLoader = () => {

   const { isLoading, currentIndex, setCurrentIndex } = useContext(SearchContext);

const imageUrls = [
  'https://i.ibb.co/5LPBZXz/men-find-map-backpack.png',
  'https://i.ibb.co/t2MGd9G/man-kneeling-map-park.png',
  'https://i.ibb.co/6Zw6Jbm/woman-look-celllphone-coat.png',
  'https://i.ibb.co/0MVMHjq/man-reading-map-sunglasses.png',
  'https://i.ibb.co/nr70N4b/man-sitting-bench-laptop.png',
  'https://i.ibb.co/YRNx4tB/man-confused-map.png',
  'https://i.ibb.co/drDN1tm/woman-calling-read-sidewalk.png',
  'https://i.ibb.co/sVTbhsJ/woman-reading-beach-map.png'
];

const [selectedImageUrl, setSelectedImageUrl] = useState(imageUrls[0]);

//select a new image to export for each error that renders in results page
useEffect(() => {
    if ((currentIndex + 1) > imageUrls.length-1)
    {
      let nextIndex = 0;
      setSelectedImageUrl(imageUrls[nextIndex]);
      setCurrentIndex(nextIndex);
    }
    else {
      let nextIndex = currentIndex + 1;
      setSelectedImageUrl(imageUrls[nextIndex]);
      setCurrentIndex(nextIndex);
    }
  }, [isLoading]);

  return (
    <img src={selectedImageUrl} alt="Random Image" style={{ maxWidth: '260px' }}/>
  );
}

export default ImageLoader