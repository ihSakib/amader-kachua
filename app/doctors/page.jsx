"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Page() {
  const [search, setSearch] = React.useState({
    name: "",
    specialty: "",
  });
  const [doctors, setDoctors] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const doctorsPerPage = 16;

  React.useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch(
          "https://amader-kachua.onrender.com/api/doctors/"
        );
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  // Filter and paginate doctors
  let filteredDoctors = [];
  let displayedDoctors = [];
  let totalPages = 0;

  if (doctors) {
    filteredDoctors = doctors.filter(
      (doctor) =>
        doctor.name.toLowerCase().includes(search.name.toLowerCase()) &&
        doctor.specialty.toLowerCase().includes(search.specialty.toLowerCase())
    );

    totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
    displayedDoctors = filteredDoctors.slice(
      (currentPage - 1) * doctorsPerPage,
      currentPage * doctorsPerPage
    );
  }

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  if (!doctors) {
    return (
      <div className=" flex justify-center items-center my-10 md:my-20">
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
                new Set(doctors.map((doctor) => doctor.specialty))
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

        {/* Doctors Cards with Animation */}
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
            {displayedDoctors.length > 0 ? (
              displayedDoctors.map((doctor) => (
                <Link
                  key={doctor.id}
                  href={`/doctors/${doctor.id}`}
                  className="card bg-base-100 shadow-xl flex-col-reverse md:flex-row-reverse gap-4 md:justify-end p-5 hover:bg-base-200 transition rounded-md"
                >
                  <div className="flex-1  ">
                    <h2 className="text-base md:text-lg font-bold">
                      {doctor.name}
                    </h2>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  </div>
                  <div className="flex-1 md:flex-none w-20 h-20 ">
                    <Image
                      src={doctor.photo}
                      alt={doctor.name}
                      width={80}
                      height={80}
                      className="rounded-sm w-20 h-20 object-cover"
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div>No doctors found</div>
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
