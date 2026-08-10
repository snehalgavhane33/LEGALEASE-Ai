import { motion } from "framer-motion";

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf8ff] via-[#d9f1ff] to-[#cae9ff]">

      {/* Navbar */}

      <nav className="flex items-center justify-between px-8 py-6">

        <h1 className="text-3xl font-bold text-slate-900">
          LegalEase <span className="text-blue-600">AI</span>
        </h1>

        <a
          href="/"
          className="font-medium text-slate-600 hover:text-blue-600"
        >
          ← Back to Home
        </a>

      </nav>


      {/* Register Card */}

      <div className="flex items-center justify-center px-6 py-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md rounded-3xl border border-white/80 bg-white/70 p-10 shadow-[0_30px_80px_rgba(37,99,235,.15)] backdrop-blur-xl"
        >

          {/* Heading */}

          <div className="text-center">

            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              CREATE ACCOUNT
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Join LegalEase{" "}
              <span className="text-blue-600">AI</span>
            </h2>

            <p className="mt-3 text-slate-600">
              Create your account and start analyzing documents.
            </p>

          </div>


          {/* Form */}

          <form className="mt-8 space-y-5">

            {/* Name */}

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>


            {/* Email */}

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>


            {/* Password */}

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>


            {/* Confirm Password */}

            <div>
              <label className="mb-2 block font-medium text-slate-700">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>


            {/* Button */}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Create Account
            </button>

          </form>


          {/* Login */}

          <p className="mt-8 text-center text-slate-600">

            Already have an account?{" "}

            <a
              href="/login"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Login
            </a>

          </p>

        </motion.div>

      </div>

    </div>
  );
}

export default Register;