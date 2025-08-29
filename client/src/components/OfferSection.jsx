"use client";
import a from "../assets/a.png";
import b from "../assets/b.png";
import o from "../assets/o.png";
import p from "../assets/p.png";
import q from "../assets/q.png";
import r from "../assets/r.png";

export default function OfferSection() {
  return (
    <section className="w-full bg-[#FFFCF5] py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Top Section: Special Offer + US Payroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card (Image Top, Text Bottom) */}
          <div className="bg-[#B5DCFF] rounded-2xl p-8 flex flex-col justify-between">
            <div className="mb-8">
              <img src={a} alt="Offer Illustration" className="rounded-lg shadow" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Special offer: Up to 3 free months* of Deel PEO
              </h2>
              <p className="text-gray-700 mb-6">
                Get Deel PEO for free for up to 3 months*. We take on your compliance
                burdens and HR admin. You attract top US talent with competitive benefits
                and automated payroll.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Card (Text Top, Image Bottom) */}
          <div className="bg-[#B5DCFF] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Deel US Payroll</h2>
              <p className="text-gray-700 mb-6">
                Pay US employees through a self-serve platform with automated local
                payroll tax calculations, built-in compliance, and seamless integrations.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                Learn more
              </button>
            </div>
            <div className="mt-8">
              <img src={b} alt="Payroll Illustration" className="rounded-lg shadow" />
            </div>
          </div>
        </div>

        {/* Middle Section: EOR + Contractor Management */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card (Image Top, Text Bottom) */}
          <div className="bg-[#B5DCFF] rounded-2xl p-8 flex flex-col justify-between">
            <div className="mb-8">
              <img src={o} alt="EOR Illustration" className="rounded-lg shadow" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Deel EOR (Employer of Record)</h2>
              <p className="text-gray-700 mb-6">
                Hire and onboard employees in 130+ countries compliantly and quickly
                without opening an entity, minimizing risks related to taxes, benefits, or
                labor laws.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Card (Text Top, Image Bottom) */}
          <div className="bg-[#B5DCFF] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Deel Contractor Management</h2>
              <p className="text-gray-700 mb-6">
                Onboard, manage, and pay global contractors with a self-serve platform
                that drastically reduces HR and payroll admin time.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                Learn more
              </button>
            </div>
            <div className="mt-8">
              <img src={p} alt="Contractor Illustration" className="rounded-lg shadow" />
            </div>
          </div>
        </div>

        {/* Bottom Section: Contractor of Record + Global Payroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card (Image Top, Text Bottom) */}
          <div className="bg-[#B5DCFF] rounded-2xl p-8 flex flex-col justify-between">
            <div className="mb-8">
              <img src={q} alt="Contractor of Record Illustration" className="rounded-lg shadow" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Deel Contractor of Record</h2>
              <p className="text-gray-700 mb-6">
                Reduce misclassification risk — let us classify and manage your global
                contractors.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                Learn more
              </button>
            </div>
          </div>

          {/* Right Card (Text Top, Image Bottom) */}
          <div className="bg-[#B5DCFF] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Deel Global Payroll</h2>
              <p className="text-gray-700 mb-6">
                Streamline international payroll, compliance, tax deductions, filings, and
                more in 130+ countries, backed by our in-house payroll experts.
              </p>
              <button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition">
                Learn more
              </button>
            </div>
            <div className="mt-8">
              <img src={r} alt="Global Payroll Illustration" className="rounded-lg shadow" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
