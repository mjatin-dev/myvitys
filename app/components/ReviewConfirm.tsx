import Image from "next/image";
import React from "react";

type BookDetails = {
  name: string;
  coverType: string;
  gender: string;
  quantity: number;
};

const ReviewConfirm: React.FC = () => {
  const books: BookDetails[] = [
    {
      name: "Jatin Mehta",
      coverType: "Saddle Stitch",
      gender: "Girl",
      quantity: 4,
    },
    {
      name: "Jatin Mehta",
      coverType: "Hardcover",
      gender: "Boy",
      quantity: 1,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center w-full mt-20">
      <div className="w-[600px]">
        <h2 className="text-[50px] font-bold mb-4">Review & Confirm</h2>
        <p className="mb-6 text-[22px]">
          We will use the information you have provided to create your
          personalized memory book. Please take a moment to review everything
          and make sure it's correct.
        </p>

        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="space-y-4 w-[500px]">
            {books.map((book, index) => (
              <div
                key={index}
                className="flex justify-between items-center border p-4 rounded-md"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/personal-memory-1.webp"
                    alt="Book Cover"
                    width={100}
                    height={100}
                  />
                  <div className="text-left">
                    <p className="font-bold text-[18px]">{book.name}</p>
                    <p className="text-[14px]">{book.coverType}</p>
                    <p className="text-[14px]">{`Gender: ${book.gender}`}</p>
                    <div className="flex space-x-2 mt-2">
                      <button className="text-blue-600 hover:underline">
                        Edit
                      </button>
                      <button className="text-blue-600 hover:underline">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <p className="">{`Qty: ${book.quantity}`}</p>
                </div>
              </div>
            ))}

            <div className="mt-6 w-[500px] text-left">
              <label className="inline-flex items-center space-x-2 text-[12px]">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span>
                  By checking this box, you are giving permission to True North
                  Early Learning Academy at Pinecrest to share your child's
                  pictures with MyVity for the Personalized Memory Book.
                </span>
              </label>
            </div>

            <div className="mt-4 text-left">
              <label className="inline-flex items-center space-x-2 text-[12px]">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span>
                  I confirm that the information I have provided is accurate and
                  understand it will be used by MyVity to personalize my child's
                  yearbook.
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-blue-600 text-white px-8 py-2 rounded-[26px]">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default ReviewConfirm;
