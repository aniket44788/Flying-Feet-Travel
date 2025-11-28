import React from "react";
import "./Content1.css";

import travel from "../Tour Images/travel.jpeg";
import triund from "../Tour Images/triund.jpeg";
import kedarnath from "../Tour Images/kedarnath.jpeg";

export default function Content1() {
  const data = [
    {
      title: "Triund Trek",
      image: triund,
      description:
        "A scenic and beginner-friendly trek offering breathtaking Dhauladhar mountain views. Ideal for adventure and camping lovers.",
      highlights: [
        "9 km scenic trail",
        "Dhauladhar range views",
        "Night camping experience",
      ],
    },
    {
      title: "Kedarnath Yatra",
      image: kedarnath,
      description:
        "A holy pilgrimage located in the Himalayas, known for its ancient Shiva temple and serene mountain surroundings.",
      highlights: [
        "Shri Kedarnath Temple",
        "High-altitude spiritual trek",
        "Divine Himalayan atmosphere",
      ],
    },
    {
      title: "Dharamshala Travel",
      image: travel,
      description:
        "A peaceful hill town known for Tibetan culture, monasteries, beautiful cafes, and the residence of the Dalai Lama.",
      highlights: [
        "McLeod Ganj",
        "Dalai Lama Temple",
        "Waterfalls & scenic cafes",
      ],
    },
  ];

  return (
    <div className="w-full flex justify-center py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-white/90 backdrop-blur-sm hover:bg-white overflow-hidden hover:-translate-y-3 group card-hover"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold rounded-full shadow-md">
                Featured
              </span>
            </div>

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-9">

              {/* Title Row */}
              <div className="flex items-center justify-between px-5 py-3 mb-6 border-l-4 border-blue-500 rounded bg-white shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight 
             group-hover:text-blue-700 transition-colors duration-300 leading-snug pr-2">
                  {item.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base line-clamp-3 px-2">
                {item.description}
              </p>

              {/* Highlights Section */}
              <div className="mb-8 px-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-blue-600 rounded-full shadow-sm"></span>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    Key Highlights
                  </h3>
                </div>

                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  {item.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 group-hover:text-gray-900 transition-colors duration-300 pl-1"
                    >
                      <i className="fas fa-check text-green-500 mt-1 text-sm flex-shrink-0"></i>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-indigo-500/10 transition-all duration-500 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}   