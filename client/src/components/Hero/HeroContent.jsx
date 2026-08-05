import { motion } from "framer-motion";
import { Sparkles, Upload, Play } from "lucide-react";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-[500px]"
    >
      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2 backdrop-blur-xl shadow-lg">
        <Sparkles size={16} className="text-blue-600" />
        <span className="text-sm font-semibold text-blue-700">
          AI Powered Legal Assistant
        </span>
      </div>

      {/* Heading */}

      <h1 className="mt-7 text-[58px] font-extrabold leading-[1.02] tracking-[-2px] text-slate-900">
        Understand Legal
        <br />
        <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
          Documents
        </span>{" "}
        in Seconds
      </h1>

      {/* Description Card */}

      <motion.div
        whileHover={{ y: -2 }}
        className="mt-7 w-[92%] rounded-[24px] border border-white/70 bg-white/60 p-6 backdrop-blur-3xl shadow-[0_20px_50px_rgba(37,99,235,.12)]"
      >
        <p className="text-[15px] leading-8 text-slate-600">
          Upload contracts, agreements and legal documents.
          Instantly receive AI-powered summaries, identify risks,
          understand complex clauses and receive legal insights
          within seconds.
        </p>

        <div className="mt-7 flex gap-4">

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg">
            <Upload size={18} />
            Upload Document
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700">
            <Play size={18} />
            Watch Demo
          </button>

        </div>

      </motion.div>

      {/* Stats */}

        

    </motion.div>
  );
}

export default HeroContent;