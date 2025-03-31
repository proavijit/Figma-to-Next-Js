import React from 'react'

const About = () => {
  return (
    <section className="bg-[#B83B5E] w-full h-[321px] flex flex-col md:flex-row items-center justify-between px-8 md:px-16">

      <div className="text-white font-muli font-extrabold text-[45px] leading-[100%] tracking-[0%] md:w-1/2 text-center md:text-left pt-[25px] md:pt-0">
        About Us
      </div>

      <div className="text-white font-muli font-normal text-[18px] md:w-1/2 text-center md:text-left">
        <p className="mb-4 md:mb-0">
          Tempor, egestas tristique mi eu vitae maecenas. Iaculis vestibulum, amet, eleifend natoque velit praesent. Amet sed vivamus morbi euismod felis venenatis maecenas.
        </p>
        <a href="#" className="text-white underline">Learn More</a>
      </div>
    </section>
  )
}

export default About