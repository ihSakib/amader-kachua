"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import avatar from "@/public/icons/hacker.png";

export default function Page() {
  const [search, setSearch] = React.useState({
    name: "",
    specialty: "",
  });
  const [technicians, setTechnicians] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const techniciansPerPage = 16;

  // Dummy data for technicians
  React.useEffect(() => {
    const dummyTechnicians = [
      {
        id: 1,
        name: "জন ডো",
        specialty: "ইলেক্ট্রিশিয়ান",
        photo: "/path/to/photo1.jpg",
        location: "ঢাকা",
        email: "john.doe@example.com",
        phone: "০১২৩৪৫৬৭৮৯",
      },
      {
        id: 2,
        name: "জেন স্মিথ",
        specialty: "প্লাম্বার",
        photo: "/path/to/photo2.jpg",
        location: "চট্টগ্রাম",
        email: "jane.smith@example.com",
        phone: "০১২৩৪৫৬৭৯০",
      },
      {
        id: 3,
        name: "মাইক জনসন",
        specialty: "কার্পেন্টার",
        photo: "/path/to/photo3.jpg",
        location: "সিলেট",
        email: "mike.johnson@example.com",
        phone: "০১২৩৪৫৬৭৯১",
      },
      {
        id: 4,
        name: "এমিলি ডেভিস",
        specialty: "মেকানিক",
        photo: "/path/to/photo4.jpg",
        location: "খুলনা",
        email: "emily.davis@example.com",
        phone: "০১২৩৪৫৬৭৯২",
      },
      {
        id: 5,
        name: "ক্রিস ব্রাউন",
        specialty: "পেইন্টার",
        photo: "/path/to/photo5.jpg",
        location: "বরিশাল",
        email: "chris.brown@example.com",
        phone: "০১২৩৪৫৬৭৯৩",
      },
      {
        id: 6,
        name: "প্যাট্রিসিয়া গার্সিয়া",
        specialty: "ওয়েল্ডার",
        photo: "/path/to/photo6.jpg",
        location: "রংপুর",
        email: "patricia.garcia@example.com",
        phone: "০১২৩৪৫৬৭৯৪",
      },
      {
        id: 7,
        name: "রবার্ট উইলসন",
        specialty: "টেকনিশিয়ান",
        photo: "/path/to/photo7.jpg",
        location: "ময়মনসিংহ",
        email: "robert.wilson@example.com",
        phone: "০১২৩৪৫৬৭৯৫",
      },
      {
        id: 8,
        name: "লরা মার্টিনেজ",
        specialty: "ইলেক্ট্রিশিয়ান",
        photo: "/path/to/photo8.jpg",
        location: "রাজশাহী",
        email: "laura.martinez@example.com",
        phone: "০১২৩৪৫৬৭৯৬",
      },
      {
        id: 9,
        name: "ড্যানিয়েল রবিনসন",
        specialty: "প্লাম্বার",
        photo: "/path/to/photo9.jpg",
        location: "কুমিল্লা",
        email: "daniel.robinson@example.com",
        phone: "০১২৩৪৫৬৭৯৭",
      },
      {
        id: 10,
        name: "সোফিয়া হার্নান্দেজ",
        specialty: "কার্পেন্টার",
        photo: "/path/to/photo10.jpg",
        location: "গাজীপুর",
        email: "sophia.hernandez@example.com",
        phone: "০১২৩৪৫৬৭৯৮",
      },
      {
        id: 11,
        name: "জেমস লি",
        specialty: "মেকানিক",
        photo: "/path/to/photo11.jpg",
        location: "নারায়ণগঞ্জ",
        email: "james.lee@example.com",
        phone: "০১২৩৪৫৬৭৯৯",
      },
      {
        id: 12,
        name: "ওলিভিয়া ক্লার্ক",
        specialty: "পেইন্টার",
        photo: "/path/to/photo12.jpg",
        location: "টাঙ্গাইল",
        email: "olivia.clark@example.com",
        phone: "০১২৩৪৫৬৭০০",
      },
      {
        id: 13,
        name: "ডেভিড লুইস",
        specialty: "ওয়েল্ডার",
        photo: "/path/to/photo13.jpg",
        location: "যশোর",
        email: "david.lewis@example.com",
        phone: "০১২৩৪৫৬৭০১",
      },
      {
        id: 14,
        name: "মিয়া ওয়াকার",
        specialty: "টেকনিশিয়ান",
        photo: "/path/to/photo14.jpg",
        location: "কক্সবাজার",
        email: "mia.walker@example.com",
        phone: "০১২৩৪৫৬৭০২",
      },
      {
        id: 15,
        name: "হেনরি হল",
        specialty: "ইলেক্ট্রিশিয়ান",
        photo: "/path/to/photo15.jpg",
        location: "বগুড়া",
        email: "henry.hall@example.com",
        phone: "০১২৩৪৫৬৭০৩",
      },
      {
        id: 16,
        name: "আভা অ্যালেন",
        specialty: "প্লাম্বার",
        photo: "/path/to/photo16.jpg",
        location: "পাবনা",
        email: "ava.allen@example.com",
        phone: "০১২৩৪৫৬৭০৪",
      },
      {
        id: 17,
        name: "ইথান ইয়ং",
        specialty: "কার্পেন্টার",
        photo: "/path/to/photo17.jpg",
        location: "ব্রাহ্মণবাড়িয়া",
        email: "ethan.young@example.com",
        phone: "০১২৩৪৫৬৭০৫",
      },
      {
        id: 18,
        name: "শার্লট কিং",
        specialty: "মেকানিক",
        photo: "/path/to/photo18.jpg",
        location: "নরসিংদী",
        email: "charlotte.king@example.com",
        phone: "০১২৩৪৫৬৭০৬",
      },
      {
        id: 19,
        name: "বেঞ্জামিন স্কট",
        specialty: "পেইন্টার",
        photo: "/path/to/photo19.jpg",
        location: "ফরিদপুর",
        email: "benjamin.scott@example.com",
        phone: "০১২৩৪৫৬৭০৭",
      },
      {
        id: 20,
        name: "হার্পার রাইট",
        specialty: "ওয়েল্ডার",
        photo: "/path/to/photo20.jpg",
        location: "চাঁদপুর",
        email: "harper.wright@example.com",
        phone: "০১২৩৪৫৬৭০৮",
      },
    ];

    setTechnicians(dummyTechnicians);
  }, []);

  // Filter and paginate technicians
  let filteredTechnicians = [];
  let displayedTechnicians = [];
  let totalPages = 0;

  if (technicians) {
    filteredTechnicians = technicians.filter(
      (technician) =>
        technician.name.toLowerCase().includes(search.name.toLowerCase()) &&
        technician.specialty
          .toLowerCase()
          .includes(search.specialty.toLowerCase())
    );

    totalPages = Math.ceil(filteredTechnicians.length / techniciansPerPage);

    displayedTechnicians = filteredTechnicians.slice(
      (currentPage - 1) * techniciansPerPage,
      currentPage * techniciansPerPage
    );
  }

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  if (!technicians) {
    return (
      <div className="flex justify-center items-center my-10 md:my-20">
        <span className="loading loading-bars loading-md md:loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto py-2 md:py-4 lg:py-8">
        {/* Search Filters */}
        <section className="mb-4 md:mb-6 lg:mb-8 max-w-screen-xl">
          <div className="grid grid-cols-3 md:flex md:justify-start md:items-center gap-4">
            <input
              type="text"
              placeholder="নাম খুজুন"
              className="input input-bordered box-border"
              value={search.name}
              onChange={(e) => setSearch({ ...search, name: e.target.value })}
            />
            <select
              className="input input-bordered box-border text-[#9ca3af]"
              value={search.specialty}
              onChange={(e) =>
                setSearch({ ...search, specialty: e.target.value })
              }
            >
              <option value="" disabled>
                বিশেষজ্ঞ খুজুন
              </option>
              {Array.from(
                new Set(technicians.map((technician) => technician.specialty))
              ).map((specialty, index) => (
                <option className="text-black" key={index} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
            <button
              onClick={() =>
                setSearch({
                  name: "",
                  specialty: "",
                })
              }
              className="md:ml-2 btn"
            >
              <i className="fas fa-times text-xl text-orange-600"></i>{" "}
              <span className="ml-1">clear</span>
            </button>
          </div>
        </section>

        {/* Technicians Cards with Animation */}
        <AnimatePresence mode="wait">
          <motion.section
            key={currentPage}
            className="grid gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.2 }}
          >
            {displayedTechnicians.length > 0 ? (
              displayedTechnicians.map((technician) => (
                <Link
                  key={technician.id}
                  href={`/technicians/${technician.id}`}
                  className="card bg-base-100 shadow-xl flex-col-reverse md:flex-row-reverse gap-4 md:justify-end p-5 hover:bg-base-200 transition rounded-md"
                >
                  <div className="flex-1">
                    <h2 className="text-base md:text-lg font-bold">
                      {technician.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {technician.specialty}
                    </p>
                    <p className="text-sm text-gray-500">
                      {technician.location}
                    </p>
                  </div>
                  <div className="flex-1 md:flex-none w-20 h-20">
                    <Image
                      src={avatar}
                      alt={technician.name}
                      width={80}
                      height={80}
                      className="rounded-sm w-20 h-20 object-cover"
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div>No technicians found</div>
            )}
          </motion.section>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center my-8 items-center gap-3">
            <button
              className="btn btn-sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ←
            </button>
            <div className="join">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`btn btn-sm join-item ${
                    currentPage === index + 1 ? "btn-active" : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              className="btn btn-sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
