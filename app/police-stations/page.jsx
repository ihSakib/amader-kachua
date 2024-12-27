import React from "react";
import fetchData from "@/lib/fetchData";

// Data for the police stations
const policeStations = fetchData("police-stations");

export default function Page() {
  return (
    <div className="mx-auto gap-4 grid md:grid-cols-2 md:gap-6 p-4">
      {policeStations.map((station, index) => (
        <div
          key={index}
          className={`w-full max-w-md bg-white shadow-xl border border-gray-200 rounded-lg p-6 md:px-10 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out `}
        >
          <h2
            className={`text-2xl font-bold text-center  ${
              station.color === "orange" ? "text-orange-500" : "text-blue-500"
            }`}
          >
            {station.name}
          </h2>
          <p className="text-center text-gray-600">{station.location}</p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">যোগাযোগের তথ্য</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>ফোন:</strong> {station.phone}
              </li>
              <li>
                <strong>মোবাইল:</strong> {station.mobile}
              </li>
            </ul>
          </div>

          <div className="flex justify-center mt-6">
            <a
              href={station.telMobile}
              className={`btn px-6 py-2 rounded-md ${
                station.color === "orange"
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              কল করুন
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
