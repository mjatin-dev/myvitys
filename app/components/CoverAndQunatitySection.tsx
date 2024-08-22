"use client";

import React, { useState } from 'react';

const SelectCoverAndQuantity: React.FC = () => {
  const [coverType, setCoverType] = useState<string>('Perfect Bind');
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Select Cover</h2>
        <div className="flex justify-around mb-8">
          {['Saddle Stitch', 'Perfect Bind', 'Hardcover'].map((type) => (
            <button
              key={type}
              className={`border rounded p-4 ${coverType === type ? 'border-blue-500' : 'border-gray-300'}`}
              onClick={() => setCoverType(type)}
            >
              <p className="text-center font-semibold">{type}</p>
              <p className="text-center">${type === 'Saddle Stitch' ? '25.00' : type === 'Perfect Bind' ? '30.00' : '35.00'}</p>
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Select Quantity</h2>
        <div className="flex justify-around">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className={`border rounded p-4 ${quantity === num ? 'border-blue-500' : 'border-gray-300'}`}
              onClick={() => setQuantity(num)}
            >
              {num}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center mt-8">
          <img src="/path-to-your-image.png" alt="Family reading book" className="mb-4 w-32 h-32"/>
          <p className="text-gray-500 text-center">
            Your child's personalized year book is a perfect gift for grandparents and loved ones. Every page unfolds a memory, creating a timeless keepsake for loved ones to cherish.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectCoverAndQuantity;
