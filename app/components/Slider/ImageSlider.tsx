'use client';

import React from 'react';
import Image from 'next/image';
import firstImg from '@/public/img/Sushi_Club_slide_447e87e6cf.jpg';

const ImageSlider = () => {
  return (
    <div className="relative w-full h-screen  overflow-hidden">
      <Image src={firstImg} alt="First image" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex items-center justify-between px-4 ">
        <button className="bg-transparent text-white px-4 py-2 rounded-md">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="bg-transparent text-white px-4 rounded-md">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l7-7-7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-white"></div>
        <div className="w-3 h-3 rounded-full  border-white border-2 bg-transparent"></div>
        <div className="w-3 h-3 rounded-full border-white  border-2 bg-transparent"></div>
      </div>
    </div>
  );
};

export default ImageSlider;