import React, { useState } from "react";
import etcImg from "../assets/etc.png"; // replace with your actual image path

// Import images
import hiringImg from "../assets/hiring.png";
import payrollImg from "../assets/payroll.png";
import complianceImg from "../assets/compliance.png";
import relocationImg from "../assets/relocation.png";
import mergersImg from "../assets/mergers.png";

// Tabs Data for Customer Stories
const tabsData = {
  "Global Hiring": {
    img: hiringImg,
    stat: "5,000+ contracts created",
    desc: "Turing has around 400 developers working for customers and 150 developers working to build Turing. They were able to migrate everyone to Deel in days. Now they use Deel to manage, pay, and onboard every developer, in over 60 different countries.",
  },
  "Global Payroll": {
    img: payrollImg,
    stat: "300+ hours saved monthly",
    desc: "Since using Deel’s Global Payroll, Change.org has saved more than 300 hours on admin each month. They’ve also taken advantage of all the services Deel offers, including EOR to retain employees needing visa sponsorship.",
  },
  "Compliance": {
    img: complianceImg,
    stat: "100% compliance achieved",
    desc: "With Deel’s compliance services, companies ensure full legal and regulatory adherence across multiple countries, reducing risk and saving time.",
  },
  "Employee relocation": {
    img: relocationImg,
    stat: "1,000+ relocations managed",
    desc: "Deel has helped global companies relocate employees smoothly, handling visas, legal paperwork, and employee support across 50+ countries.",
  },
  "Mergers/Acquisitions": {
    img: mergersImg,
    stat: "50+ mergers supported",
    desc: "Deel provides HR & Payroll support for companies undergoing mergers and acquisitions, ensuring seamless employee transitions and compliance.",
  }
};

// MAIN COMPONENT
const LandingSections = () => {
  const [activeTab, setActiveTab] = useState("Global Hiring");

  const { img, stat, desc } = tabsData[activeTab];

  const steps = [
    {
      number: "1",
      title: "Book a demo",
      desc: "Schedule a quick call with our CX experts. We’ll understand your needs and set you up with a free DexKor trial tailored for your business.",
    },
    {
      number: "2",
      title: "Connect your data",
      desc: "Easily integrate your existing tools — CRM, helpdesk, or spreadsheets. DexKor unifies everything so you start with context from day one.",
    },
    {
      number: "3",
      title: "Launch with AI",
      desc: "With Dexy AI and our guided onboarding, your teams can start tracking accounts, managing support, and driving success — all within days, not months.",
    },
  ];

  return (
    <>
      {/* SECTION 1: Customer Stories FIRST */}
      <section className="bg-[#FFF7E1] py-16 px-6 text-gray-900">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold text-gray-500 mb-2">
            CUSTOMER STORIES
          </h2>
          <h3 className="text-3xl font-bold mb-6">
            We’ve helped 35,000+ companies <br />grow and manage global teams.
          </h3>

          {/* Tabs inside rounded container */}
          <div className="inline-flex flex-wrap justify-center items-center border border-gray-300 rounded-full px-4 py-3 gap-2 bg-white shadow-sm">
            {Object.keys(tabsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-medium transition ${
                  activeTab === tab
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Image + Stat Block */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div>
            <img
              src={img}
              alt={activeTab}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Right: Stat + Text */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{stat}</h4>
            <p className="text-sm text-gray-700 mb-4">{desc}</p>
            <a href="#" className="text-yellow-600 font-medium hover:underline">
              Read customer story →
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: Three Steps BELOW */}
      <section className="bg-[#FFF7E1] py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Steps */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get started with DexKor <br /> in three easy steps
            </h2>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-200 text-black font-bold flex items-center justify-center">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="mt-8 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition">
              Get started
            </button>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src={etcImg}
              alt="Three steps illustration"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingSections;
