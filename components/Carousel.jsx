
import React, { useState, useEffect } from "react";
import Image from "next/image";
import kachuaGate from "@/public/imgs/kachua-gate.jpg";
import chandpurPolytechnic from "@/public/imgs/chandpur-polytechnic.jpg";
import kachuaNature from "@/public/imgs/kachua-nature.jpg";

export default function Carousel() {
  const images = [
    { src: kachuaGate, alt: "kachua gate" },
    { src: chandpurPolytechnic, alt: "chandpur polytechnic" },
    { src: kachuaNature, alt: "kachua nature" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [images.length]);

  return (
    <div className="w-full overflow-hidden">
      <div className="relative w-full h-[312px]">
        {/* Render the current image */}
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full object-cover h-[312px] pixelated transition-opacity duration-1000"
        />
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      <style jsx>{`
        .pixelated {
          image-rendering: pixelated;
        }
      `}</style>
    </div>
  );
}
