import React, { useState } from "react";
import {
  ShieldCheck,
  Smile,
  Shield,
  CalendarCheck,
  Brush,
} from "lucide-react";

const tipsData = [
  {
    key: "brushing",
    label: "Proper Brushing Technique",
    title: "Proper Brushing Technique",
    icon: <Brush className="w-6 h-6 mr-2 text-sky-500" aria-hidden="true" />,
    content:
      "Brushing your teeth twice a day with the right technique is essential for maintaining oral health. Use a soft-bristled toothbrush and fluoride toothpaste. Hold your brush at a 45-degree angle to your gums and use gentle, circular motions. Don’t forget to brush your tongue and the back teeth. Replace your toothbrush every 3-4 months.",
  },
  {
    key: "cavity",
    label: "Cavity Prevention",
    title: "Cavity Prevention",
    icon: <ShieldCheck className="w-6 h-6 mr-2 text-sky-500" aria-hidden="true" />,
    content:
      "Prevent cavities by limiting sugary foods and drinks, brushing and flossing daily, and visiting your dentist regularly. Consider dental sealants and fluoride treatments for added protection.",
  },
  {
    key: "gum",
    label: "Gum Care",
    title: "Gum Care",
    icon: <Smile className="w-6 h-6 mr-2 text-sky-500" aria-hidden="true" />,
    content:
      "Healthy gums are the foundation of a healthy mouth. Floss daily, use an antimicrobial mouthwash, and gently brush along the gumline. Watch for signs of gum disease such as redness, swelling, or bleeding.",
  },
  {
    key: "protection",
    label: "Tooth Protection",
    title: "Tooth Protection",
    icon: <Shield className="w-6 h-6 mr-2 text-sky-500" aria-hidden="true" />,
    content:
      "Protect your teeth from injury by wearing a mouthguard during sports and avoiding chewing hard objects like ice or pens. If you grind your teeth at night, ask your dentist about a night guard.",
  },
  {
    key: "checkups",
    label: "Regular Checkups",
    title: "Regular Checkups",
    icon: <CalendarCheck className="w-6 h-6 mr-2 text-sky-500" aria-hidden="true" />,
    content:
      "Visit your dentist at least twice a year for professional cleanings and exams. Regular checkups help catch problems early and keep your smile healthy.",
  },
];

const Tips = () => {
  const [activeKey, setActiveKey] = useState("brushing");
  const activeTip = tipsData.find((tip) => tip.key === activeKey);

  return (
    <section
      id="tips"
      className="w-full bg-gradient-to-br from-sky-50 via-white to-sky-100 py-20 md:py-28 font-sans min-h-screen"
      aria-labelledby="tips-heading"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Main Title */}
        <h1
          id="tips-heading"
          className="text-4xl md:text-5xl font-extrabold text-sky-800 mb-3 text-center"
        >
          Dental Care Tips
        </h1>
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl">
          Discover essential tips to keep your teeth and gums healthy. Click on a topic below to learn more about best dental care practices.
        </p>
        {/* Navigation Bar */}
        <nav className="w-full max-w-3xl mb-12">
          <ul className="flex flex-wrap justify-center gap-4">
            {tipsData.map((tip) => (
              <li key={tip.key}>
                <button
                  className={`flex items-center px-5 py-3 rounded-xl font-semibold shadow transition-all duration-200 border
                    ${
                      activeKey === tip.key
                        ? "bg-sky-600 text-white border-sky-600 shadow-lg"
                        : "bg-white text-sky-700 border-sky-200 hover:bg-sky-50 hover:border-sky-400"
                    }
                  `}
                  onClick={() => setActiveKey(tip.key)}
                  aria-current={activeKey === tip.key ? "page" : undefined}
                >
                  {tip.icon}
                  {tip.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Content Area */}
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="flex items-center text-2xl md:text-3xl font-bold text-sky-700 mb-4">
            {activeTip.icon}
            {activeTip.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {activeTip.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tips;
