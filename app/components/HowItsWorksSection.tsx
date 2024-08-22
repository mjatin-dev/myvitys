// components/HowItWorksSection.tsx
import React from "react";

const HowItWorksSection: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto mt-40">
      <h2 className="text-[50px] font-bold text-center mb-8">How it Works ?</h2>

      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <div className="text-3xl">✨</div>
          <p className="border-b border-gray-300 pb-4">
            Every child gets their own personalized yearbook, reflecting their
            specific memories and experiences at home and at school.
          </p>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-3xl">🖼️</div>
          <p className="border-b border-gray-300 pb-4">
            We collect photos from your school. You have the option to choose
            the photos you want to include in the book.
          </p>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-3xl">✔️</div>
          <p className="border-b border-gray-300 pb-4">
            We design and create your personalized yearbook so you don't have to
            do any work, you want to include in the book.
          </p>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-3xl">❤️</div>
          <p className="border-b border-gray-300 pb-4">
            <strong>OPTIONAL:</strong> Add memories from vacations, family
            gatherings, or moments with loved ones and preserve those memories
            forever.
          </p>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-3xl">✏️</div>
          <p className="border-b border-gray-300 pb-4">
            <strong>OPTIONAL:</strong> Include personal messages and heartfelt
            notes, adding a personal touch that will be cherished for years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
