import React, { useState } from "react";

// Import images from assets
import man1 from "../assets/man1.png";
import woman1 from "../assets/woman1.png";
import man2 from "../assets/man2.png";
import woman2 from "../assets/woman2.png";
import woman3 from "../assets/woman3.png";

const testimonialData = [
  {
    name: "Amine Ouali",
    image: man1,
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quibusdam optio earum reiciendis, iusto nisi saepe iste! Esse dolorem consectetur, cupiditate commodi numquam id vel officia aspernatur iure hic tenetur.",
  },
  {
    name: "Sarah Benali",
    image: woman1,
    quote:
      "I had a wonderful experience! The staff was friendly and the dentist explained everything clearly. Highly recommend this clinic.",
  },
  {
    name: "Youssef El Amrani",
    image: man2,
    quote:
      "Professional and caring service. My teeth have never felt better. Thank you for your excellent care!",
  },
  {
    name: "Lina Toumi",
    image: woman2,
    quote:
      "From booking to treatment, everything was smooth and comfortable. I appreciate the attention to detail and kindness.",
  },
  {
    name: "Meriem Haddad",
    image: woman3,
    quote:
      "The best dental experience I've ever had. The clinic is spotless and the team is amazing. I will definitely return.",
  },
];

const Star = ({ filled }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <polygon
      strokeLinecap="round"
      strokeLinejoin="round"
      points="12 17.25 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.25"
    />
  </svg>
);

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  // Add state for showing a modal or alert for "Share Your Experience"
  const [showShare, setShowShare] = useState(false);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonialData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonialData.length - 1 ? 0 : prev + 1));
  };

  const { name, image, quote } = testimonialData[current];

  // Handler for the Share button
  const handleShareClick = () => {
    // For demonstration, show a simple alert or you could open a modal
    // You can replace this with a modal or a form as needed
    alert("Thank you for wanting to share your experience! This feature is coming soon.");
    // Or, if you want to show a modal, setShowShare(true);
  };

  return (
    <section
      id="testimonial"
      className="w-full bg-gradient-to-br from-sky-50 via-white to-sky-100 py-20 md:py-28 font-sans min-h-screen flex flex-col items-center"
      aria-labelledby="testimonial-heading"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Main Heading */}
        <h1
          id="testimonial-heading"
          className="text-4xl md:text-5xl font-extrabold text-sky-800 mb-3 text-center"
        >
          Patient Testimonials
        </h1>
        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
        </p>
        {/* Testimonial Card */}
        <div className="relative w-full max-w-xl">
          {/* Navigation Arrows */}
          <button
            aria-label="Previous testimonial"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-sky-100 shadow hover:bg-sky-50 rounded-full p-2 transition-all duration-150 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-sky-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="bg-white rounded-2xl shadow-xl px-8 py-10 flex flex-col items-center text-center">
            <div className="flex flex-col items-center mb-4">
              <img
                src={image}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-4 border-sky-100 shadow mb-2"
              />
              <span className="text-xs text-sky-500 font-semibold mb-1">
                Patient
              </span>
              <span className="text-lg font-bold text-sky-800">{name}</span>
            </div>
            {/* 5-Star Rating */}
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} filled={true} />
              ))}
            </div>
            {/* Quote */}
            <blockquote className="text-gray-700 text-lg leading-relaxed mb-2">
              “{quote}”
            </blockquote>
          </div>
          <button
            aria-label="Next testimonial"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-sky-100 shadow hover:bg-sky-50 rounded-full p-2 transition-all duration-150 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-sky-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {/* Share Your Experience Button */}
        <button
          className="mt-10 bg-gradient-to-r from-sky-500 to-sky-700 text-white px-8 py-3 rounded-full font-bold shadow hover:from-sky-600 hover:to-sky-800 transition-all duration-200"
          onClick={handleShareClick}
        >
          Share Your Experience
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
