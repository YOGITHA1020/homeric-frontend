import React from "react";

const About = () => {
  return (
<section className="py-16 px-6 bg-gradient-to-r from-[#a7f3d0] to-[#d9f99d]" id="about">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Left Text Section */}
    <div>
      <h2 className="text-5xl font-bold text-blue-900 mb-6">Our Story</h2>
      <p className="text-lg text-gray-800 leading-relaxed mb-6">
        Homeric IND Sports Management was born from a vision to make quality sports infrastructure accessible to every community. We specialize in developing and maintaining comprehensive sports facilities that serve schools, academies, townships, clubs, and residential complexes.
        <br /><br />
        From badminton courts and tennis facilities to yoga zones and children's parks, we create spaces where athletic dreams take flight and communities come together.
        <br /><br />
        Our commitment extends beyond construction – we provide ongoing maintenance and upgrades to ensure your sports surfaces remain in peak condition for years to come.
      </p>
    </div>

    {/* Right Card Section */}
    <div className="bg-white p-8 rounded-2xl shadow-xl text-center flex flex-col items-center justify-center h-full">
      <img
        src="/founder.png"
        alt="Dr. MGP Reddy"
        className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-500 -mt-6"
      />
      <h3 className="text-2xl font-bold text-blue-700">Dr. MGP Reddy</h3>
      <p className="text-md text-gray-600 mb-2">Founder & Expertise Physiologist</p>

      {/* Mission Statement with Background Box */}
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400 shadow-sm mb-4">
        <p className="text-gray-700 text-sm italic">
          "Our mission is to create world-class sports infrastructure that inspires excellence and builds stronger communities."
        </p>
      </div>

      <p className="text-sm text-gray-500">Stanford University | 20+ Years Experience</p>
    </div>

  </div>
</section>

  );
};

export default About;
