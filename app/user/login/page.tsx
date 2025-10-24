"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "sonner";
import Link from "next/link";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" }),
});

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res = await axios.post(
        "https://backend-e-comerce-project.vercel.app/login",
        data
      );

      if (res.data.success) {
        toast.success("Login successful!");
        // You can add redirect logic here if needed
        router.push("/");
      } else {
        toast.error(res.data.message || "Login failed!");
      }

      console.log(res);
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-3xl font-semibold text-center mb-6 text-white">
          Welcome Back 👋
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email")}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-300"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              {...register("password")}
              className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-300"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 mt-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 shadow-md disabled:opacity-50"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-300 mt-5">
          Don’ t have an account?{" "}
          <Link
            href="/user/register"
            className="text-blue-400 hover:underline hover:text-blue-300 transition-colors"
          >
            Register
          </Link>
        </p>
        <div className="flex justify-between gap-4 mt-2 text-sm">
          <Link
            href="/user/forgetPassword"
            className="text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
          <Link
            href="/user/changePassword"
            className="text-blue-600 hover:underline"
          >
            Change password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
