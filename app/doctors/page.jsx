"use client";

import React from "react";
import Link from "next/link";
import fetchData from "@/lib/fetchData";
import { Pagination } from "@nextui-org/react";

export default function Page() {
  const doctors = fetchData("doctors");

  const [search, setSearch] = React.useState({
    name: "",
    specialty: "",
  });

  const [currentPage, setCurrentPage] = React.useState(1);

  const doctorsPerPage = 16;

  // Filter doctors based on search criteria
  let filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.name.toLowerCase()) &&
      doctor.specialty.toLowerCase().includes(search.specialty.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);
  const displayedDoctors = filteredDoctors.slice(
    (currentPage - 1) * doctorsPerPage,
    currentPage * doctorsPerPage
  );

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
              <option value="" disabled selected>
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

        {/* Doctors Cards */}
        <section className="grid gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayedDoctors.length > 0 ? (
            displayedDoctors.map((doctor) => (
              <Link
                prefetch={false}
                key={doctor.id}
                href={`/doctors/${doctor.id}`}
                className="card bg-base-100 shadow-xl flex-col-reverse md:flex-row-reverse gap-4 md:justify-end p-5 hover:bg-base-200 transition rounded-md"
              >
                <div className="flex-1 md:flex-auto">
                  <h2 className="text-base md:text-lg font-bold">
                    {doctor.name}
                  </h2>
                  <p className="text-sm text-gray-500">{doctor.specialty}</p>
                </div>
                <div className="flex-1 md:flex-auto">
                  <img
                    src="https://placehold.co/300"
                    alt={doctor.name}
                    className="rounded-sm w-20 h-20 object-cover"
                  />
                </div>
              </Link>
            ))
          ) : (
            <div>No doctors found</div>
          )}
        </section>

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
