import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 -mt-10 text-center px-4 sm:px-6 md:px-8 lg:px-12">
      {/* SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-20 h-20 sm:w-24 sm:h-24 text-red-500"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.293 8.293a1 1 0 011.414 0L12 10.586l2.293-2.293a1 1 0 011.414 1.414L13.414 12l2.293 2.293a1 1 0 01-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L10.586 12 8.293 9.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>

      {/* Message */}
      <h1 className="mt-6 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
        পেইজটি পাওয়া যায়নি
      </h1>
      <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
        আপনি যে পেইজটি খুঁজছেন তা এখানে নেই।
      </p>

      {/* Back to Home Button */}
      <Link
        href="/"
        className="mt-6 px-5 py-2 text-sm md:text-base sm:px-6 sm:py-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
      >
        মূল পেইজে ফিরে যান
      </Link>
    </div>
  );
}
