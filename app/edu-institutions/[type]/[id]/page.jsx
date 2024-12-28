import fetchData from "@/lib/fetchData";
import React from "react";

export default async function page({ params }) {
  const { type, id } = await params;
  const institution = fetchData("edu-institutions", id);

  return (
    <div className="max-w-screen-lg mx-auto  pb-10 pt-4 flex-1 ">
      <div className="card gap-6 md:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/3 w-full">
          <img
            src="https://placehold.co/1000"
            alt={institution.name}
            className="object-cover w-full h-64 lg:h-full"
          />
        </figure>
        <div className="card-body lg:w-2/3">
          <h1 className="card-title text-3xl font-bold">{institution.name}</h1>

          <p className=" text-lg  text-gray-500">{institution.location}</p>
          <p className="-mt-1 text-sm md:text-base text-gray-500">
            01702230204 / mail@example.com
          </p>

          <p className=" text-sm md:text-base text-gray-500">
            অধ্যক্ষ: মোঃ আবু হানিফ
          </p>
          <p className="-mt-1 text-sm md:text-base text-gray-500">
            যোগাযোগ: 01943113423{" "}
          </p>

          <h2 className="text-xl font-semibold mt-4">প্রস্তিষ্ঠান সম্পর্কে</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            nostrum magnam deleniti iure voluptatibus a dolore ad doloremque
            provident debitis. Commodi, iusto quam! Quidem ea distinctio ratione
            quod suscipit aliquam?
          </p>
          <div className="card-actions mt-4">
            <a href={`tel:11111111`} className="btn btn-primary">
              কল করুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
