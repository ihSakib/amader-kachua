import React from "react";
import "daisyui/dist/full.css";

export default function page() {
  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">লগইন</h1>
      <form className="mb-6 bg-white p-6 rounded-lg shadow-md">
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">ই-মেইল</span>
          </label>
          <input
            type="email"
            placeholder="ই-মেইল"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">পাসওয়ার্ড</span>
          </label>
          <input
            type="password"
            placeholder="পাসওয়ার্ড"
            className="input input-bordered w-full"
          />
        </div>
        <button className="btn btn-primary w-full mb-4">লগইন</button>
        <button className="btn btn-outline w-full mb-2">
          ফেসবুক দিয়ে লগইন করুন
        </button>
        <button className="btn btn-outline w-full mb-4">
          গুগল দিয়ে লগইন করুন
        </button>
      </form>
      <div className="divider">অথবা</div>
      <h1 className="text-3xl font-bold mb-6 text-center">সাইন আপ</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">নাম</span>
            </label>
            <input
              type="text"
              placeholder="নাম"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">ই-মেইল</span>
            </label>
            <input
              type="email"
              placeholder="ই-মেইল"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">ফোন</span>
            </label>
            <input
              type="tel"
              placeholder="ফোন"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">গ্রাম</span>
            </label>
            <input
              type="text"
              placeholder="গ্রাম"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4 lg:col-span-2">
            <label className="label">
              <span className="label-text">ছবি</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">ইউনিয়ন</span>
            </label>
            <select className="select select-bordered w-full">
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
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">ওয়ার্ড</span>
            </label>
            <input
              type="text"
              placeholder="ওয়ার্ড"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">রক্তের গ্রুপ</span>
            </label>
            <select className="select select-bordered w-full">
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">পেশা</span>
            </label>
            <input
              type="text"
              placeholder="পেশা"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <button className="btn btn-primary w-full mb-4">সাইন আপ</button>
        <button className="btn btn-outline w-full mb-2">
          ফেসবুক দিয়ে চালিয়ে যান
        </button>
        <button className="btn btn-outline w-full">
          গুগল দিয়ে চালিয়ে যান
        </button>
      </form>
    </div>
  );
}
