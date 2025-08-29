"use client";
import g from "../assets/g.png";
import h from "../assets/h.png";
import i from "../assets/i.png";
import j from "../assets/j.png";

export default function ITFeaturesSection() {
  const features = [
    {
      title: "Device Lifecycle Management",
      desc: "Manage global equipment configuration, deployment, repairs, loaners, recovery, storage, and disposal for a fixed monthly cost.",
      img: g,
    },
    {
      title: "Mobile Device Management",
      desc: "Automate compliance with real-time monitoring, keep device fleets up-to-date with the latest patches, and enhance visibility and control.",
      img: h,
    },
    {
      title: "Endpoint protection",
      desc: "Protect devices and workers from advanced cyber attacks, unauthorized access, data theft, and more.",
      img: i,
    },
    {
      title: "Identity and access management",
      desc: "Manage access to critical business tools like apps and devices in real-time, speed up onboarding, strengthen compliance, and secure company assets.",
      img: j,
    },
  ];

  return (
    <section className="w-full bg-[#FAF8FF] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-[#D9C9FF] rounded-2xl p-8 flex flex-col justify-between shadow"
          >
            <div>
              <h2 className="text-xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-700 mb-6">{item.desc}</p>
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                Learn more
              </button>
            </div>
            <div className="mt-6">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg shadow"
              />
            </div>
          </div>



        ))}

      </div>

      
    </section>
  );
}
