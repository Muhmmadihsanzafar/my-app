import React, { useState } from "react";

// Tooth icon (logo)
const ToothIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
    className={`w-8 h-8 text-sky-300 ${props.className || ""}`}
  >
    <path
      d="M16 3c-4.5 0-8.5 3.5-8.5 8.5 0 6.5 2.5 13.5 4.5 16.5 1 1.5 3 1.5 4 0 2-3 4.5-10 4.5-16.5C24.5 6.5 20.5 3 16 3z"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.15"
    />
    <path
      d="M12 11c0-2.2 1.8-4 4-4s4 1.8 4 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Social icons (simple SVGs)
const InstagramIcon = (props) => (
  <svg
    {...props}
    className={`w-6 h-6 ${props.className || ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <rect
      x="2.5"
      y="2.5"
      width="19"
      height="19"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg
    {...props}
    className={`w-6 h-6 ${props.className || ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M20.5 12.5c0 4.418-3.582 8-8 8a7.96 7.96 0 01-4.01-1.09L3.5 20.5l1.09-4.01A7.96 7.96 0 015.5 12.5c0-4.418 3.582-8 8-8s8 3.582 8 8z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M8.5 11.5c.5 1.5 2 3 3.5 3.5M12 15c2.5 0 4.5-2 4.5-4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const TelegramIcon = (props) => (
  <svg
    {...props}
    className={`w-6 h-6 ${props.className || ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M21 3L3.5 10.5c-.7.3-.7 1.3 0 1.6l4.2 1.7 1.7 4.2c.3.7 1.3.7 1.6 0L21 3z"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.12"
    />
    <path
      d="M8.5 12.5l2.5 2.5 2.5-5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#0a1833] pt-12 pb-6 px-4 md:px-0">
      {/* Logo and Socials */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-2 mb-3">
          <ToothIcon />
          <span className="text-2xl font-extrabold text-sky-100 tracking-tight">
            Bright<span className="text-sky-400">Smile</span>
          </span>
        </div>
        <div className="flex gap-5">
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-200 hover:text-sky-400 transition"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://wa.me/"
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-200 hover:text-sky-400 transition"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="https://telegram.org/"
            aria-label="Telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-200 hover:text-sky-400 transition"
          >
            <TelegramIcon />
          </a>
        </div>
      </div>
      {/* Main Cards */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 justify-center">
        {/* Clinic Hours */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[260px] text-center shadow-lg border border-white/10">
          <h3 className="text-lg font-bold text-sky-100 mb-3 tracking-wide">
            Clinic Hours
          </h3>
          <ul className="text-sky-50/90 text-sm mb-3 space-y-1">
            <li>Sunday - Thursday: <span className="font-semibold">9 AM - 8 PM</span></li>
            <li>Friday: <span className="font-semibold">4 AM - 9 PM</span></li>
            <li>Saturday: <span className="font-semibold text-sky-300">Closed</span></li>
          </ul>
          <div className="text-xs text-sky-200/80 italic">
            Emergency services available 24/7
          </div>
        </div>
        {/* Contact Us */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[260px] text-center shadow-lg border border-white/10">
          <h3 className="text-lg font-bold text-sky-100 mb-3 tracking-wide">
            Contact Us
          </h3>
          <ul className="text-sky-50/90 text-sm mb-3 space-y-1">
            <li>
              <a href="tel:+123456789" className="hover:text-sky-300 transition">
                +1 (234) 567-89
              </a>
            </li>
            <li>
              <a href="mailto:info@brightsmile.com" className="hover:text-sky-300 transition">
                info@brightsmile.com
              </a>
            </li>
            <li>
              123 Dental Avenue,<br />
              Health District, City
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className="flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 min-w-[260px] text-center shadow-lg border border-white/10">
          <h3 className="text-lg font-bold text-sky-100 mb-3 tracking-wide">
            Dental Tips Newsletter
          </h3>
          <p className="text-sky-50/90 text-sm mb-4">
            Subscribe to receive oral health tips and special offers
          </p>
          <form
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubscribe}
            autoComplete="off"
          >
            <div className="flex w-full flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-3 py-2 rounded-lg bg-white/20 text-sky-100 placeholder-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2 bg-gradient-to-r from-sky-500 to-sky-700 text-white font-bold rounded-lg shadow hover:from-sky-600 hover:to-sky-800 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
          {subscribed && (
            <div className="mt-2 text-xs text-green-300 font-semibold">
              Thank you for subscribing!
            </div>
          )}
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-sky-200/80">
        &copy; {new Date().getFullYear()} BrightSmile. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
