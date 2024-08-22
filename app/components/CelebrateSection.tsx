"use client";

// components/CelebrateSection.tsx
import React, { useState } from "react";

const CelebrateSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("School Memories");

  const renderContent = () => {
    switch (activeTab) {
      case "School Memories":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <img
              src="/images/school-memory-1.webp"
              alt="School Memory 1"
              className="w-full h-auto"
            />
            <img
              src="/images/school-memory-2.jpg"
              alt="School Memory 2"
              className="w-full h-auto"
            />
            <img
              src="/images/school-memory-3.jpg"
              alt="School Memory 3"
              className="w-full h-auto"
            />
          </div>
        );
      case "Child's Creations":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {/* Replace with actual images for this tab */}
            <img
              src="/images/child-creation-1.webp"
              alt="Child's Creation 1"
              className="w-full h-auto"
            />
            <img
              src="/images/child-creation-2.webp"
              alt="Child's Creation 2"
              className="w-full h-auto"
            />
            <img
              src="/images/child-creation-3.webp"
              alt="Child's Creation 3"
              className="w-full h-auto"
            />
          </div>
        );
      case "Personal Memories":
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {/* Replace with actual images for this tab */}
            <img
              src="/images/personal-memory-1.webp"
              alt="Personal Memory 1"
              className="w-full h-auto"
            />
            <img
              src="/images/personal-memory-2.jpg"
              alt="Personal Memory 2"
              className="w-full h-auto"
            />
            <img
              src="/images/personal-memory-3.jpg"
              alt="Personal Memory 3"
              className="w-full h-auto"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 p-4  mt-20">
      <section className="max-w-5xl mx-auto my-12 ">
        <h2 className="text-[50px] md:text-5xl font-extrabold text-center mb-4">
          Celebrate Your Child
        </h2>
        <p className="text-lg md:text-xl text-center mb-8">
          From the first day of school to the proud graduation, every play and
          activity holds a story. Our personalized yearbook is a celebration of
          your child's discoveries, friendships, and growth.
        </p>
        <div className="text-center font-bold mb-8">
          <p className="text-lg md:text-xl">Here are some sample pages</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => setActiveTab("School Memories")}
              className={`${
                activeTab === "School Memories" ? "border-b-2 border-black" : ""
              } pb-2 text-lg md:text-xl font-semibold`}
            >
              School Memories
            </button>
            <button
              onClick={() => setActiveTab("Child's Creations")}
              className={`${
                activeTab === "Child's Creations"
                  ? "border-b-2 border-black"
                  : ""
              } pb-2 text-lg md:text-xl font-semibold`}
            >
              Child's Creations
            </button>
            <button
              onClick={() => setActiveTab("Personal Memories")}
              className={`${
                activeTab === "Personal Memories"
                  ? "border-b-2 border-black"
                  : ""
              } pb-2 text-lg md:text-xl font-semibold`}
            >
              Personal Memories
            </button>
          </div>
        </div>
        {renderContent()}
      </section>
    </div>
  );
};

export default CelebrateSection;
