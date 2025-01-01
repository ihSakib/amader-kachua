"use client";

export default function SignUpForm() {
  const handleSignup = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (formData.get("password1") !== formData.get("password2")) {
      alert("পাসওয়ার্ড মেলেনি!");
      return;
    }

    const data = {
      user: {
        username: formData.get("username"),
        email: formData.get("email"),
        first_name: formData.get("first_name"),
        last_name: formData.get("last_name"),
      },
      password1: formData.get("password1"),
      password2: formData.get("password2"),
      phone_number: formData.get("phone_number"),
      village: formData.get("village"),
      ward: formData.get("ward"),
      union: formData.get("union"),
      district: formData.get("district"),
      address: formData.get("address"),
      blood_group: formData.get("blood_group"),
      occupation: formData.get("occupation"),
    };

    const response = await fetch(
      "https://amader-kachua.onrender.com/api/profiles/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      alert("সাইন আপ সফল হয়েছে! লগইন করুন");
      event.target.reset();
      location.reload();
    } else {
      alert("সাইন আপ ব্যর্থ হয়েছে।");
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="bg-base-100"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">নাম</span>
          </label>
          <input
            type="text"
            name="first_name"
            placeholder="নাম"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ডাকনাম</span>
          </label>
          <input
            type="text"
            name="last_name"
            placeholder="ডাকনাম"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ইউজার নেইম</span>
          </label>
          <input
            type="text"
            name="username"
            placeholder="ইউজার নেইম"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ই-মেইল</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="ই-মেইল"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ফোন</span>
          </label>
          <input
            type="tel"
            name="phone_number"
            placeholder="ফোন"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">গ্রাম</span>
          </label>
          <input
            type="text"
            name="village"
            placeholder="গ্রাম"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">জেলা</span>
          </label>
          <input
            type="text"
            name="district"
            placeholder="জেলা"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ইউনিয়ন</span>
          </label>
          <select name="union" className="select select-bordered">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">ওয়ার্ড</span>
          </label>
          <input
            type="text"
            name="ward"
            placeholder="ওয়ার্ড"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">ঠিকানা</span>
          </label>
          <input
            type="text"
            name="address"
            placeholder="ঠিকানা"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">রক্তের গ্রুপ</span>
          </label>
          <select name="blood_group" className="select select-bordered">
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">পেশা</span>
          </label>
          <input
            type="text"
            name="occupation"
            placeholder="পেশা"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">পাসওয়ার্ড</span>
          </label>
          <input
            type="password"
            name="password1"
            placeholder="পাসওয়ার্ড"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">পাসওয়ার্ড নিশ্চিত করুন</span>
          </label>
          <input
            type="password"
            name="password2"
            placeholder="পাসওয়ার্ড নিশ্চিত করুন"
            className="input input-bordered"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary w-full mt-6">
        সাইন আপ
      </button>
    </form>
  );
}
