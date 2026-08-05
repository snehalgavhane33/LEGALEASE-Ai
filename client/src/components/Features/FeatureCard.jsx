import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

function FeatureCard({
  icon,
  title,
  description,
  color,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group relative overflow-hidden rounded-[22px] border border-white/70 bg-white/70 p-5 backdrop-blur-2xl shadow-[0_15px_35px_rgba(37,99,235,.10)] transition-all duration-300"
    >
      {/* Background Glow */}
      <div
        className={`absolute -right-12 -top-12 h-28 w-28 rounded-full ${color}/20 blur-3xl`}
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md">
            {icon}
          </div>

          <div>

            <h3 className="text-[20px] font-bold text-slate-900">
              {title}
            </h3>

            <div
              className={`mt-2 h-1 w-10 rounded-full ${color}`}
            />

          </div>

        </div>

        <motion.div
          whileHover={{ rotate: 45 }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-blue-600 shadow-sm"
        >
          <ArrowUpRight size={16} />
        </motion.div>

      </div>

      {/* Description */}

      <p className="relative z-10 mt-4 text-[15px] leading-7 text-slate-600">
        {description}
      </p>

      {/* Bottom Tags */}

      <div className="relative z-10 mt-5 flex flex-wrap gap-2">

        <span className="flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700">
          <CheckCircle2 size={12} />
          AI Powered
        </span>

        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600">
          Fast
        </span>

      </div>
    </motion.div>
  );
}

export default FeatureCard;