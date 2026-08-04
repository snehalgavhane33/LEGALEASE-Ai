import { motion } from "framer-motion";
import {
  Brain,
  ShieldCheck,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{
        opacity: 1,
        x: 0,
        y: [0, -10, 0],
      }}
      transition={{
        duration: 0.8,
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative w-[390px]"
    >
      {/* Floating Badge */}

      <div className="absolute -top-5 right-4 z-20 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-xl border border-white px-4 py-2 shadow-lg">
        <Sparkles className="text-blue-600" size={16} />
        <span className="font-semibold text-slate-700">
          AI Ready
        </span>
      </div>

      {/* Dashboard */}

      <div className="rounded-[28px] border border-[#CDE2FF] bg-gradient-to-br from-[#D8EBFF] via-[#C7E2FF] to-[#B8D8FF] p-5 shadow-[0_25px_55px_rgba(59,130,246,.18)]">

        {/* Header */}

        <div className="flex items-center gap-4">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg">

            <FileText className="text-white" size={30} />

          </div>

          <div>

            <h2 className="text-xl font-bold text-slate-800">
              Employment.pdf
            </h2>

            <p className="text-sm text-slate-500">
              Uploaded Successfully
            </p>

          </div>

        </div>

        {/* AI Score */}

        <div className="mt-5 rounded-2xl bg-white/70 p-4 backdrop-blur-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-slate-500">
                AI Analysis Score
              </p>

              <h1 className="mt-1 text-4xl font-bold text-blue-700">
                98%
              </h1>

            </div>

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-xl">

              <Brain className="text-white" size={28} />

            </div>

          </div>

        </div>

        {/* Status */}

        <div className="mt-5 grid grid-cols-2 gap-4">

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-xl bg-white/75 p-3"
          >

            <ShieldCheck className="text-green-500" />

            <p className="mt-3 text-sm text-slate-500">
              Risk Level
            </p>

            <h3 className="text-lg font-bold text-green-600">
              Low
            </h3>

          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="rounded-xl bg-white/75 p-3"
          >

            <CheckCircle2 className="text-blue-500" />

            <p className="mt-3 text-sm text-slate-500">
              Summary
            </p>

            <h3 className="text-lg font-bold text-slate-800">
              Ready
            </h3>

          </motion.div>

        </div>

        {/* Insights */}

        <div className="mt-5 rounded-2xl bg-white/75 p-4">

          <div className="flex items-center gap-2">

            <AlertTriangle
              className="text-orange-500"
              size={18}
            />

            <h3 className="font-semibold text-slate-800">
              AI Insights
            </h3>

          </div>

          <ul className="mt-4 space-y-3 text-sm text-slate-600">

            <li>
              ✓ Contract summary generated
            </li>

            <li>
              ✓ Low legal risk detected
            </li>

            <li>
              ✓ 12 important clauses identified
            </li>

            <li>
              ✓ Manual review recommended
            </li>

          </ul>

        </div>

        {/* Button */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold text-white shadow-lg"
        >

          Review Document

          <ArrowRight size={18} />

        </motion.button>

      </div>

    </motion.div>
  );
}

export default HeroCard;