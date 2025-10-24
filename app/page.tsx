import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center px-6">
      {/* Logo / Title */}
      <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
        E-Commerce
      </h1>

      {/* Subtitle */}
      <p className="text-gray-400 text-lg mb-8">
        The best place to shop your favorite products.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link
          href="/user/login"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-lg font-semibold transition-all shadow-md hover:shadow-blue-500/30"
        >
          Login
        </Link>
        <Link
          href="/user/register"
          className="px-6 py-3 border border-blue-400 hover:bg-blue-500 hover:text-white rounded-xl text-lg font-semibold transition-all shadow-md hover:shadow-blue-500/30"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
