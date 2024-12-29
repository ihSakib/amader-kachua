"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const [userInfo, setUserInfo] = useState({
    name: "জন ডো",
    email: "john.doe@example.com",
    phone: "0123456789",
    village: "গ্রাম নাম",
    union: "১নং সাচার ইউনিয়ন পরিষদ",
    ward: "ওয়ার্ড নাম্বার",
    bloodGroup: "A+",
    professional: "পেশা",
    photo: "https://placehold.co/300",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserInfo((prevInfo) => ({
          ...prevInfo,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="container mx-auto p-4 pt-0  max-w-4xl">
      <div className="flex flex-col lg:flex-row items-center gap-4 p-6 pt-4 lg:pt-10">
        <div className="relative lg:mr-6 w-32 h-32 lg:w-48 lg:h-48  lg:mb-0 mb-4">
          <img
            src={userInfo.photo}
            alt="User Avatar"
            className="h-full w-full"
          />
          {isEditing && (
            <>
              <input
                type="file"
                onChange={handlePhotoChange}
                className="absolute z-20 top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="absolute z-10 top-0 left-0 w-full h-full bg-white/50 flex justify-center items-center">
                <p className="font-bold">
                  <i className="text-lg md:text-xl lg:text-2xl fa-solid fa-cloud-arrow-up"></i>
                </p>
              </div>
            </>
          )}
        </div>
        <div className="flex-1">
          <div className="flex justify-between gap-4 items-center mb-2">
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
                className="w-full bg-slate-200 px-2 py-1"
              />
            ) : (
              <h1 className="text-3xl font-bold">{userInfo.name} </h1>
            )}

            <button className="btn btn-sm btn-outline" onClick={toggleEdit}>
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
                className="w-full bg-slate-200 px-2 py-1"
              />
            ) : (
              <p className="text-gray-600">ই-মেইল: {userInfo.email}</p>
            )}

            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={userInfo.phone}
                onChange={handleChange}
                className="w-full bg-slate-200 px-2 py-1"
              />
            ) : (
              <p className="text-gray-600">ফোন: {userInfo.phone}</p>
            )}

            {isEditing ? (
              <input
                type="text"
                name="village"
                value={userInfo.village}
                onChange={handleChange}
                className="w-full bg-slate-200 px-2 py-1"
              />
            ) : (
              <p className="text-gray-600">গ্রাম: {userInfo.village}</p>
            )}
            {isEditing ? (
              <select
                name="union"
                value={userInfo.union}
                onChange={handleChange}
                className="w-full bg-slate-200 px-2 py-1"
              >
                <option>১নং সাচার ইউনিয়ন পরিষদ</option>
                <option>২নং পাথৈর ইউনিয়ন পরিষদ</option>
                <option>৩নং বিতারা ইউনিয়ন পরিষদ</option>
                <option>৪নং পালাখাল মডেল ইউনিয়ন পরিষদ</option>
                <option>৫নং সহদেবপুর (পশ্চিম) ইউনিয়ন পরিষদ</option>
                <option>৬নং কচুয়া (উত্তর) ইউনিয়ন পরিষদ</option>
                <option>৭নং কচুয়া (দক্ষিণ) ইউনিয়ন পরিষদ</option>
                <option>৮নং কাদলা ইউনিয়ন পরিষদ</option>
                <option>৯নং কড়ইয়া ইউনিয়ন পরিষদ</option>
                <option>১০নং গোহট (উত্তর) ইউনিয়ন পরিষদ</option>
                <option>১১নং গোহট (দক্ষিণ) ইউনিয়ন পরিষদ</option>
                <option>১২নং আশ্রাফপুর ইউনিয়ন পরিষদ</option>
              </select>
            ) : (
              <p className="text-gray-600">ইউনিয়ন: {userInfo.union}</p>
            )}
            {isEditing ? (
              <input
                type="text"
                name="ward"
                value={userInfo.ward}
                onChange={handleChange}
                className="w-full bg-slate-200 px-2 py-1"
              />
            ) : (
              <p className="text-gray-600">ওয়ার্ড: {userInfo.ward}</p>
            )}
            {isEditing ? (
              <select
                name="bloodGroup"
                value={userInfo.bloodGroup}
                onChange={handleChange}
                className="w-full bg-slate-200 px-2 py-1"
              >
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            ) : (
              <p className="text-gray-600">
                রক্তের গ্রুপ: {userInfo.bloodGroup}
              </p>
            )}
            {isEditing ? (
              <input
                type="text"
                name="professional"
                value={userInfo.professional}
                onChange={handleChange}
                className="w-full bg-slate-200 px-2 py-1"
              />
            ) : (
              <p className="text-gray-600">পেশা: {userInfo.professional}</p>
            )}
          </div>
        </div>
      </div>

      <div className="my-4 md:my-6 lg:my-8 flex-wrap px-6 flex justify-center lg:justify-start  gap-2 md:gap-4">
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
          <i class="fa-solid fa-droplet"></i> ম্যানেজ ব্লাড
        </Link>
        <Link
          href={"/my-account/add-jobs"}
          className="btn btn-neutral btn-outline md:text-lg md:btn-wide"
        >
          <i class="fa-solid fa-suitcase"></i> ম্যানেজ জব
        </Link>
      </div>
    </div>
  );
}
