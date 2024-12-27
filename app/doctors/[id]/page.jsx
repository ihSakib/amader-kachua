import React from "react";
import fetchData from "@/lib/fetchData";

export default function DoctorProfile({ params }) {
  const { id } = params;
  const doctor = fetchData("doctors", id);

  return (
    <div className="max-w-screen-lg mx-auto  pb-10 pt-4 flex-1 ">
      <div className="card gap-6 md:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/3 w-full">
          <img
            src="https://placehold.co/300"
            alt={doctor.name}
            className="object-cover w-full h-64 lg:h-auto"
          />
        </figure>
        <div className="card-body lg:w-2/3">
          <h1 className="card-title text-3xl font-bold">{doctor.name}</h1>
          <p className="text-lg text-gray-600">{doctor.specialty}</p>
          <p className="mt-2 text-sm text-gray-500">{doctor.location}</p>
          <p className="mt-2 text-sm text-gray-500">
            {doctor.contact.phone} <br/> {doctor.contact.email}
          </p>
          <h2 className="text-xl font-semibold mt-4">Availability</h2>
          <ul className="list-disc list-inside mt-2">
            {doctor.availability.map((slot, index) => (
              <li key={index} className="text-sm text-gray-500">
                {slot.day} - {slot.time}
              </li>
            ))}
          </ul>
          <div className="card-actions mt-4">
            <a href={`tel:${doctor.contact.phone}`} className="btn btn-primary">
              Call for Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
