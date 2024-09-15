import React, { useState } from 'react';

import Carousel from 'nuka-carousel';
import Image from 'next/image';

type Image = {
  original: string;
  thumbnail: string;
};
type ImageCarouselProps = {
  images: Image[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center">
      <Carousel animation="fade" autoplay withoutControls wrapAround speed={10} slideIndex={index}>
        {images.map((img) => (
          <Image key={img.original} src={img.thumbnail} alt={'image'} width={1000} height={600} />
        ))}
      </Carousel>
      <div className="flex">
        {images.map((img, idx) => (
          <Image
            key={img.original}
            src={img.thumbnail}
            alt={'image'}
            width={80}
            height={60}
            onClick={() => setIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
}
