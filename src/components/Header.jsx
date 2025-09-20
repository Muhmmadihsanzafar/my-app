import { Hospital, Menu, Phone } from "lucide-react";
import { useState } from "react";

const navCenter = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#tips", label: "Tips" },
  { href: "#testimonial", label: "Testimonial" },
];

const bookAppointment = { href: "#book", label: "Book Appointment" };

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="scroll-mt-20 bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between py-3 px-3 sm:py-4 sm:px-6 lg:px-12">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <div className="bg-sky-100 rounded-full p-2 shadow-sm">
            <Hospital className="w-8 h-8 text-sky-600" />
          </div>
          <span className="text-2xl font-extrabold text-sky-700 tracking-tight drop-shadow-sm">
            Ihsan <span className="text-sky-500">Dental</span>
          </span>
        </div>
        {/* Desktop Navigation Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex space-x-8 text-gray-700 font-semibold">
            {navCenter.map((item) => (
              <a
                href={item.href}
                key={item.href}
                className="relative px-2 py-1 hover:text-sky-600 transition-colors duration-200 after:content-[''] after:block after:h-0.5 after:bg-sky-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        {/* Book Appointment Button (Desktop) */}
        <div className="hidden md:flex items-center">
          <a
            href={bookAppointment.href}
            className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-700 text-white px-5 py-2 rounded-full font-bold shadow hover:from-sky-600 hover:to-sky-800 transition-all duration-200"
          >
            <Phone className="w-5 h-5" />
            {bookAppointment.label}
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            className="p-2 rounded-full bg-sky-50 hover:bg-sky-100 transition shadow"
          >
            <Menu className="w-7 h-7 text-sky-600" />
          </button>
        </div>
      </div>
      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex md:hidden transition-all duration-300">
          {/* Drawer */}
          <div className="w-full max-w-full bg-white h-full shadow-2xl flex flex-col animate-slideInRight">
            <div className="flex items-center justify-between px-5 py-5 border-b">
              <div className="flex items-center gap-2">
                <Hospital className="w-7 h-7 text-sky-600" />
                <span className="text-xl font-bold text-sky-700">Ihsan <span className="text-sky-500">Dental</span></span>
              </div>
              <button
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 py-8">
              {navCenter.map((item) => (
                <a
                  href={item.href}
                  key={item.href}
                  className="text-gray-700 font-semibold rounded-lg px-3 py-3 text-lg hover:bg-sky-50 hover:text-sky-600 transition-colors duration-150"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={bookAppointment.href}
                className="flex items-center gap-2 justify-center bg-gradient-to-r from-sky-500 to-sky-700 text-white px-4 py-3 rounded-full font-bold shadow hover:from-sky-600 hover:to-sky-800 transition-all duration-200 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-5 h-5" />
                {bookAppointment.label}
              </a>
              {/* Show logo and brand below the appointment button in mobile */}
              <div className="flex flex-col items-center mt-8 mb-4 md:hidden">
                <div className="bg-sky-100 rounded-full p-2 shadow-sm mb-2">
                  <Hospital className="w-8 h-8 text-sky-600" />
                </div>
                <span className="text-lg font-extrabold text-sky-700 tracking-tight drop-shadow-sm">
                  Ihsan <span className="text-sky-500">Dental</span>
                </span>
              </div>
            </nav>
            <div className="flex-1" />
            <div className="px-6 pb-6 text-xs text-gray-400 text-center">
              &copy; {new Date().getFullYear()} Ihsan Dental. All rights reserved.
            </div>
          </div>
        </div>
      )}
      {/* Mobile drawer animation */}
      <style>
        {`
          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          .animate-slideInRight {
            animation: slideInRight 0.25s cubic-bezier(0.4,0,0.2,1);
          }
        `}
      </style>
    </header>
  );
};

export default Header;