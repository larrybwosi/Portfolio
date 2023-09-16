import React from 'react';
import { content } from './Content';
import Image from 'next/image';

const LandingPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div
        className="bg-cover bg-center w-1/2 animate-slide-in "
        style={{ backgroundImage: content.home.image2 }}
      >
        <div className='bg-red-400 rounded-full mt-10 h-auto '>
        <Image
         src={content.home.image3 } 
         alt='My Image' 
         className="w-1/2 h-1/2 rounded-full m-4 "
          width={500} height={300}
        />
        </div>
      </div>
      <div className="bg-green-900 w-1/2 flex items-center justify-center">
        <div className="p-10">
          <h1 className="text-4xl font-bold mb-6">Welcome to my landing page</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel bibendum bibendum, elit nulla
            bibendum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;