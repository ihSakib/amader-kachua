import Image from "next/image";

// Server Component
export default async function DoctorProfile({ params }) {
  const doctorId = params.id;
  let doctor;

  try {
    const response = await fetch(
      `https://amader-kachua.onrender.com/api/doctors/${doctorId}/`,
      { cache: "no-store" } // Avoid caching for fresh data
    );
    if (response.ok) {
      doctor = await response.json();
    } else {
      throw new Error("Failed to fetch doctor data");
    }
  } catch (error) {
    console.error("Error fetching doctor:", error);
    return (
      <div className="flex justify-center items-center my-10 md:my-20">
        <p className="text-red-500">Error: Could not fetch doctor details.</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto pb-10 pt-4 flex-1">
      <div className="card gap-6 md:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/3 w-full">
          <Image
            src={doctor.photo}
            alt={doctor.name}
            width={300}
            height={300}
            className="object-cover lg:h-auto"
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
