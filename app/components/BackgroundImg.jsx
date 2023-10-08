import React from 'react';
import { background } from 'public/images/adrien-olichon.jpg';
import Image from 'next/image';
const BackgroundImg = () => {
  return (
    <Image
      src='/images/adrien-olichon.jpg'
      alt='backgroundimg'
      layout='fill'
      quality={100}
      objectFit='cover'
      sizes='100vw'
      style={{
        zIndex: -1,
      }}
    />
  );
};

export default BackgroundImg;
