"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <div className="p-4">
      <h1>Reset Password</h1>
      <p>Token: {token}</p>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ResetPasswordContent />
    </Suspense>
  );
}
