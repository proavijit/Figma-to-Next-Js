"use client";
import { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

const Roadside = "/services/bg1.png";
const Banking = "/services/bg2.png";
const Insurance = "/services/bg3.png";
const Travel = "/services/bg4.png";

const services = [
  { title: "Roadside", description: "Explore the world with our travel services.", background: Roadside },
  { title: "Banking", description: "Stay healthy and fit with our guidance.", background: Banking },
  { title: "Insurance", description: "Enhance your knowledge with our courses.", background: Insurance },
  { title: "Travel", description: "Delicious recipes and meal plans for you.", background: Travel },
  { title: "TECH", description: "Stay updated with the latest technology trends.", background: Travel },
  { title: "TECH", description: "Stay updated with the latest technology trends.", background: Travel },
  { title: "TECH", description: "Stay updated with the latest technology trends.", background: Travel },
  { title: "TECH", description: "Stay updated with the latest technology trends.", background: Travel },
  { title: "TECH", description: "Stay updated with the latest technology trends.", background: Travel },
  { title: "TECH", description: "Stay updated with the latest technology trends.", background: Travel },
  { title: "TECH", description: "Stay updated with the latest technology trends.", background: Travel },
  { title: "FASHION", description: "Discover the latest fashion trends.", background: Banking },
];

export default function ServiceCardCarousel() {
  const [selectedService, setSelectedService] = useState(null);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => scrollCarousel(1),
    onSwipedRight: () => scrollCarousel(-1),
    trackMouse: true,
  });

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 265; // Approximate card width + gap
      carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.scrollbarWidth = "none";
      carouselRef.current.style.msOverflowStyle = "none";
    }
  }, []);

  return (
    <div className="w-full max-w-[1440px] mx-auto p-4 overflow-hidden" {...swipeHandlers}>
      <div
        ref={carouselRef}
        className="flex gap-4 cursor-grab active:cursor-grabbing select-none overflow-x-auto"
        style={{
          scrollBehavior: "smooth",
          whiteSpace: "nowrap",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        }}
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-[255px] h-[355px] rounded-tr-[8px] rounded-bl-[8px] cursor-pointer flex-shrink-0 overflow-hidden"
            onClick={() => !isDragging.current && setSelectedService(service)}
          >
            <Image
              src={service.background}
              alt={service.title}
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0 pointer-events-none user-select-none"
            />

            <div className="absolute bottom-0 left-0 w-[160px] h-[60px] bg-[#333333] text-white flex items-center justify-center rounded-tr-[8px] rounded-bl-[8px] hover:text-[#B83B5E]">
              {service.title}
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedService && (
        <Dialog
          open={true}
          onClose={() => setSelectedService(null)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-green-500 p-6 rounded-lg max-w-sm text-center">
            <h2 className="text-xl font-bold mb-2">{selectedService.title}</h2>
            <p className="mb-4">{selectedService.description}</p>
            <button onClick={() => setSelectedService(null)} className="px-4 py-2 bg-red-500 text-white rounded">
              Close
            </button>
          </div>
        </Dialog>
      )}
    </div>
  );
}
