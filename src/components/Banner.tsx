import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl py-5 text-gray-800 lg:text-6xl ">
          Ana&apos;s {' '}
          <span className="underline decoration-4 decoration-red-900">Daily Blog</span>
        </h1>
        <h2 className="mt-2 lg:mt-0 text-xl lg:text-xl text-gray-700">
          Discover a World of Ideas: Your Gateway to Insightful Perspectives, Engaging Stories, and Inspiring Discoveries!
        </h2>
      </div>
    </div>
  );
}

export default Banner;
