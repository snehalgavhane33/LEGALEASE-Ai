import { motion } from "framer-motion";
import { Sparkles, Upload, Play } from "lucide-react";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-[560px]"
    >
      {/* Badge */}

      <motion.div
        whileHover={{ scale: 1.04 }}
        className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-5 py-2.5 backdrop-blur-xl shadow-lg"
      >
        <Sparkles size={16} className="text-blue-600" />

        <span className="text-sm font-semibold text-blue-700">
          AI Powered Legal Assistant
        </span>
      </motion.div>

      {/* Heading */}

      <h1 className="mt-8 text-[50px] font-extrabold leading-[1.08] tracking-[-1.5px] text-slate-900">
        Understand Legal
        <br />

        <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
          Documents
        </span>{" "}
        in Seconds
      </h1>

      {/* Description Card */}

      <motion.div
        whileHover={{ y: -3 }}
        className="mt-8 w-[90%] rounded-[26px] border border-white/60 bg-white/60 p-6 backdrop-blur-3xl shadow-[0_18px_45px_rgba(37,99,235,.10)]"
      >
        <p className="text-[16px] leading-7 text-slate-600">
          Upload contracts, agreements and legal documents.
          Instantly receive AI-powered summaries, identify risks,
          understand complex clauses and receive legal insights
          within seconds.
        </p>

        {/* Buttons */}

        <div className="mt-7 flex gap-4">

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg"
          >
            <Upload size={18} />
            Upload Document
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-xl border border-white/70 bg-white/75 px-6 py-3 font-semibold text-slate-700 backdrop-blur-xl"
          >
            <Play size={18} />
            Watch Demo
          </motion.button>

        </div>

      </motion.div>

      {/* Stats */}

      <div className="mt-8 grid w-[90%] grid-cols-3 gap-4">

        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-2xl border border-white/60 bg-white/60 p-4 text-center backdrop-blur-xl shadow-md"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            25K+
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Documents
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-2xl border border-white/60 bg-white/60 p-4 text-center backdrop-blur-xl shadow-md"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
            98%
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Accuracy
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5 }}
          className="rounded-2xl border border-white/60 bg-white/60 p-4 text-center backdrop-blur-xl shadow-md"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text text-transparent">
            24/7
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            AI Support
          </p>
        </motion.div>

      </div>

    </motion.div>
  );
}

export default HeroContent;