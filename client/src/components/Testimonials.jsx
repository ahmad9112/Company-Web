"use client";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import s from "../assets/s.png";
import t from "../assets/t.png";
import u from "../assets/u.png";

const testimonials = [
  {
    id: 1,
    text: "DexKor has completely changed how we manage renewals. Instead of being reactive, we now see risks ahead of time and engage with customers before issues arise. It’s like having an extra Success Manager on the team.",
    author: "Priya S., Head of Customer Success",
    bg: "bg-yellow-200",
  },
  {
    id: 2,
    text: "With DexKor’s HelpDesk, we finally unified our support channels. SLAs are tracked automatically, agents save hours with AI summaries, and our response times dropped by 40%.",
    author: "Arjun K., Operations Manager",
    bg: "bg-blue-200",
  },
  {
    id: 3,
    text: "Ask Dexy has become our team’s knowledge backbone. Whether it’s auto-QA or instant summaries, it helps us work faster, stay aligned, and understand customer sentiment at scale.",
    author: "Emily R., Founder & CEO",
    bg: "bg-purple-300",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#FFFCF5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Why modern businesses rely on{" "}
          <span className="text-gray-900">DexKor for AI-powered customer success</span>
        </h2>

        {/* Scroll Buttons */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FaArrowLeft className="text-gray-800" />
          </button>
          <button
            onClick={scrollRight}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800"
          >
            <FaArrowRight className="text-white" />
          </button>
        </div>

        {/* Scrollable Testimonials */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide mb-12"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`min-w-[350px] md:min-w-[420px] p-8 rounded-xl shadow-md ${t.bg}`}
            >
              <p className="text-lg md:text-xl text-gray-900 mb-4">“{t.text}”</p>
              <p className="font-semibold text-base md:text-lg">{t.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Logo Stats Section */}
      <section className="w-full bg-[#F9FAFB] py-12 px-6">
  <div className="max-w-7xl mx-auto text-center">
    {/* Section Headline */}
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
      Choose DexKor for measurable impact
    </h2>

    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
      
      {/* Stat 1 */}
      <div className="flex flex-col items-center">
        <span className="text-4xl">👥</span>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">25%+</h3>
        <p className="text-sm text-gray-600 mt-1">
          Improvement in deal conversions with AI-driven SalesHub
        </p>
      </div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center">
        <span className="text-4xl">⚡</span>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">40%</h3>
        <p className="text-sm text-gray-600 mt-1">
          Faster onboarding journeys using OnboardHub playbooks
        </p>
      </div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center">
        <span className="text-4xl">📉</span>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">30%</h3>
        <p className="text-sm text-gray-600 mt-1">
          Reduction in support costs through HelpDesk automation
        </p>
      </div>

      {/* Stat 4 */}
      <div className="flex flex-col items-center">
        <span className="text-4xl">💙</span>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">2x</h3>
        <p className="text-sm text-gray-600 mt-1">
          Increase in customer lifetime value with AccountCare
        </p>
      </div>

      {/* Stat 5 */}
      <div className="flex flex-col items-center">
        <span className="text-4xl">🔒</span>
        <h3 className="text-3xl font-bold text-gray-900 mt-2">100%</h3>
        <p className="text-sm text-gray-600 mt-1">
          Enterprise-grade security & compliance
        </p>
      </div>
    </div>
  </div>
</section>

    </section>
  );
}
