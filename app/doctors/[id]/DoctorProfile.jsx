"use client";

import React, { useEffect, useState } from "react";

export default function DoctorProfile({ doctorId }) {
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(
          `https://amader-kachua.onrender.com/api/doctors/${doctorId}/`
        );
        if (response.ok) {
          const data = await response.json();
          setDoctor(data);
        } else {
          setError("Failed to fetch doctor");
        }
      } catch (error) {
        console.error("Error fetching doctor:", error);
        setError("Failed to fetch doctor");
      }
    };

    fetchDoctor();
  }, [doctorId]);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!doctor) {
    return (
      <div className=" flex justify-center items-center my-10 md:my-20">
        <span className="loading loading-bars loading-md md:loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto pb-10 pt-4 flex-1">
      <div className="card gap-6 md:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/3 w-full">
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="object-cover w-full h-64 lg:h-auto"
          />
        </figure>
        <div className="card-body lg:w-2/3">
          <h1 className="card-title text-3xl font-bold">{doctor.name}</h1>
          <p className="text-lg text-gray-600">{doctor.specialty}</p>
          <p className="text-sm md:text-base text-gray-500">
            {doctor.location}
          </p>
          <p className="text-sm md:text-base text-gray-500">
            {doctor.contact?.phone} <br /> {doctor.contact?.email}
          </p>
          <h2 className="text-xl font-semibold mt-4">সময়সূচী</h2>
          <ul className="list-disc list-inside mt-2">
            {doctor.availability?.map((slot, index) => (
              <li key={index} className="text-sm text-gray-500">
                {slot.day} - {slot.time}
              </li>
            ))}
          </ul>
          <div className="card-actions mt-4">
            <a
              href={`tel:${doctor.contact?.phone}`}
              className="btn btn-primary"
            >
              কল করুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
