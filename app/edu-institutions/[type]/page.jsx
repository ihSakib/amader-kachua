"use client";

import fetchData from "@/lib/fetchData";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState({
    name: "",
    location: "",
  });

  const pathSegments = pathname.split("/");
  const lastSegment = pathSegments[pathSegments.length - 1];

  const type = lastSegment;
  let typeInBangla;

  console.log(type);
  switch (type) {
    case "schools":
      typeInBangla = "স্কুল";
      break;
    case "colleges":
      typeInBangla = "কলেজ";
      break;
    case "madrasahs":
      typeInBangla = "মাদ্রাসা";
      break;
    case "polytechnics":
      typeInBangla = "পলিটেকনিক্যাল";
      break;
    case "others":
      typeInBangla = "অন্যান্য";
      break;
    default:
      break;
  }

  const institutions = fetchData("edu-institutions");

  // Filter institutions based on type
  let filteredInstitutions = institutions.filter((institution) => {
    return institution.institutionType === typeInBangla;
  });

  // Filter institutions based on search criteria
  filteredInstitutions = filteredInstitutions.filter((institution) => {
    return (
      institution.name.toLowerCase().includes(search.name.toLowerCase()) &&
      institution.location.toLowerCase().includes(search.location.toLowerCase())
    );
  });

  const institutionsPerPage = 16;

  // Calculate pagination
  const totalPages = Math.ceil(
    filteredInstitutions.length / institutionsPerPage
  );

  const displayedInstitutions = filteredInstitutions.slice(
    (currentPage - 1) * institutionsPerPage,
    currentPage * institutionsPerPage
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
              placeholder="নাম খুজুন"
              className="input input-bordered box-border"
              value={search.name}
              onChange={(e) => setSearch({ ...search, name: e.target.value })}
            />
            <select
              className="input input-bordered box-border text-[#9ca3af]"
              value={search.location}
              onChange={(e) =>
                setSearch({ ...search, location: e.target.value })
              }
            >
              <option value="" disabled>
                অবস্থান
              </option>
              {Array.from(
                new Set(institutions.map((institution) => institution.location))
              ).map((location, index) => (
                <option className="text-black" key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
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

        {/* institutions Cards with Animation */}
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
            {displayedInstitutions.length > 0 ? (
              displayedInstitutions.map((institution) => (
                <Link
                  prefetch={false}
                  key={institution.id}
                  href={`/edu-institutions/${type}/${institution.id}`}
                  className="card bg-base-100 shadow-xl flex-col-reverse md:flex-row-reverse gap-4 md:justify-end p-5 hover:bg-base-200 transition rounded-md"
                >
                  <div className="flex-1  ">
                    <h2 className="text-base md:text-lg font-bold">
                      {institution.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {institution.location}
                    </p>
                  </div>
                  <div className="flex-1 md:flex-none ">
                    <img
                      src="https://placehold.co/300"
                      alt={institution.name}
                      className="rounded-sm w-20 h-20 object-cover"
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div>No institutions found</div>
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
