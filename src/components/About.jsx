import React from "react";
import { User } from "lucide-react";
import aboutImg from "../assets/About.png";

/**
 * About component for the Dental Clinic 'About Us' page.
 */
const About = ({
  imageSrc = aboutImg,
  heading = "About Our Clinic",
  body = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod. Etiam euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  ]
}) => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-br from-sky-50 via-white to-sky-100 py-20 md:py-28 font-sans"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Circular Image */}
        <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/2 mb-10 md:mb-0">
          <div
            className="rounded-full bg-white shadow-xl border-4 border-sky-100 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden mx-auto"
            aria-hidden="true"
          >
            <img
              src={imageSrc}
              alt="Dentist examining a patient"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Right: Heading and Text */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center">
          <h2
            id="about-heading"
            className="flex items-center text-4xl md:text-5xl font-extrabold text-sky-800 mb-6"
          >
            <span className="inline-flex items-center justify-center bg-sky-100 rounded-full p-2 mr-3">
              <User className="w-7 h-7 text-sky-500" aria-hidden="true" />
            </span>
            {heading}
          </h2>
          {body.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-lg text-gray-700 mb-5 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
