import React from "react";
import { Phone } from "lucide-react";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full bg-gradient-to-br from-sky-100 via-white to-sky-200 py-20 md:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-sky-200 opacity-40 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[28rem] h-[28rem] bg-sky-400 opacity-30 rounded-full blur-3xl z-0 animate-pulse" />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-12 relative z-10">
        {/* Mobile: Hero Image on Top */}
        <div className="block md:hidden w-full flex items-center justify-center mb-8">
          <div className="relative bg-white rounded-3xl shadow-2xl p-3">
            <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200 via-sky-100 to-sky-300 rounded-3xl blur-2xl opacity-60 z-0" />
            <img
              src={heroImg}
              alt="Hero"
              className="relative max-w-sm w-full h-auto object-contain rounded-2xl border-4 border-sky-100 shadow-lg z-10"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
        {/* Left: Heading, Paragraph, and Button */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center mb-10 md:mb-0">
          <h2 className="text-5xl md:text-6xl font-extrabold text-sky-800 mb-6 leading-tight text-left drop-shadow-lg">
            Brighten your
            <span className="text-sky-500 underline decoration-wavy decoration-2 underline-offset-4">smile</span>
            <br />
            with <span className="text-sky-500 bg-gradient-to-r from-sky-400 to-sky-600 bg-clip-text text-transparent">Expert Dental</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Welcome to <span className="font-semibold text-sky-600">Ihsan Dental</span>, where your care come first.<br className="hidden md:block" /> Experience modern dentistry with a gentle touch.
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-700 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:from-sky-600 hover:to-sky-800 transition-all duration-200 text-lg ring-2 ring-sky-200 hover:ring-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-300"
          >
            <Phone className="w-5 h-5 animate-bounce" />
            Book Appointment
          </a>
        </div>
        {/* Right: Hero Image with Glow (Desktop only) */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
          <div className="relative bg-white rounded-3xl shadow-2xl p-3 md:p-8">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-sky-200 via-sky-100 to-sky-300 rounded-3xl blur-2xl opacity-60 z-0" />
            <img
              src={heroImg}
              alt="Hero"
              className="relative max-w-sm md:max-w-lg lg:max-w-xl w-full h-auto object-contain rounded-2xl border-4 border-sky-100 shadow-lg z-10"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;