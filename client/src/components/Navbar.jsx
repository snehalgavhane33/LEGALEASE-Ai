import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-4 z-50 w-[92%] max-w-7xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-3xl border border-white/70 bg-white/80 px-8 py-4 shadow-[0_15px_40px_rgba(37,99,235,0.10)] backdrop-blur-xl">

        {/* Logo */}

        <a
          href="/"
          className="text-2xl font-bold text-slate-900"
        >
          LegalEase{" "}
          <span className="text-blue-600">AI</span>
        </a>


        {/* Navigation */}

        <div className="flex items-center gap-8">

          {/* Home */}

          <a
            href="/"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Home
          </a>


          {/* Login */}

          <a
            href="/login"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Login
          </a>


          {/* Register */}

          <a
            href="/register"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Register
          </a>


          {/* Get Started */}

          <motion.a
            href="/register"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-xl"
          >
            Get Started →
          </motion.a>

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;