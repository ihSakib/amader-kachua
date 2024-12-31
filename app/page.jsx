import Image from "next/image";
import Link from "next/link";

import doctorIcon from "@/public/icons/doctor.png";
import hospitalIcon from "@/public/icons/hospital.png";
import busIcon from "@/public/icons/bus.png";
import touristIcon from "@/public/icons/tourist.png";
import houseIcon from "@/public/icons/house.png";
import marketIcon from "@/public/icons/market.png";
import courierIcon from "@/public/icons/courier.png";
import fireStationIcon from "@/public/icons/fire-station.png";
import policeStationIcon from "@/public/icons/police-station.png";
import websiteIcon from "@/public/icons/website.png";
import powerStationIcon from "@/public/icons/power-station.png";
import bloodDonationIcon from "@/public/icons/blood-donation.png";
import hotelIcon from "@/public/icons/hotel.png";
import restaurantIcon from "@/public/icons/restaurant.png";
import carRentIcon from "@/public/icons/car-rent.png";
import mechanicIcon from "@/public/icons/mechanic.png";
import jobIcon from "@/public/icons/job.png";
import entrepreneurIcon from "@/public/icons/entrepreneur.png";
import postOfficesIcon from "@/public/icons/postbox.png";
import educationIcon from "@/public/icons/university.png";
import avatarIcon from "@/public/icons/user.png";
import plusIcon from "@/public/icons/writing.png";
import loginIcon from "@/public/icons/password.png";

export default function Home() {
  const cards = [
    { href: "/my-account", icon: avatarIcon, title: "মাই একাউন্ট" },
    { href: "/my-account/login", icon: loginIcon, title: "লগইন" },
    { href: "/my-account/add-information", icon: plusIcon, title: "তথ্য দিন" },

    { href: "/doctors", icon: doctorIcon, title: "ডাক্তার" },
    { href: "/hospitals", icon: hospitalIcon, title: "হাসপাতাল" },
    { href: "/fire-stations", icon: fireStationIcon, title: "ফায়ার স্টেশন" },
    {
      href: "/police-stations",
      icon: policeStationIcon,
      title: "পুলিশ স্টেশন",
    },
    {
      href: "/blood-donations",
      icon: bloodDonationIcon,
      title: "রক্ত দান",
    },
    {
      href: "/power-stations",
      icon: powerStationIcon,
      title: "বিদ্যুৎ অফিস",
    },
    {
      href: "/edu-institutions",
      icon: educationIcon,
      title: "শিক্ষা প্রতিষ্ঠান",
    }, // New Entry
    { href: "/courier-services", icon: courierIcon, title: "কুরিয়ার সার্ভিস" },
    { href: "/buses", icon: busIcon, title: "বাস" },
    { href: "/markets", icon: marketIcon, title: "বাজার" },
    { href: "/house-rentals", icon: houseIcon, title: "বাড়ি ভাড়া" },
    { href: "/hotels", icon: hotelIcon, title: "হোটেল" },
    { href: "/restaurants", icon: restaurantIcon, title: "রেস্টুরেন্ট" },
    { href: "/car-rents", icon: carRentIcon, title: "গাড়ি ভাড়া" },
    { href: "/technicians", icon: mechanicIcon, title: "মিস্ত্রি" },
    { href: "/jobs", icon: jobIcon, title: "চাকরি" },
    { href: "/tourist-attractions", icon: touristIcon, title: "পর্যটন স্থান" },
    { href: "/websites", icon: websiteIcon, title: "ওয়েবসাইট" },
    { href: "/entrepreneurs", icon: entrepreneurIcon, title: "উদ্যোক্তা" },
    { href: "/post-offices", icon: postOfficesIcon, title: "ডাকঘর" },
  ];

  return (
    <main className="flex-1  max-w-screen-lg mx-auto">
      <section>{/* <Carousel /> */}</section>
      <section className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 lg:gap-4 pt-4 pb-6   ">
        {cards.map((card, index) => (
          <Link href={card.href} key={index} className="active:cursor-progress">
            <div className="flex flex-col items-center justify-center gap-3 py-6 px-4 md:p-6 shadow-md hover:shadow-lg rounded-md bg-slate-50  transition-transform hover:scale-105 h-full   border-2 md:border-4 border-transparent hover:border-t-red-500 hover:border-r-green-500 hover:border-b-blue-500 hover:border-l-yellow-500 ">
              <Image
                className="w-8 md:w-12 lg:w-14 "
                src={card.icon}
                alt={`${card.title} icon`}
              />
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-center ">
                {card.title}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
