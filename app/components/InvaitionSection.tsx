import Image from "next/image";
import { FC } from "react";

interface InvitationSectionProps {
  setIsHome: (value: boolean) => void;
}

const InvitationSection: FC<InvitationSectionProps> = ({ setIsHome }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        True North Early Learning Academy at Pinecrest
      </h1>
      <p className="text-md md:text-lg text-center mt-4">
        invites you to buy your child's Personalized Yearbook and preserve
        growing up memories forever.
      </p>
      <p className="text-md md:text-lg text-center mt-2 text-gray-600 max-w-lg">
        MyVity is an AI powered service that automatically creates your child's
        personalized yearbook. Parents just need to provide some basic info
        about the child and MyVity does the rest.
      </p>
      <div className="mt-10 cursor-pointer">
        <Image src="/images/arrow.png" width={40} height={40} alt="" onClick={() => setIsHome(false)} />
      </div>
    </div>
  );
};

export default InvitationSection;
