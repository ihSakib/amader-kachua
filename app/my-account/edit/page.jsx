"use client";

import React, { useState, useEffect } from "react";
import { parseCookies, setCookie } from "nookies";
import { useRouter } from "next/navigation";

export default function EditAccount() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  //dummy data
  const user = {
    id: 1,
    name: "Iftekhar Sakib",
    email: "ihsakib@outlook.com",
    phone: "01776008517",
    village: "Nurpur",
    union_name: "১০নং গোহট (উত্তর) ইউনিয়ন পরিষদ",
    ward: "9",
    blood_group: "AB+",
    occupation: "Web Developer",
    photo_path: "/uploads/me.jpg",
    created_at: "2024-12-31T07:09:37.000Z",
  };

  useEffect(() => {
    setFormData(user);
  }, []);

  // useEffect(() => {
  //   const cookies = parseCookies();
  //   const user = cookies["user"];

  //   if (false) {
  //     router.push("/my-account/login");
  //   } else {
  //     const userData = JSON.parse(user);
  //     setFormData(userData);
  //   }
  // }, [router]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData(e.target);

    if (photo) {
      formDataToSend.set("photo", photo);
    }

    try {
      const response = await fetch("/api/update-user", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        setLoading(false);
        alert("Profile updated successfully");
        setCookie({}, "user", JSON.stringify(data.user), {
          maxAge: 60 * 60 * 24 * 7, // 1 week
          path: "/",
        });
        router.push("/my-account");
      } else {
        console.error("Error updating profile:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 mb-20 max-w-screen-sm">
      <h1 className="text-2xl font-bold my-4 md:mt-6 text-center">এডিট প্রোফাইল</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
      >
        <input type="text" name="id" value={formData.id} id="" hidden={true} />
        <div className="form-control">
          <label className="label">
            <span className="label-text">নাম</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ই-মেইল</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ফোন</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">গ্রাম</span>
          </label>
          <input
            type="text"
            name="village"
            value={formData.village}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ইউনিউন</span>
          </label>
          <input
            type="text"
            name="union_name"
            value={formData.union_name}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ওয়ার্ড</span>
          </label>
          <input
            type="text"
            name="ward"
            value={formData.ward}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ব্লাড গ্রুপ</span>
          </label>
          <input
            type="text"
            name="blood_group"
            value={formData.blood_group}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">পেশা</span>
          </label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control md:col-span-2">
          <label className="label">
            <span className="label-text">ছবি</span>
          </label>
          <input
            type="file"
            onChange={handlePhotoChange}
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div className="md:col-span-2">
          <button type="submit" className="btn btn-primary w-full mt-4">
            {loading ? (
              <span>
                <i className="fa-solid fa-spinner fa-spin mr-2"></i>
                সেভিং...
              </span>
            ) : (
              "সেইভ করুন"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
