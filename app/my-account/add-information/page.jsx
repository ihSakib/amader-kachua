import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 pt-0 mt-4 lg:mt-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">তথ্য দিন</h1>
        <div className="grid grid-cols-2 lg:flex flex-wrap gap-2 md:gap-4 justify-center items-center max-w-screen-lg mb-10">
          <Link
            href="/my-account/add-information/doctor"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-user-md mr-2"></i> ডাক্তার
          </Link>
          <Link
            href="/my-account/add-information/hospital"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-hospital mr-2"></i> হাসপাতাল
          </Link>
          <Link
            href="/my-account/add-information/fire-station"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-fire-extinguisher mr-2"></i> ফায়ার স্টেশন
          </Link>
          <Link
            href="/my-account/add-information/police-station"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-shield-alt mr-2"></i> পুলিশ স্টেশন
          </Link>
          <Link
            href="/my-account/add-information/electricity-office"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-bolt mr-2"></i> বিদ্যুৎ অফিস
          </Link>
          <Link
            href="/my-account/add-information/educational-institution"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-graduation-cap mr-2"></i> শিক্ষা প্রতিষ্ঠান
          </Link>
          <Link
            href="/my-account/add-information/courier-service"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-shipping-fast mr-2"></i> কুরিয়ার সার্ভিস
          </Link>
          <Link
            href="/my-account/add-information/bus"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-bus-alt mr-2"></i> বাস
          </Link>
          <Link
            href="/my-account/add-information/market"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-store mr-2"></i> বাজার
          </Link>
          <Link
            href="/my-account/add-information/house-rent"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-home mr-2"></i> বাড়ি ভাড়া
          </Link>
          <Link
            href="/my-account/add-information/hotel"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-hotel mr-2"></i> হোটেল
          </Link>
          <Link
            href="/my-account/add-information/restaurant"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-hamburger mr-2"></i> রেস্টুরেন্ট
          </Link>
          <Link
            href="/my-account/add-information/car-rent"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-car mr-2"></i> গাড়ি ভাড়া
          </Link>
          <Link
            href="/my-account/add-information/technician"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-tools mr-2"></i> মিস্ত্রি
          </Link>
          <Link
            href="/my-account/add-information/entrepreneur"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-lightbulb mr-2"></i> উদ্যোক্তা
          </Link>
          <Link
            href="/my-account/add-information/post-office"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-envelope mr-2"></i> ডাকঘর
          </Link>
          <Link
            href="/my-account/add-information/tourist-spot"
            className="btn btn-outline md:btn-wide md:text-lg"
          >
            <i className="fas fa-map-marker-alt mr-2"></i> পর্যটন স্থান
          </Link>
        </div>
      </div>
    </div>
  );
}
