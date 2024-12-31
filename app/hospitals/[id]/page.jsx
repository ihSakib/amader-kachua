import React from "react";

// Dummy data for hospitals
const hospitals = [
  {
    id: 1,
    name: "Hospital A",
    village: "Village X",
    location: "Location Y",
    availability: [
      { day: "Monday", time: "9:00 AM - 5:00 PM" },
      { day: "Tuesday", time: "24/7" },
    ],
    contact: {
      phone: "0123456789",
      email: "hospitalA@example.com",
    },
    photo: "https://placehold.co/400",
  },
  {
    id: 2,
    name: "Hospital B",
    village: "Village Y",
    location: "Location Z",
    availability: [
      { day: "Monday", time: "10:00 AM - 6:00 PM" },
      { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
    ],
    contact: {
      phone: "0987654321",
      email: "hospitalB@example.com",
    },
    photo: "https://placehold.co/400",
  },
  {
    id: 3,
    name: "Hospital C",
    village: "Village W",
    location: "Location X",
    availability: [
      { day: "Friday", time: "9:00 AM - 12:00 PM" },
      { day: "Sunday", time: "24/7" },
    ],
    contact: {
      phone: "1122334455",
      email: "hospitalC@example.com",
    },
    photo: "https://placehold.co/400",
  },
];

export default function HospitalProfile({ params }) {
  const { id } = params;

  // Find the hospital by id
  const hospital = hospitals.find((hospital) => hospital.id === parseInt(id));

  // If hospital is not found
  if (!hospital) {
    return (
      <div className="max-w-screen-lg mx-auto py-10">
        <p className="text-center text-red-500 text-lg">
          Hospital not found. Please check the ID.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto pb-10 pt-4 md:pt-6 lg:pt-10 flex-1">
      <div className="card gap-6 md:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/3 w-full">
          <img
            src={hospital.photo}
            alt={hospital.name}
            className="object-cover w-full h-64 lg:h-auto"
          />
        </figure>
        <div className="card-body lg:w-2/3">
          <h1 className="card-title text-3xl font-bold">{hospital.name}</h1>
          <p className="text-lg text-gray-600">গ্রাম: {hospital.village}</p>
          <p className="text-lg text-gray-600">অবস্থান: {hospital.location}</p>
          <p className="text-sm md:text-base text-gray-500">
            {hospital.contact.phone} <br /> {hospital.contact.email}
          </p>
          <h2 className="text-xl font-semibold mt-4">সময়সূচী</h2>
          <ul className="list-disc list-inside mt-2">
            {hospital.availability.map((slot, index) => (
              <li key={index} className="text-sm text-gray-500">
                {slot.day} - {slot.time}
              </li>
            ))}
          </ul>
          <div className="card-actions mt-4">
            <a
              href={`tel:${hospital.contact.phone}`}
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
