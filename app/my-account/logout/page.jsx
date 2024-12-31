"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    destroyCookie(null, "user");
    router.push("/");
  }, []);

  return <></>;
}
