import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <div>{children}</div>
      {/**fixed bottom*/}
      <div className="fixed bottom-6 right-0 left-0 flex justify-center">
        <ul className="menu menu-horizontal bg-blue-400 text-white rounded-box mt-6 !px-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <li>
            <Link href={"/my-account"} className="tooltip " data-tip="Profile">
              <i className="fas fa-user h-5 w-5"></i>
            </Link>
          </li>
          <li>
            <Link
              href={"/my-account/statistics"}
              className="tooltip"
              data-tip="Stats"
            >
              <i className="fas fa-chart-bar h-5 w-5"></i>
            </Link>
          </li>
          <li>
            <Link href={"/"} className="tooltip" data-tip="Logout">
              <i className="fas fa-sign-out-alt h-5 w-5"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
