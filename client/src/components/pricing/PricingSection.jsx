import React, { useState } from "react";
import { Check } from "lucide-react";

const tabs = ["Deel Payroll", "Deel HR", "Deel IT", "Deel Services"];

const tabColors = {
  "Deel Payroll": "from-blue-200 to-blue-400",
  "Deel HR": "from-indigo-200 to-indigo-400",
  "Deel IT": "from-purple-200 to-purple-400",
  "Deel Services": "from-gray-200 to-gray-400",
};

const borderColors = {
  "Deel Payroll": "#2563eb", // Blue
  "Deel HR": "#4f46e5", // Indigo
  "Deel IT": "#9333ea", // Purple
  "Deel Services": "#374151", // Gray
};

const pricingData = {
  "Deel Payroll": [
    {
      title: "Deel EOR",
      price: "$599",
      unit: "per employee per month",
      features: [
        "Hire globally without opening entities",
        "Locally compliant contracts",
        "Payroll, taxes, benefits",
        "Legal entity management",
        "Benefits administration",
      ],
      button: "Get started",
      popular: true,
    },
    {
      title: "Contractor Management",
      price: "$49",
      unit: "per contractor per month",
      features: [
        "Automated invoices",
        "Localized contracts",
        "Tax form collection",
        "Payment processing",
        "Compliance monitoring",
      ],
      button: "Get started",
    },
    {
      title: "Global Payroll",
      price: "$29",
      unit: "per employee per month",
      features: [
        "Automated payroll",
        "Tax filings",
        "Global coverage",
        "Multi-currency support",
        "Reporting and analytics",
      ],
      button: "Get started",
    },
  ],
  "Deel HR": [
    {
      title: "Deel Compensation",
      price: "$15",
      unit: "per employee per month",
      features: [
        "Compensation benchmarking",
        "Total rewards statements",
        "Compensation bands",
        "Equity management",
        "Performance tracking",
      ],
      button: "Get started",
    },
    {
      title: "Workforce Planning",
      price: "$18",
      unit: "per employee per month",
      features: [
        "Org chart visualization",
        "Headcount planning",
        "Scenario planning",
        "Budget forecasting",
        "Team analytics",
      ],
      button: "Get started",
      popular: true,
    },
    {
      title: "Benefits Admin",
      price: "Custom",
      unit: "",
      features: [
        "Global benefits providers",
        "Enrollment support",
        "Custom reporting",
        "Compliance management",
        "Employee self-service",
      ],
      button: "Speak to sales",
    },
  ],
  "Deel IT": [
    {
      title: "Device Lifecycle Management",
      price: "$18",
      unit: "per device per month",
      features: [
        "Device provisioning",
        "Shipping & returns",
        "Tracking & offboarding",
        "Asset management",
        "Cost optimization",
      ],
      button: "Get started",
    },
    {
      title: "Mobile Device Management",
      price: "$9",
      unit: "per device per month",
      features: [
        "Device security policies",
        "Remote configuration",
        "App management",
        "Compliance monitoring",
        "Usage analytics",
      ],
      button: "Get started",
      popular: true,
    },
    {
      title: "Endpoint Protection",
      price: "$9",
      unit: "per device per month",
      features: [
        "Advanced threat detection",
        "Real-time monitoring",
        "Automated responses",
        "Security reporting",
        "Incident management",
      ],
      button: "Get started",
    },
  ],
  "Deel Services": [
    {
      title: "Deel Talent",
      price: "Custom",
      unit: "",
      features: [
        "Vetted recruitment partners",
        "Localized hiring support",
        "Employer branding",
        "Candidate screening",
        "Interview coordination",
      ],
      button: "Speak to sales",
    },
    {
      title: "Immigration Services",
      price: "Custom",
      unit: "",
      features: [
        "Visa applications & renewals",
        "Legal guidance",
        "Status tracking",
        "Document preparation",
        "Compliance support",
      ],
      button: "Speak to sales",
      popular: true,
    },
    {
      title: "Background Checks",
      price: "Custom",
      unit: "",
      features: [
        "Global screening network",
        "Criminal & identity verification",
        "Education & employment checks",
        "Reference verification",
        "Continuous monitoring",
      ],
      button: "Speak to sales",
    },
  ],
};

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState("Deel Payroll");

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-24 px-6 font-sans overflow-hidden">
      {/* 🔹 Diamond Background */}
      <div
        className={`absolute -top-40 left-1/2 transform -translate-x-1/2 -rotate-45 w-[600px] h-[600px] bg-gradient-to-br ${
          tabColors[activeTab]
        } opacity-30 blur-3xl rounded-3xl pointer-events-none transition-all duration-700`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔹 Heading */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transparent and fair pricing that grows with your business
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the right plan for your global team — simple, flexible, and
            designed to scale as you do.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ease-in-out ${
                    activeTab === tab
                      ? "bg-gray-900 text-white shadow-md transform scale-105"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
          {pricingData[activeTab].map((plan, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="relative bg-white rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{
                borderTop: `4px solid ${borderColors[activeTab]}`,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {plan.title}
                </h3>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.unit && (
                    <span className="text-gray-500 text-sm ml-1">
                      /{plan.unit}
                    </span>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gray-900 text-white hover:bg-gray-800"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
