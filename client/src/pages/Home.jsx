import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HrFeaturesSection from "../components/HrFeaturesSection";
import ItFeaturesSection from '../components/ItFeaturesSection';
import ServicesFeaturesSection from '../components/ServicesFeaturesSection';
import OfferSection from '../components/OfferSection';
import GlobalHero from '../components/GlobalHero';
import Testimonials from '../components/Testimonials';
import ComplianceHero from '../components/Comp';
import DeelAdvantage from '../components/DeelAdvantage';
import DeelFeatures from '../components/DeelFeatures.jsx';
import GlobalCommerceHero from '../components/GlobalCommerceHero';
import DeelIntroSection from '../components/CustomerStoriesBanner.jsx';
import TuringCustomerStory from '../components/CustomerStoriesBanner.jsx';
import CustomerStoriesBanner from '../components/CustomerStoriesBanner.jsx';
// import Footer from '../components/Footer.jsx'

const Home = () => {
  const [activeFeature, setActiveFeature] = useState("Deel Payroll"); // default tab

  return (
    <div className="md:flex-row justify-between items-start  gap-10 flex-1">
      {/* Left: Hero */}
      <HeroSection />

      {/* Right: Features + Conditional Sections */}
      <div className="min-h-screen flex flex-col">
        
        {/* ✅ Tabs */}
        <FeaturesSection 
          activeFeature={activeFeature} 
          setActiveFeature={setActiveFeature} 
        />

        {/* Conditional Rendering */}
        {activeFeature === "Deel HR" && <HrFeaturesSection />}
        {activeFeature === "Deel IT" && <ItFeaturesSection />}
        {activeFeature === "Deel Services" && <ServicesFeaturesSection />}

        {/*  Default (Payroll) */}
        {activeFeature !== "Deel HR" &&
         activeFeature !== "Deel IT" &&
         activeFeature !== "Deel Services" && (
          <OfferSection />
        )}

        {/*  Always show below every section */}
        <GlobalHero />
        <Testimonials />
        <ComplianceHero />
        <DeelAdvantage />
        <DeelFeatures />
        <GlobalCommerceHero />
       <CustomerStoriesBanner/>
       {/* <Footer/> */}
      </div>
    </div>
  );
};

export default Home;
