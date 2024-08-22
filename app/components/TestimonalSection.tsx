"use client";

// components/TestimonialsSection.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Ms. Safia",
    title: "Owner",
    imageSrc: "/images/person-1.png", // Replace with the correct image path
    quote: `I wanted to take a moment to express my heartfelt appreciation for the exceptional personalized memory books MyVity provided for the children at our preschool. As a preschool owner, I was truly impressed by the level of personalization and the profound impact these books had on both the children and their parents. The reaction from parents was incredible. I witnessed firsthand how a few parents were moved to tears as they flipped through the pages of their child's personalized memory book. These books not only captured precious moments but also became a tangible symbol of their child's growth and milestones during their time at our preschool. I recommend MyVity's Personalized Memory Books to all schools and I am truly grateful for the joy and nostalgia they have brought to our preschool community.`,
  },
  {
    id: 2,
    name: "Ms. Renuka",
    title: "Owner",
    imageSrc: "/images/person-2.jpeg", // Replace with the correct image path
    quote: `We are thrilled to share our wonderful experience with MyVity, as they masterfully brought to life stunningly beautiful and uniquely personalized keepsake books for our students. The entire process was not only remarkably straightforward but also remarkably hands-off for our staff, thanks to MyVity's team handling of every detail. Their seamless and intuitive process created this one-of-a-kind keepsake without burdening our staff with additional tasks. MyVity's team took charge of every aspect, leaving us astounded by their efficiency and dedication. What truly sets MyVity apart is the level of personalization they achieved for each child. Every page of these books radiates the uniqueness of each student, capturing their journey, achievements, and growth during their preschool years. We would highly recommend MyVity to other schools.`,
  },
  // Add more testimonials as needed
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Our Customers Love Us</h2>
        <p className="text-lg text-gray-700 mb-12">
          Personalized Memory Book that preserves childhood memories and is
          effortless to create. What else can you ask for?
        </p>

        <div className="flex gap-4">
          {" "}
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-center bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-full flex justify-center mb-6 md:mb-0">
                <Image
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  width={150}
                  height={150}
                  className="rounded-md"
                />
              </div>
              <div className="w-full md:px-2 mt-4">
                <div className="text-left">
                  {" "}
                  <p className="text-gray-600 italic mb-4">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="mt-12">
                  <p className="text-gray-900 font-bold">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
