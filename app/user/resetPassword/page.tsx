"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useSearchParams();
  const token = params.get("token");
  return (
    <div>
      <h1>Reset Password</h1>
      <p>Token: {token}</p>
    </div>
  );
};

export default Page;
