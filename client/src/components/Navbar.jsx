import { motion } from "framer-motion";
import logo from "../assets/logo/logo.png";

const navItems = ["Home", "Features", "About", "Contact"];

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl"
    >
      <div className="relative flex h-[78px] items-center justify-between rounded-[26px] border border-white/80 bg-white/85 px-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,.08)]">

        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="LegalEase AI"
            className="h-14 w-14 object-contain"
          />

          <div>
            <h1 className="text-[26px] font-bold tracking-tight text-slate-900">
              LegalEase
              <span className="text-blue-600"> AI</span>
            </h1>

            <p className="text-[11px] text-slate-500">
              AI Powered Legal Assistant
            </p>
          </div>
        </motion.div>

        {/* Navigation */}
        <ul className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ y: -2 }}
              className="group relative cursor-pointer font-medium text-slate-700 transition"
            >
              {item}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </motion.li>
          ))}
        </ul>

        {/* Button */}
        <motion.button
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{ scale: 0.96 }}
          className="rounded-xl bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Get Started →
        </motion.button>
      </div>
    </motion.nav>
  );
}

export default Navbar;