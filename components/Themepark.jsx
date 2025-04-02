"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

const themeParks = [
  {
    name: "Universal Studio",
    location: "California, USA",
    image: "https://images.unsplash.com/photo-1742829705753-f07509bc88ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Monashtra",
    location: "Utah, USA",
    image: "https://images.unsplash.com/photo-1742829705753-f07509bc88ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Universal Studio",
    location: "New York, USA",
    image: "https://images.unsplash.com/photo-1742829705753-f07509bc88ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Zippal Studio",
    location: "California, USA",
    image: "https://images.unsplash.com/photo-1742829705753-f07509bc88ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Scooter Studio",
    location: "Texas, USA",
    image: "https://images.unsplash.com/photo-1742201934199-750a39f4c277?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tomorrow",
    location: "California, USA",
    image: "https://images.unsplash.com/photo-1741850821836-a0228e561406?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ThemeParkCards() {
  const [selectedPark, setSelectedPark] = useState(null);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {themeParks.map((park, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col cursor-pointer"
            onClick={() => setSelectedPark(park)}
          >
            <Image
              src={park.image}
              alt={park.name}
              width={220}
              height={220}
              className="w-[220px] h-[220px] object-cover bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105"
            />
            <div className="p-4 text-center">
              <h3 className="text-[14px] font-semibold">{park.name}</h3>
              <p className="text-gray-500 text-[12px]">{park.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Modal */}
      <Dialog
        open={!!selectedPark}
        onClose={() => setSelectedPark(null)}
        className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/80"
      >
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setSelectedPark(null)}
            className="absolute top-6 right-6 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            ✕
          </button>

          {/* Park Details */}
          {selectedPark && (
            <div className="max-w-3xl p-6 bg-white rounded-lg shadow-lg">
              <Image
                src={selectedPark.image}
                alt={selectedPark.name}
                width={500}
                height={300}
                className="w-full h-64 object-cover rounded-md"
              />
              <h2 className="text-2xl font-bold mt-4">{selectedPark.name}</h2>
              <p className="text-gray-600 text-lg">{selectedPark.location}</p>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
}
