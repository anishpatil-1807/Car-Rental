import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import carImage from '../assets/car.png';
import skylineImage from '../assets/skyline.png';

const Hero = () => {
  const navigate = useNavigate();
  
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  // Handle button clicks
  const handleButtonClick = (e, path) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="lg:fixed lg:inset-0 w-full min-h-screen bg-gradient-to-r from-blue-200 to-blue-50">
      <style>
        {`
          @keyframes slideInFromRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
          
          .slide-in-right {
            animation: slideInFromRight 1s ease-out forwards;
          }
        `}
      </style>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-left lg:pr-12 pt-8 lg:pt-0">
            <h2 className="text-lg font-medium text-blue-600">Plan your trip now</h2>
            
            <h1 className="text-6xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Save <span className="text-blue-600">big</span> with our
              <br /> car rental
            </h1>
            
            <p className="text-base lg:text-lg text-gray-700 max-w-lg">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Book Ride Button with redirection if not authenticated */}
              <button 
                onClick={(e) => handleButtonClick(e, '/book-ride')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-md
                hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 text-base sm:text-lg font-medium"
              >
                Book Ride
                <span className="w-2 h-2 bg-white rounded-full"></span>
              </button>
              
              {/* Learn More Button with redirection if not authenticated */}
              <button 
                onClick={(e) => handleButtonClick(e, '/about')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-md
                hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2 text-base sm:text-lg font-medium"
              >
                Learn More
                <span className="transform rotate-90">›</span>
              </button>
            </div>
          </div>
          
          {/* Right Column - Car and Skyline Images */}
          <div className="relative z-10 flex justify-end mt-8 lg:mt-0">
            <div className="relative w-full flex justify-end">
              {/* Skyline (Behind Car) */}
              <img 
                src={skylineImage}
                alt="City Skyline"
                className="absolute bottom-8 lg:bottom-16 left-1/2 transform -translate-x-1/2 lg:-translate-x-68 w-[120%] opacity-30"
              />
              
              {/* Car (In Front) */}
              <div className="relative w-full max-w-sm lg:max-w-lg slide-in-right">
                <img 
                  src={carImage}
                  alt="Car Image"
                  className="w-full object-contain transform translate-x-4 lg:translate-x-0
                  hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;