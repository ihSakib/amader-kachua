import React from "react";

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

export default function PowerStationProfile({ params }) {
  const { id } = params;

  // Find the power station by id
  const powerStation = powerStations.find(
    (station) => station.id === parseInt(id)
  );

  // If power station is not found
  if (!powerStation) {
    return (
      <div className="max-w-screen-lg mx-auto py-10">
        <p className="text-center text-red-500 text-lg">
          Power station not found. Please check the ID.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto pb-10 pt-4 md:pt-6 lg:pt-10 flex-1">
      <div className="card gap-6 md:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/3 w-full">
          <img
            src={powerStation.photo}
            alt={powerStation.name}
            className="object-cover w-full h-64 lg:h-auto"
          />
        </figure>
        <div className="card-body lg:w-2/3">
          <h1 className="card-title text-3xl font-bold">{powerStation.name}</h1>
          <p className="text-lg text-gray-600">গ্রাম: {powerStation.village}</p>
          <p className="text-lg text-gray-600">
            অবস্থান: {powerStation.location}
          </p>
          <p className="text-sm md:text-base text-gray-500">
            {powerStation.contact.phone} <br /> {powerStation.contact.email}
          </p>
          <h2 className="text-xl font-semibold mt-4">সময়সূচী</h2>
          <ul className="list-disc list-inside mt-2">
            {powerStation.availability.map((slot, index) => (
              <li key={index} className="text-sm text-gray-500">
                {slot.day} - {slot.time}
              </li>
            ))}
          </ul>
          <div className="card-actions mt-4">
            <a
              href={`tel:${powerStation.contact.phone}`}
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
