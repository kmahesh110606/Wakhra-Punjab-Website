// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section className="relative bg-gray-100">
      {/* Banner Image */}
        <div className="banner w-full mt-16">
        <img
          src={`${baseUrl}assets/banner-golden.png`}
          alt="Wakhra Punjab Banner"
          className="w-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/*<a
          href="#join"
          className="bg-[#800000] text-white px-5 py-2 rounded-full hover:bg-[#FFD700] transition"
        >
          Join Us Now
        </a>*/}
      </div>

      {/* Centered Content */}
      {/*<div className="flex flex-col items-center justify-center py-10">
        {/* Stylized Logo 
        <img
          src="src\assets\logo-stylized.png"
          alt="Wakhra Punjab Logo"
          className="w-80 h-auto mb-6"
        />

        {/* Join Us Button 
        <a
          href="#join"
          className="bg-[#800000] text-white px-5 py-2 rounded-full hover:bg-[#FFD700] transition"
        >
          Join Us Now
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
