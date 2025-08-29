"use client";
import z from "../assets/z.png"; // Immigration
import l from "../assets/l.png"; // Entity Setup
import m from "../assets/m.png"; // Background Checks
import n from "../assets/n.png"; // Equity Consulting

export default function ServicesFeaturesSection() {
  const features = [
    {
      title: "Immigration",
      desc: "Manage immigration and secure visas for international hires with an intuitive dashboard and eliminate the need for costly law firms or local entities.",
      img: z,
    },
    {
      title: "Entity set up",
      desc: "Simplify global expansion with our dedicated in-house local HR managers, equity advisors, payroll managers, legal teams and 110+ owned entities.",
      img: l,
    },
    {
      title: "Background checks",
      desc: "Automate new hire screening with fast, frictionless employment background checks integrated into onboarding and reduce time-to-hire in 190+ countries.",
      img: m,
    },
    {
      title: "Equity consulting",
      desc: "In-house specialists simplify tax reporting, automate admin, and oversee all compensation so you can navigate global tax and regulatory complexities.",
      img: n,
    },
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-[#B5DCFF] rounded-2xl p-10 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform"
          >
            {/* Top - Text */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-700 mb-6">{item.desc}</p>
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                Learn more
              </button>
            </div>

            {/* Bottom - Image */}
            <div className="mt-10 flex justify-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-72 h-72 md:w-80 md:h-80 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
