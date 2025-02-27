"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import slide1 from '@/assets/images/slide1.jpg';
import slide2 from "@/assets/images/slide2.png";
import slide3 from "@/assets/images/slide3.png";
import slide4 from "@/assets/images/slide4.png";
import slide5 from "@/assets/images/slide5.png";
// import slide6 from "@/assets/images/slide6.jfif";

const slides = [
  { id: 1, src: slide1, alt: "Slide 1" },
  { id: 2, src: slide2, alt: "Slide 2" },
  { id: 3, src: slide3, alt: "Slide 3" },
  { id: 4, src: slide4, alt: "Slide 4" },
  { id: 5, src: slide5, alt: "Slide 5" },
  { id: 6, src: slide3, alt: "Slide 6" },
];

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Go to next slide
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Go to previous slide
  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  // Go to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full">
            <Image
              src={slide.src}
              alt={slide.alt}
              className="w-full h-[165px] rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center text-center space-x-2 mt-4 absolute top-3/4 m-auto ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full border-black m-auto ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slides;
