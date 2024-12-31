"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Dummy data for power stations
const powerStations = [
  {
    id: 1,
    name: "Power Station A",
    village: "Village X",
    location: "Location Y",
    availability: [
      { day: "Monday", time: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", time: "24/7" },
    ],
    contact: {
      phone: "0123456789",
      email: "stationA@example.com",
    },
    photo: "https://placehold.co/400",
  },
  {
    id: 2,
    name: "Power Station B",
    village: "Village Y",
    location: "Location Z",
    availability: [
      { day: "Monday", time: "10:00 AM - 6:00 PM" },
      { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
    ],
    contact: {
      phone: "0987654321",
      email: "stationB@example.com",
    },
    photo: "https://placehold.co/400",
  },
  {
    id: 3,
    name: "Power Station C",
    village: "Village W",
    location: "Location X",
    availability: [
      { day: "Friday", time: "9:00 AM - 12:00 PM" },
      { day: "Sunday", time: "24/7" },
    ],
    contact: {
      phone: "1122334455",
      email: "stationC@example.com",
    },
    photo: "https://placehold.co/400",
  },
];

export default function Page() {
  const [search, setSearch] = React.useState({
    name: "",
    location: "",
  });

  const [currentPage, setCurrentPage] = React.useState(1);

  const powerStationsPerPage = 16;

  // Filter power stations based on search criteria
  let filteredPowerStations = powerStations.filter((station) => {
    return (
      (station.name.toLowerCase().includes(search.name.toLowerCase()) &&
        station.location
          .toLowerCase()
          .includes(search.location.toLowerCase())) ||
      station.village.toLowerCase().includes(search.location.toLowerCase())
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(
    filteredPowerStations.length / powerStationsPerPage
  );
  const displayedPowerStations = filteredPowerStations.slice(
    (currentPage - 1) * powerStationsPerPage,
    currentPage * powerStationsPerPage
  );

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto py-2 md:py-4 lg:py-8">
        {/* Search Filters */}
        <section className="mb-4 md:mb-6 lg:mb-8 max-w-screen-xl">
          <div className="grid grid-cols-3 md:flex md:justify-start md:items-center gap-4">
            <input
              type="text"
              placeholder="বিদ্যুৎ অফিসের নাম খুজুন"
              className="input input-bordered box-border"
              value={search.name}
              onChange={(e) => setSearch({ ...search, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="অবস্থান খুজুন"
              className="input input-bordered box-border"
              value={search.location}
              onChange={(e) =>
                setSearch({ ...search, location: e.target.value })
              }
            />
            <button
              onClick={() =>
                setSearch({
                  name: "",
                  location: "",
                })
              }
              className="md:ml-2 btn"
            >
              <i className="fas fa-times text-xl text-orange-600"></i>{" "}
              <span className="ml-1">clear</span>
            </button>
          </div>
        </section>

        {/* Power Stations Cards with Animation */}
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
            {displayedPowerStations.length > 0 ? (
              displayedPowerStations.map((station) => (
                <Link
                  key={station.id}
                  href={`/power-stations/${station.id}`}
                  className="card bg-base-100 shadow-xl flex-col-reverse md:flex-row-reverse gap-4 md:justify-end p-5 hover:bg-base-200 transition rounded-md"
                >
                  <div className="flex-1">
                    <h2 className="text-base md:text-lg font-bold">
                      {station.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      গ্রাম: {station.village}
                    </p>
                    <p className="text-sm text-gray-500">
                      অবস্থান: {station.location}
                    </p>
                  </div>
                  <div className="flex-1 md:flex-none">
                    <img
                      src={station.photo}
                      alt={station.name}
                      className="rounded-sm w-20 h-20 object-cover"
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div>No power stations found</div>
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
