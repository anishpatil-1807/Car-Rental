'use client'

import React from 'react';

const Detail = () => {
  const pricingOptions = [
    { type: 'Economy', withDriver: '₹2,500/day', withoutDriver: '₹1,800/day' },
    { type: 'SUV', withDriver: '₹3,800/day', withoutDriver: '₹2,800/day' },
    { type: 'Luxury', withDriver: '₹7,500/day', withoutDriver: '₹6,200/day' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-50 to-white">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Heading */}
        <h2 className="text-center mb-10 pt-8">
          <span className="text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Pricing</span>
          <span className="text-blue-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> Details</span>
        </h2>

        {/* Pricing Table */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-xl w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2 sm:p-4 text-sm sm:text-base md:text-lg font-semibold text-gray-700">Car Type</th>
                <th className="p-2 sm:p-4 text-sm sm:text-base md:text-lg font-semibold text-gray-700">With Driver</th>
                <th className="p-2 sm:p-4 text-sm sm:text-base md:text-lg font-semibold text-gray-700">Without Driver</th>
              </tr>
            </thead>
            <tbody>
              {pricingOptions.map((option, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 transition-colors duration-300">
                  <td className="p-2 sm:p-4 text-sm sm:text-base text-gray-900 font-medium">{option.type}</td>
                  <td className="p-2 sm:p-4 text-sm sm:text-base text-blue-600 font-semibold">{option.withDriver}</td>
                  <td className="p-2 sm:p-4 text-sm sm:text-base text-blue-600 font-semibold">{option.withoutDriver}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fuel & Rental Policy */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6">
          {/* Petrol Policy */}
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Petrol Policy</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Vehicles must be returned with the same fuel level as when rented. Extra fuel used will be charged 
              accordingly at standard rates.
            </p>
          </div>

          {/* Rental Conditions */}
          <div className="p-4 sm:p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Rental Conditions</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              A valid driving license is required for self-drive rentals. Security deposits apply 
              and will be refunded upon return.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Detail;