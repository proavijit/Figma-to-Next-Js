"use client"
import { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { useSwipeable } from "react-swipeable";

const services = [
  { title: "TRAVEL", description: "Explore the world with our travel services." },
  { title: "FITNESS", description: "Stay healthy and fit with our guidance." },
  { title: "EDUCATION", description: "Enhance your knowledge with our courses." },
  { title: "FOOD", description: "Delicious recipes and meal plans for you." },
  { title: "TECH", description: "Stay updated with the latest technology trends." },
  { title: "FASHION", description: "Discover the latest fashion trends." },
];

export default function ServiceCardCarousel() {
  const [selectedService, setSelectedService] = useState(null);
  const carouselRef = useRef(null);

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
        style={{ scrollBehavior: "smooth", whiteSpace: "nowrap", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-[255px] h-[355px] bg-red-200 rounded-tr-[8px] rounded-bl-[8px] cursor-pointer flex-shrink-0"
            onClick={() => setSelectedService(service)}
          >
            <div className="absolute bottom-0 left-0 w-[160px] h-[60px] bg-black text-white flex items-center justify-center rounded-tr-[8px] rounded-bl-[8px]">
              {service.title}
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedService && (
        <Dialog open={true} onClose={() => setSelectedService(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
