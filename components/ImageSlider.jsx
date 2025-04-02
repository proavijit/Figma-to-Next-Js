"use client";

import ImageSlider from "./ImageSlider";
import ThemeParkCards from "./Themepark";

const ThemeParkOffers = () => {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] flex flex-col md:flex-row overflow-hidden">
      {/* Image Slider Section (Left on larger screens) */}
      <div className="w-full md:w-[40%] min-h-[50vh] md:min-h-screen">
        <ImageSlider />
      </div>

      {/* Content Section (Right on larger screens) */}
      <div className="p-4 md:p-7 w-full md:w-[60%]">
        {/* Title and Description */}
        <div className="text-left mb-6">
          <h1 className="font-muli text-[#B83B5E] font-extrabold text-3xl mb-3">
            Theme Park
          </h1>
          <p className="font-muli font-normal text-base leading-none tracking-normal">
            Penatibus risus quam risus, venenatis vitae mauris. Libero lorem urna quisque nulla scelerisque viverra lorem eu.
          </p>
        </div>

        {/* Theme Park Cards */}
        <div className="mb-6">
          <ThemeParkCards />
        </div>

        {/* More Offers Button */}
        <button className="mt-6 bg-[#B83B5E] text-white px-6 py-3 rounded-md">
          More Offers
        </button>
      </div>
    </div>
  );
};

export default ThemeParkOffers; 