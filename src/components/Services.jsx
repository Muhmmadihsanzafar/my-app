import React from "react";
import { Brush, Smile, X, XSquare } from "lucide-react";

// If nothing shows up after adding this page, check the following:
// 1. Make sure Services is imported and used in App.jsx (it is, according to your context).
// 2. Make sure lucide-react is installed: run `npm install lucide-react`.
// 3. Make sure Tailwind CSS is set up and working (your index.css looks correct).
// 4. Make sure there are no errors in the browser console.

// NOTE: Some icons like 'Tooth', 'Toothbrush', and 'XRay' may not exist in lucide-react.
// The following icons are used as alternatives: Brush (for Toothbrush), Smile, X (for XRay), XSquare (for Digital X-Rays).

const services = [
  {
    icon: <Smile className="w-10 h-10 text-sky-500 mb-4" />,
    title: "Comprehensive Dental Exam",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <Brush className="w-10 h-10 text-sky-500 mb-4" />,
    title: "Professional Teeth Cleaning",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <Smile className="w-10 h-10 text-sky-500 mb-4" />,
    title: "Cosmetic Dentistry",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    icon: <XSquare className="w-10 h-10 text-sky-500 mb-4" />,
    title: "Digital X-Rays",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-sky-800 mb-4 text-center">
          Our Dental Services
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          We offer a wide range of dental services to keep your smile healthy and beautiful. Our experienced team is dedicated to providing gentle, comprehensive care for patients of all ages.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-sky-50 rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-sky-700 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
