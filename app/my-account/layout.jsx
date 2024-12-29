"use client"; // Ensures this is a client component

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname(); // Get the current path
  const isActive = (path) => pathname === path;

  return (
    <div>
      <div>{children}</div>
      {/**fixed bottom*/}
      <div className="fixed bottom-6 right-0 left-0 flex justify-center">
        <ul className="menu menu-horizontal bg-slate-900 text-white rounded-box mt-6 !px-4 gap-2 md:gap-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <li>
            <Link
              href="/"
              className={`tooltip ${isActive("/") ? "active" : ""}`}
              data-tip="Home"
            >
              <i className="fa-solid fa-house h-5 w-5"></i>
            </Link>
          </li>
          <li>
            <Link
              href="/my-account"
              className={`tooltip ${
                isActive("/my-account") ? "active" : ""
              }`}
              data-tip="Profile"
            >
              <i className="fas fa-user h-5 w-5"></i>
            </Link>
          </li>
          <li>
            <Link
              href="/my-account/statistics"
              className={`tooltip ${
                isActive("/my-account/statistics") ? "active" : ""
              }`}
              data-tip="Stats"
            >
              <i className="fas fa-chart-bar h-5 w-5"></i>
            </Link>
          </li>
          <li>
            <Link
              href="/logout"
              className={`tooltip ${isActive("/logout") ? "active" : ""}`}
              data-tip="Logout"
            >
              <i className="fas fa-sign-out-alt h-5 w-5"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
