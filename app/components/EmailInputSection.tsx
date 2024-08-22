"use client";

import Image from "next/image";
import React, { useState } from "react";

const YearbookEmail: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [price, setPrice] = useState<25 | 30 | 35>(25);
  const [quantity, setQuantity] = useState<1 | 2 | 3 | 4>(1);

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <div className="max-w-[550px]">
          <h1 className="text-[50px] font-bold mb-6">
            Create Your Child's Personalized Yearbook
          </h1>
          <div className="flex flex-col items-center bg-white p-8 rounded-lg">
            <Image
              src="/images/parents.png"
              alt="Parents"
              className="mb-4 w-200 h-auto"
              width={200}
              height={200}
            />
            <div className="mt-4">
              <input
                type="email"
                className="border border-gray-300 rounded px-4 py-2 h-[60px] w-[400px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-gray-500 text-center bg-gray-100 text-[14px] p-2">
                We will use your email to set up your account. After completing
                your purchase and activating your account, you can start adding
                personal memories and preserve those special moments forever. If
                you already have an account with us, please use the same email
                address to ensure seamless access.
              </p>
            </div>
          </div>

          <div className="mt-6 backdrop-blur-sm">
            <h2 className="text-[32px] font-bold mb-4 backdrop-blur-sm">Enter Child's Info</h2>
            <div className="bg-white w-full rounded-lg">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-300 rounded px-4 py-2 w-[400px] h-[60px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Middle name"
                className="border border-gray-300 rounded px-4 py-2 w-[400px] h-[60px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-300 rounded px-4 py-2 w-[400px] h-[60px] mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <p className="text-[11px] text-left ml-[75px]">
                * Your child's first name and last name are required
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-[32px] font-semibold mb-2">Select Gender</h3>
            <div className="flex justify-center gap-4">
              <button
                className={`border-4 rounded p-2 ${
                  gender === "female" ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setGender("female")}
              >
                <Image
                  src="/images/girl.webp"
                  alt="Female"
                  className="w-[150px] h-auto"
                  width={100}
                  height={24}
                />
              </button>
              <button
                className={`border-4 rounded p-2 ${
                  gender === "male" ? "border-blue-500" : "border-gray-300"
                }`}
                onClick={() => setGender("male")}
              >
                <Image
                  src="/images/male.webp"
                  alt="Male"
                  className="w-[150px] h-auto"
                  width={100}
                  height={24}
                />
              </button>
            </div>
          </div>

          <div className="mt-20">
            <div className="min-h-screen flex flex-col items-center justify-center py-8 bg-white">
              <div className="">
                <h1 className="text-[32px] font-bold text-center mb-8">
                  Select Cover
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div
                    className={`border-4 w-[180px] ${
                      price === 25 ? "border-blue-500" : "border-gray-300"
                    } p-4 rounded-md text-center`}
                    onClick={() => setPrice(25)}
                  >
                    <h2 className="text-sm font-semibold">Saddle Stitch</h2>
                    <p className="text-gray-500 text-[12px]">32 pages</p>
                    <p className="text-[40px] font-bold mt-4">$25.00</p>
                    <p className="text-[12px] mt-2 text-600">
                      Staple-bound for a clean and simple finish
                    </p>
                  </div>
                  <div
                    className={`border-4 w-[180px] ${
                      price === 30 ? "border-blue-500" : "border-gray-300"
                    } p-4 rounded-md text-center`}
                    onClick={() => setPrice(30)}
                  >
                    <h2 className="text-sm font-semibold">Perfect Bind</h2>
                    <p className="text-gray-500 sm text-[12px]">32 pages</p>
                    <p className="text-[40px] font-bold mt-4">$30.00</p>
                    <p className="text-[12px] mt-2 text-600">
                      Smooth, flat spine for a polished look
                    </p>
                  </div>
                  <div
                    className={`border-4 w-[180px] ${
                      price === 35 ? "border-blue-500" : "border-gray-300"
                    } p-4 rounded-md text-center`}
                    onClick={() => setPrice(35)}
                  >
                    <h2 className="text-sm font-semibold">Hardcover</h2>
                    <p className="text-gray-500 text-[12px]">32 pages</p>
                    <p className="text-[40px] font-bold mt-4">$35.00</p>
                    <p className="text-[12px] mt-2 text-600">
                      Sturdy, long lasting with a protective hardcover
                    </p>
                  </div>
                </div>

                <div className="mt-20">
                  <h2 className="text-[32px] font-bold text-center mb-4">
                    Select Quantity
                  </h2>
                  <div className="flex justify-center mb-8">
                    <Image
                      src="/images/grand-parents.png"
                      alt="Grandparents with books"
                      className="w-48 h-auto"
                      width={200}
                      height={200}
                    />
                  </div>
                  <p className="text-center text-gray-700 mb-4">
                    Your child's personalized year book is a perfect gift for
                    grandparents and loved ones. Every page unfolds a memory,
                    creating a timeless keepsake for loved ones to cherish.
                  </p>
                  <p className="text-center text-sm text-black mb-8 font-[16px] font-extrabold">
                    Get 20% discount on additional copies
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    className={`w-[90px] h-[90px] text-[36px] border-4 ${
                      quantity === 1 ? "border-blue-500" : "border-gray-300"
                    } font-bold rounded-md`}
                    onClick={() => setQuantity(1)}
                  >
                    1
                  </button>
                  <button
                    className={`w-[90px] h-[90px] text-[36px] border-4 ${
                      quantity === 2 ? "border-blue-500" : "border-gray-300"
                    } font-bold rounded-md`}
                    onClick={() => setQuantity(2)}
                  >
                    2
                  </button>
                  <button
                    className={`w-[90px] h-[90px] text-[36px] border-4 ${
                      quantity === 3 ? "border-blue-500" : "border-gray-300"
                    } font-bold rounded-md`}
                    onClick={() => setQuantity(3)}
                  >
                    3
                  </button>
                  <button
                    className={`w-[90px] h-[90px] text-[36px] border-4 ${
                      quantity === 4 ? "border-blue-500" : "border-gray-300"
                    } font-bold rounded-md`}
                    onClick={() => setQuantity(4)}
                  >
                    4
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[400px] mt-20 px-4">
              {/* Sibling Yearbook Section */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12">
                <Image
                  src="/images/sibling.webp"
                  alt="Siblings hugging"
                  className="w-32 h-auto mx-auto mb-4"
                  width={100}
                  height={100}
                />
                <h1 className="text-2xl font-bold mb-4">
                  Get a personalized yearbook for siblings
                </h1>
                <div className="text-left">
                  <label className="block mb-2 text-[14px]">
                    <input
                      type="radio"
                      name="siblingOption"
                      value="sameSchool"
                      className="mr-2"
                      defaultChecked
                    />
                    My child attends the same school
                  </label>
                  <label className="block mb-2 text-[14px]">
                    <input
                      type="radio"
                      name="siblingOption"
                      value="graduatedSameSchool"
                      className="mr-2"
                    />
                    My child has graduated from the same school
                  </label>
                  <label className="block mb-4 text-[14px]">
                    <input
                      type="radio"
                      name="siblingOption"
                      value="differentSchool"
                      className="mr-2"
                    />
                    My child goes to or has graduated from a different school
                  </label>
                </div>
                <a
                  href="#"
                  className="text-blue-500 font-semibold hover:underline"
                >
                  Add another child
                </a>
              </div>

              {/* Select Shipping Section */}
              <h2 className="text-[32px] font-bold text-center mb-4 mt-20">
                Select Shipping
              </h2>
              <p className="text-center text-gray-700 mb-6">
                Your Personalized Yearbook will be delivered at the end of the
                school year. We will keep you updated along the way.
              </p>

              <div className="border border-gray-300 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    {" "}
                    <h3 className="font-semibold">Ship to Home</h3>
                    <p className="text-sm text-gray-500 ml-[-26px]">
                      5 to 7 days
                    </p>
                  </div>

                  <h3 className="font-semibold">$6.99</h3>
                </div>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Suite #"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Street"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="City"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <div className="flex space-x-3">
                  {" "}
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearbookEmail;
