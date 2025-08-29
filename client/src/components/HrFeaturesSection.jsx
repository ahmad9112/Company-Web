"use client";
import c from "../assets/c.png";
import d from "../assets/d.png";
import e from "../assets/e.png";
import f from "../assets/f.png";

export default function HRFeaturesSection() {
  const features = [
    {
      title: "Deel Compensation",
      desc: "Streamline compensation planning with a centralized, collaborative workspace for pay bands, compensation review cycles, and pay transparency.",
      img: d,
      layout: "text-first",
    },
    {
      title: "Deel Benefits Admin",
      desc: "Manage benefits with an employee self-serve platform to build plans automatically synced with payroll and integrated with carriers.",
      img: c,
      layout: "image-first",
      centerBtn: true, // ✅ centered
    },
    {
      title: "Deel Workforce Planning",
      desc: "Collaborate on smarter, end-to-end planning with automated approvals, real-time data, and AI insights for confident, strategic decision-making.",
      img: e,
      layout: "image-first",
      centerBtn: true, // ✅ now also centered
    },
    {
      title: "Deel Engage",
      desc: "Foster a high-performance culture with a centralized, AI-powered people suite to manage development, performance, and training programs.",
      img: f,
      layout: "text-first",
    },
  ];

  return (
    <section className="w-full bg-[#FFFCF5] py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-[#FFE585] relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between shadow"
          >
            {/* Decorative background shape */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400 opacity-30 rounded-full -z-0 translate-x-8 -translate-y-8"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-yellow-300 opacity-30 rounded-full -z-0 -translate-x-10 translate-y-10"></div>

            {/* Content layout alternates */}
            {item.layout === "text-first" ? (
              <>
                <div
                  className={`relative z-10 ${
                    item.centerBtn ? "flex flex-col items-center text-center" : ""
                  }`}
                >
                  <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                  <p className="text-gray-700 mb-6">{item.desc}</p>
                  <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                    Learn more
                  </button>
                </div>
                <div className="mt-6 relative z-10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg shadow"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="mb-6 relative z-10">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg shadow"
                  />
                </div>
                <div
                  className={`relative z-10 ${
                    item.centerBtn ? "flex flex-col items-center text-center" : ""
                  }`}
                >
                  <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                  <p className="text-gray-700 mb-6">{item.desc}</p>
                  <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                    Learn more
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
