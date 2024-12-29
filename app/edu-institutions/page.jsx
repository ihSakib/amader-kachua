import React from "react";
import Link from "next/link"; // Import Link from Next.js

import schoolIcon from "@/public/icons/school.png";
import collageIcon from "@/public/icons/collage.png";
import quranIcon from "@/public/icons/quran.png";
import technicalIcon from "@/public/icons/service.png";
import plusIcon from "@/public/icons/plus.png";
import Image from "next/image";

export default function Page() {
  const cardData = [
    { name: "স্কুল", icon: schoolIcon, link: "schools" },
    { name: "কলেজ", icon: collageIcon, link: "colleges" },
    { name: "মাদরাসা", icon: quranIcon, link: "madrasahs" },
    { name: "কারিগরি", icon: technicalIcon, link: "polytechnics" },
    { name: "অন্যান্য", icon: plusIcon, link: "others" },
  ];

  return (
    <div className="grid max-w-screen-lg md:mx-auto grid-cols-2 md:grid-cols-3 gap-4 p-4 md:py-6 lg:p-8">
      {cardData.map((card, index) => (
        <Link href={`edu-institutions/${card.link}`} key={index}>
          <div className="card justify-center w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out p-4 md:p-6 md:px-8 lg:p-10 lg:px-12 active:cursor-progress">
            <figure className="flex justify-center p-0">
              <Image
                src={card.icon}
                alt={card.name}
                className="w-10 md:w-16 h-10 md:h-16 object-contain"
              />
            </figure>
            <div className="card-body p-0 mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {card.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
