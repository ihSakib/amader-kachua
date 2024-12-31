"use client";
import { redirect } from "next/navigation";
import React from "react";
import { setCookie } from "nookies";

export default function Page() {
  const [photo, setPhoto] = React.useState(null);

  const handleSignin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    const result = await response.json();

    // alert(result.message);

    // console.table(result.user);

    // Clear the form fields
    if (response.ok) {
      setCookie({}, "user", JSON.stringify(result.user), {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: "/",
      });
      alert("লগইন সফল হয়েছে!");
      // Redirect to the home page
      redirect("/my-account");
    }
  };

  //! handle signup
  const handleSignup = async (event) => {
    event.preventDefault();

    // Create a new FormData object and extract the form values
    const data = new FormData(event.target);

    // console.log(event.target);

    if (photo) {
      data.set("photo", photo);
    } else {
      alert("ছবি আপলোড করুন");
      return;
    }

    // Check if password and confirm password match
    if (data.get("password") !== data.get("confirm_password")) {
      alert("পাসওয়ার্ড মেলেনি!");
      return;
    }

    // Send the form data as JSON
    const response = await fetch("/api/signup", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    // Alert the response message
    alert(result.message);

    // Clear the form fields
    if (response.ok) {
      event.target.reset(); // Resets all form fields
      setPhoto(null);
    }
  };

  return (
    <div className="container mx-auto p-4  max-w-lg">
      <div role="tablist" className="tabs tabs-lifted   ">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab whitespace-nowrap font-semibold "
          aria-label="লগইন"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <form className=" px-2 pb-2 " onSubmit={handleSignin}>
            <div className="form-control mb-2 md:mb-4">
              <label className="label">
                <span className="label-text">ই-মেইল</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="ই-মেইল"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control mb-4 md:mb-6">
              <label className="label">
                <span className="label-text">পাসওয়ার্ড</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="পাসওয়ার্ড"
                className="input input-bordered w-full"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full mb-4">
              লগইন
            </button>
            <button type="button" className="btn btn-outline w-full mb-2">
              ফেসবুক দিয়ে লগইন করুন
            </button>
            <button type="button" className="btn btn-outline w-full mb-4">
              গুগল দিয়ে লগইন করুন
            </button>
          </form>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab whitespace-nowrap font-semibold "
          aria-label="সাইন আপ"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <form className="px-2 pb-2" onSubmit={handleSignup}>
            <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-2">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">নাম</span>
                </label>
                <input
                  type="text"
                  name="name"
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
                  name="email"
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
                  name="phone"
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
                  name="village"
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
                  name="photo"
                  className="file-input file-input-bordered w-full"
                  onChange={(event) => {
                    setPhoto(event.target.files[0]);
                  }}
                />
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">ইউনিয়ন</span>
                </label>
                <select name="union" className="select select-bordered w-full">
                  <option value="১নং সাচার ইউনিয়ন পরিষদ">
                    ১নং সাচার ইউনিয়ন পরিষদ
                  </option>
                  <option value="২নং পাথৈর ইউনিয়ন পরিষদ">
                    ২নং পাথৈর ইউনিয়ন পরিষদ
                  </option>
                  <option value="৩নং বিতারা ইউনিয়ন পরিষদ">
                    ৩নং বিতারা ইউনিয়ন পরিষদ
                  </option>
                  <option value="৪নং পালাখাল মডেল ইউনিয়ন পরিষদ">
                    ৪নং পালাখাল মডেল ইউনিয়ন পরিষদ
                  </option>
                  <option value="৫নং সহদেবপুর (পশ্চিম) ইউনিয়ন পরিষদ">
                    ৫নং সহদেবপুর (পশ্চিম) ইউনিয়ন পরিষদ
                  </option>
                  <option value="৬নং কচুয়া (উত্তর) ইউনিয়ন পরিষদ">
                    ৬নং কচুয়া (উত্তর) ইউনিয়ন পরিষদ
                  </option>
                  <option value="৭নং কচুয়া (দক্ষিণ) ইউনিয়ন পরিষদ">
                    ৭নং কচুয়া (দক্ষিণ) ইউনিয়ন পরিষদ
                  </option>
                  <option value="৮নং কাদলা ইউনিয়ন পরিষদ">
                    ৮নং কাদলা ইউনিয়ন পরিষদ
                  </option>
                  <option value="৯নং কড়ইয়া ইউনিয়ন পরিষদ">
                    ৯নং কড়ইয়া ইউনিয়ন পরিষদ
                  </option>
                  <option value="১০নং গোহট (উত্তর) ইউনিয়ন পরিষদ">
                    ১০নং গোহট (উত্তর) ইউনিয়ন পরিষদ
                  </option>
                  <option value="১১নং গোহট (দক্ষিণ) ইউনিয়ন পরিষদ">
                    ১১নং গোহট (দক্ষিণ) ইউনিয়ন পরিষদ
                  </option>
                  <option value="১২নং আশ্রাফপুর ইউনিয়ন পরিষদ">
                    ১২নং আশ্রাফপুর ইউনিয়ন পরিষদ
                  </option>
                </select>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">ওয়ার্ড</span>
                </label>
                <input
                  type="text"
                  name="ward"
                  placeholder="ওয়ার্ড"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Permanent Address Section with fieldset */}
              <fieldset className="border-2 border-gray-300 p-4 my-4 lg:col-span-2">
                <legend className=" label-text font-medium">
                  বর্তমান ঠিকানা
                </legend>

                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-2">
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">জেলা</span>
                    </label>
                    <input
                      type="text"
                      name="present_district"
                      placeholder="জেলা"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text">ঠিকানা</span>
                    </label>
                    <input
                      type="text"
                      name="present_address"
                      placeholder="ঠিকানা"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">রক্তের গ্রুপ</span>
                </label>
                <select
                  name="blood_group"
                  className="select select-bordered w-full"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">পেশা</span>
                </label>
                <input
                  type="text"
                  name="occupation"
                  placeholder="পেশা"
                  className="input input-bordered w-full"
                />
              </div>
              {/* Password and Confirm Password */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">পাসওয়ার্ড</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="পাসওয়ার্ড"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text">পাসওয়ার্ড নিশ্চিত করুন</span>
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-full mb-4">
              সাইন আপ
            </button>
            <button type="button" className="btn btn-outline w-full mb-2">
              ফেসবুক দিয়ে চালিয়ে যান
            </button>
            <button type="button" className="btn btn-outline w-full">
              গুগল দিয়ে চালিয়ে যান
            </button>
          </form>
        </div>
      </div>
      {/* <h1 className="text-3xl font-bold mb-6 text-center">লগইন</h1> */}

      {/* <div className="divider">অথবা</div> */}
      {/* <h1 className="text-3xl font-bold mb-6 text-center">সাইন আপ</h1> */}
    </div>
  );
}
