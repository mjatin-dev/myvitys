"use client";
import { useState } from "react";

//Components
import YearbookSection from "./components/YearbookSection";
import HowItWorksSection from "./components/HowItsWorksSection";
import CelebrateSection from "./components/CelebrateSection";
import YearbookEmail from "./components/EmailInputSection";
import TestimonialsSection from "./components/TestimonalSection";
import CustomMessage from "./components/CustomeMessage";
import ReviewConfirm from "./components/ReviewConfirm";
import InvitationSection from "./components/InvaitionSection";

export default function Home() {
  const [isHome, setIsHome] = useState<Boolean>(true);
  return (
    <div className="bg-white">
      {isHome ? (
        <InvitationSection setIsHome={setIsHome} />
      ) : (
        <>
          <YearbookSection />
          <HowItWorksSection />
          <CelebrateSection />
          <CustomMessage />
          <YearbookEmail />
          <ReviewConfirm />
          <TestimonialsSection />
        </>
      )}
    </div>
  );
}
