"use client";
import { Globe, User, Monitor, Boxes } from "lucide-react";

export default function FeaturesSection({ activeFeature, setActiveFeature }) {
  const features = [
    { title: "Deel Payroll",  icon: Globe,    activeColor: "bg-blue-200" },
    { title: "Deel HR",       icon: User,     activeColor: "bg-yellow-200" },
    { title: "Deel IT",       icon: Monitor,  activeColor: "bg-purple-200" },
    { title: "Deel Services", icon: Boxes,    activeColor: "bg-blue-200" },
  ];

  return (
    <div className="flex justify-center gap-6 py-12">
      {features.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeFeature === item.title;
        return (
          <button
            key={index}
            onClick={() => setActiveFeature(item.title)} // ✅ click handler
            className={`flex flex-col items-center justify-center w-48 h-32 rounded-2xl shadow-sm transition 
              ${isActive ? item.activeColor + " text-black" : "bg-orange-50 text-black"}`}
          >
            {/* icon without background */}
            <Icon className="w-8 h-8" />
            <p className="mt-3 font-medium">{item.title}</p>
          </button>
        );
      })}
    </div>
  );
}
