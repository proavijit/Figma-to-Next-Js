import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image.svg')" }}>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(184,_59,_94,_0.4)_0%,_rgba(184,_59,_94,_0.2)_100%)]"></div>
      
      {/* Content */}
      <div className="max-w-screen-xl mx-auto h-full px-4 flex items-center relative z-10">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl md:text-[64px] font-bold text-white mb-4">
            We are what we do, not what we say we'll do.
          </h1>
          <p className="text-[18px] text-white pr-21 mb-6">
            Risus viverra at in lectus arcu id. Potenti diam, justo lectus mattis. A, sit duis quis turpis pellentesque. Purus amet, risus nisl morbi mi id.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 bg-[#B83B5E] text-white rounded-lg hover:bg-[#A52C4D]">
              Get a Quote
            </button>
            <button className="px-6 py-3 border-2 border-[#B83B5E] text-[#B83B5E] rounded-lg hover:bg-[#B83B5E] hover:text-white">
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
