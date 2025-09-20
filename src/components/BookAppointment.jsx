import React, { useState } from "react";
import { User, Phone } from "lucide-react";

const steps = [
  {
    key: "info",
    label: "Your Info",
    icon: <User className="w-6 h-6 text-sky-500" aria-hidden="true" />,
    title: "Personal Information",
  },
  {
    key: "schedule",
    label: "Schedule",
    icon: (
      <svg
        className="w-6 h-6 text-sky-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M16 3v4M8 3v4M3 9h18" />
      </svg>
    ),
    title: "Schedule Appointment",
  },
  {
    key: "confirm",
    label: "Confirm",
    icon: (
      <svg
        className="w-6 h-6 text-sky-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
    title: "Confirm Details",
  },
];

const BookAppointment = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    date: "",
    time: "",
  });

  // Simple validation for demonstration
  const validateStep = () => {
    if (step === 0) {
      return form.fullName.trim() && form.phone.trim();
    }
    if (step === 1) {
      return form.date && form.time;
    }
    return true;
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep() && step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the data to your backend or show a success message
    alert("Appointment booked!\n" + JSON.stringify(form, null, 2));
    setStep(0);
    setForm({
      fullName: "",
      phone: "",
      date: "",
      time: "",
    });
  };

  return (
    <section
      id="book"
      className="w-full min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-100 py-20 md:py-28 flex flex-col items-center font-sans"
      aria-labelledby="book-heading"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <h1
          id="book-heading"
          className="text-4xl md:text-5xl font-extrabold text-sky-800 mb-2"
        >
          Book Your Perfect Smile
        </h1>
        <p className="text-lg text-gray-600">
          Schedule your visit with our expert dentists
        </p>
      </div>

      {/* Progress Indicator */}
      <div className="flex flex-wrap items-center justify-center mb-10 w-full px-2">
        {steps.map((s, idx) => (
          <React.Fragment key={s.key}>
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg shadow
                  ${
                    step === idx
                      ? "bg-sky-600 text-white"
                      : step > idx
                      ? "bg-sky-400 text-white"
                      : "bg-sky-100 text-sky-400"
                  }
                `}
              >
                {idx + 1}
              </div>
              <span
                className={`ml-3 ${
                  idx < steps.length - 1 ? "mr-6" : ""
                } font-semibold ${
                  step === idx
                    ? "text-sky-700"
                    : step > idx
                    ? "text-sky-500"
                    : "text-sky-400"
                }`}
              >
                {s.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className="w-8 h-1 bg-sky-200 rounded mx-1" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Card Section */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 relative mx-auto">
        {/* Card Title */}
        <div className="flex items-center mb-6">
          <span className="inline-flex items-center justify-center bg-sky-100 rounded-full p-2 mr-3">
            {steps[step].icon}
          </span>
          <h2 className="text-2xl font-bold text-sky-800">{steps[step].title}</h2>
        </div>
        {/* Step Content */}
        <form onSubmit={step === steps.length - 1 ? handleSubmit : handleNext}>
          {step === 0 && (
            <div className="flex flex-col">
              <div className="mb-5">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-semibold text-sky-700 mb-2"
                >
                  Full Name
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <User className="w-5 h-5 text-sky-400" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    className="pl-11 pr-4 py-3 w-full rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-gray-800 bg-sky-50 transition"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mb-8">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-sky-700 mb-2"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Phone className="w-5 h-5 text-sky-400" aria-hidden="true" />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="pl-11 pr-4 py-3 w-full rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-gray-800 bg-sky-50 transition"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          )}
          {step === 1 && (
            <>
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="block text-sm font-semibold text-sky-700 mb-2"
                >
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="pl-4 pr-4 py-3 w-full rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-gray-800 bg-sky-50 transition"
                  value={form.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="mb-8">
                <label
                  htmlFor="time"
                  className="block text-sm font-semibold text-sky-700 mb-2"
                >
                  Select Time
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  className="pl-4 pr-4 py-3 w-full rounded-lg border border-sky-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none text-gray-800 bg-sky-50 transition"
                  value={form.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          {step === 2 && (
            <div className="mb-8 flex flex-col">
              <div className="mb-4">
                <span className="block text-sm font-semibold text-sky-700 mb-1">
                  Name:
                </span>
                <span className="text-gray-800 break-words">{form.fullName}</span>
              </div>
              <div className="mb-4">
                <span className="block text-sm font-semibold text-sky-700 mb-1">
                  Phone:
                </span>
                <span className="text-gray-800 break-words">{form.phone}</span>
              </div>
              <div className="mb-4">
                <span className="block text-sm font-semibold text-sky-700 mb-1">
                  Date:
                </span>
                <span className="text-gray-800">{form.date}</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-sky-700 mb-1">
                  Time:
                </span>
                <span className="text-gray-800">{form.time}</span>
              </div>
            </div>
          )}
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-3">
            {step > 0 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center gap-2 bg-sky-100 text-sky-700 px-6 py-3 rounded-full font-bold shadow hover:bg-sky-200 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <span className="text-xl">&lt;</span> Back
              </button>
            ) : (
              <div className="w-full sm:w-auto" />
            )}
            {step < steps.length - 1 ? (
              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded-full font-bold shadow hover:from-sky-600 hover:to-sky-800 transition-all duration-200 w-full sm:w-auto justify-center"
                disabled={!validateStep()}
              >
                Next <span className="text-xl">&gt;</span>
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-700 text-white px-6 py-3 rounded-full font-bold shadow hover:from-sky-600 hover:to-sky-800 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Confirm
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
