"use client";
// components/YearbookSection.tsx
import Image from "next/image";
import React from "react";

const YearbookSection: React.FC = () => {
  return (
    <section className="text-center my-12">
      {/* Header Section */}
      <h1 className="text-4xl font-bold mb-2">
        <span role="img" aria-label="heart">
          ❤️
        </span>
        Your Child's Personalized Yearbook
      </h1>
      <p className="text-gray-600">
        Fully automated.
        <br />
        Highly personalized.
      </p>

      {/* Image Grid Section */}
      <div className="flex justify-center space-x-6 mt-8">
        {/* Image 1 */}
        <div className="max-w-xs">
          <Image
            src="/images/halloween.webp"
            alt="Happy Halloween"
            className="rounded shadow-lg"
            width={300}
            height={200}
          />
        </div>
        {/* Image 2 */}
        <div className="max-w-xs">
          <Image
            src="/images/personalized-yearbook.jpg"
            alt="Personalized Yearbook"
            className="rounded shadow-lg"
            width={300}
            height={200}
          />
        </div>
        {/* Image 3 */}
        <div className="max-w-xs">
          <Image
            src="/images/the-artist.jpg"
            alt="The Artist"
            className="rounded shadow-lg"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default YearbookSection;
