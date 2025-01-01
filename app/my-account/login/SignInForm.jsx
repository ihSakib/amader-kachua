"use client";

import { redirect } from "next/navigation";

export default function SignInForm() {
  const storeTokens = (access, refresh, pid) => {
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
    localStorage.setItem("pid", pid);
  };

  const handleSignin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch(
      "https://amader-kachua.onrender.com/api/token/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.get("username"),
          password: formData.get("password"),
        }),
      }
    );

    if (response.ok) {
      const result = await response.json();
      storeTokens(result.access, result.refresh, result.user_profile_id);
      alert("লগইন সফল হয়েছে!");
      redirect("/my-account");
    } else {
      alert("লগইন ব্যর্থ হয়েছে।");
    }
  };

  return (
    <form onSubmit={handleSignin}>
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">ইউজারনেইম / ই-মেইল</span>
        </label>
        <input
          type="text"
          name="username"
          placeholder="john/01721..."
          className="input input-bordered w-full"
        />
      </div>
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
      <button type="submit" className="btn btn-primary w-full mb-4">
        লগইন
      </button>
    </form>
  );
}
