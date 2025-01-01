"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [userInfo, setUserInfo] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const pid = localStorage.getItem("pid");

        if (!accessToken) {
          setLoggedIn(false);
          return;
        }

        const response = await fetch(
          `https://amader-kachua.onrender.com/api/profiles/${pid}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setLoggedIn(true);
          setUserInfo((prev) => ({ ...prev, ...data }));
        } else {
          setLoggedIn(false);
          if (response.status === 401) {
            // Token expired, optionally handle refresh logic here
            console.warn("Access token expired. Refresh token may be needed.");
          }
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
        setLoggedIn(false);
      }
    };

    fetchUserInfo();
  }, []);

  return isLoggedIn ? (
    <div className="container mx-auto p-4 pt-0 max-w-screen-lg">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-6 pt-4 lg:pt-10">
        <div className="relative lg:mr-6 w-32 h-32 lg:w-48 lg:h-48 lg:mb-0 mb-4">
          <img
            src={
              "https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
            }
            alt="User Avatar"
            className="h-full w-full rounded-md"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between gap-4 items-center mb-2">
            <h1 className="text-3xl font-bold">
              {userInfo.user.first_name + " " + userInfo.user.last_name}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-600">ই-মেইল: {userInfo.user.email}</p>
            <p className="text-gray-600">ফোন: {userInfo.phone_number}</p>
            <p className="text-gray-600">গ্রাম: {userInfo.village}</p>
            <p className="text-gray-600">ইউনিয়ন: {userInfo.union}</p>
            <p className="text-gray-600">ওয়ার্ড: {userInfo.ward}</p>
            <p className="text-gray-600">
              রক্তের গ্রুপ: {userInfo.blood_group}
            </p>
            <p className="text-gray-600">পেশা: {userInfo.occupation}</p>
          </div>
        </div>
      </div>

      <div className="my-4 mb-20 md:my-6 lg:my-8 flex-wrap px-6 grid grid-cols-2 md:flex justify-center lg:justify-start gap-2 md:gap-4">
        <Link
          href={"/my-account/edit"}
          className="btn btn-neutral btn-outline md:text-lg md:btn-wide"
        >
          <i className="fa-solid fa-user-pen"></i> এডিট
        </Link>

        <Link
          href={"/my-account/statistics"}
          className="btn btn-neutral btn-outline md:text-lg md:btn-wide"
        >
          <i className="fa-solid fa-chart-simple"></i> পরিসংখ্যান
        </Link>

        <Link
          href={"/my-account/add-information"}
          className="btn btn-neutral btn-outline md:text-lg md:btn-wide"
        >
          <i className="fa-solid fa-plus"></i> তথ্য দিন
        </Link>

        <Link
          href={"/my-account/manage-bloods"}
          className="btn btn-neutral btn-outline md:text-lg md:btn-wide"
        >
          <i className="fa-solid fa-droplet"></i> ম্যানেজ ব্লাড
        </Link>
        <Link
          href={"/my-account/manage-jobs"}
          className="btn btn-neutral btn-outline md:text-lg md:btn-wide"
        >
          <i className="fa-solid fa-suitcase"></i> ম্যানেজ জব
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center my-6 md:my-10">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
        দয়া করে লগিন করুন
      </h2>
      <Link
        href="/my-account/login"
        className="btn btn-sm text-sm my-4 md:text-base btn-outline"
      >
        লগইন করুন
      </Link>
    </div>
  );
}
