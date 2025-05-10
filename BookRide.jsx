import React from "react";

const BookRide = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white p-8 lg:p-16 w-full min-h-screen rounded-2xl shadow-2xl transition duration-300 hover:shadow-3xl">
      {/* Left Section - Booking Form */}
      <div className="lg:w-1/2 w-full px-4">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-black mb-4">
          Request a ride now or schedule for later
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          Enter your trip details, confirm, and enjoy a smooth ride.
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter pickup location"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none text-lg"
          />
          <input
            type="text"
            placeholder="Enter destination"
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none text-lg"
          />

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition text-lg font-medium shadow-md w-full sm:w-auto">
              See prices
            </button>
            <button className="bg-gray-200 px-6 py-3 rounded-lg hover:bg-gray-300 transition text-lg font-medium shadow-md w-full sm:w-auto">
              Schedule for later
            </button>
          </div>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center px-4">
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png"
          alt="Ride Illustration"
          className="w-full max-w-lg rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default BookRide;