import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Zoom Rent-A-Car",
    reviewer: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review: "This was my first time renting through Car Rental Express and with Zoom Rent-A-Car. I was very impressed with the ease of booking the car, the customer service, and the overall experience. The service upon return was very efficient as was the ride to the airport.",
    rating: 5
  },
  {
    name: "EZ Rent A Car",
    reviewer: "Jane Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review: "Good experience from pick-up to return. Our quote was honored, and we were given an upgrade at no additional cost.",
    rating: 4
  },
  {
    name: "Airport Rent A Car",
    reviewer: "Robert Brown",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review: "I was looking for the least expensive deal possible which I found with Airport Rent A Car. I went in skeptical but left pleased with everything.",
    rating: 4
  },
  {
    name: "Hubber",
    reviewer: "Emily Davis",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review: "Great experience! My rental was upgraded with no extra charge. The car was clean, fully fueled, and stocked with water bottles. Definitely the best car rental experience in LA I've had.",
    rating: 5
  },
  {
    name: "United Auto Rental",
    reviewer: "Michael Johnson",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review: "The car we received was a bit worn around the edges but was fine for what we needed. The staff were excellent, helpful, and the shuttle service was prompt.",
    rating: 3
  },
  {
    name: "American Car Rental",
    reviewer: "Sarah Wilson",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    review: "Very pleasant staff! Helped with directions and had nice personalities. Everyone I saw had a smile! Thank you!",
    rating: 5
  }
];

const StarRating = ({ rating }) => (
  <div className="flex items-center">
    {[...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} 
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative min-h-screen bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-3">
              Customer Testimonials
            </h2>
            <p className="text-blue-600 text-lg max-w-xl mx-auto">
              Hear from our satisfied customers who've experienced exceptional service
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 overflow-y-auto max-h-[calc(100vh-200px)] pb-8 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.reviewer}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.reviewer}</p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 mt-3 text-sm leading-relaxed italic">"{testimonial.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;