"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Dummy data for hospitals
const hospitals = [
  {
    id: 1,
    name: "Hospital A",
    village: "Village X",
    location: "Location Y",
    availability: "24/7",
    contact: "0123456789",
    photo: "https://placehold.co/300",
  },
  {
    id: 2,
    name: "Hospital B",
    village: "Village Y",
    location: "Location Z",
    availability: "9AM - 5PM",
    contact: "0987654321",
    photo: "https://placehold.co/300",
  },
  {
    id: 3,
    name: "Hospital C",
    village: "Village W",
    location: "Location X",
    availability: "24/7",
    contact: "1122334455",
    photo: "https://placehold.co/300",
  },
  // Add more hospitals here
];

export default function Page() {
  const [search, setSearch] = React.useState({
    name: "",
    location: "",
  });

  const [currentPage, setCurrentPage] = React.useState(1);

  const hospitalsPerPage = 16;

  // Filter hospitals based on search criteria
  let filteredHospitals = hospitals.filter((hospital) => {
    return (
      hospital.name.toLowerCase().includes(search.name.toLowerCase()) &&
      hospital.location.toLowerCase().includes(search.location.toLowerCase()) ||
      hospital.village.toLowerCase().includes(search.location.toLowerCase())
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredHospitals.length / hospitalsPerPage);
  const displayedHospitals = filteredHospitals.slice(
    (currentPage - 1) * hospitalsPerPage,
    currentPage * hospitalsPerPage
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
              placeholder="হাসপাতালের নাম খুজুন"
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

        {/* Hospitals Cards with Animation */}
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
            {displayedHospitals.length > 0 ? (
              displayedHospitals.map((hospital) => (
                <Link
                  key={hospital.id}
                  href={`/hospitals/${hospital.id}`}
                  className="card bg-base-100 shadow-xl flex-col-reverse md:flex-row-reverse gap-4 md:justify-end p-5 hover:bg-base-200 transition rounded-md"
                >
                  <div className="flex-1">
                    <h2 className="text-base md:text-lg font-bold">
                      {hospital.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      গ্রাম: {hospital.village}
                    </p>
                    <p className="text-sm text-gray-500">
                      অবস্থান: {hospital.location}
                    </p>
                  </div>
                  <div className="flex-1 md:flex-none">
                    <img
                      src={hospital.photo}
                      alt={hospital.name}
                      className="rounded-sm w-20 h-20 object-cover"
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div>No hospitals found</div>
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
