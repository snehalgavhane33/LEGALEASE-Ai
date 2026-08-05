import { motion } from "framer-motion";
import {
  Upload,
  Mail,
  ShieldCheck,
  Zap,
  BrainCircuit,
} from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eaf8ff] via-[#d9f1ff] to-[#cae9ff]" />

      <div className="absolute -left-32 top-10 h-[450px] w-[450px] rounded-full bg-cyan-300/30 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-400/25 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl px-8"
      >

        {/* Glass Card */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/65 p-14 text-center backdrop-blur-3xl shadow-[0_40px_100px_rgba(37,99,235,.18)]"
        >

          {/* Decorative Glow */}

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-[120px]" />

          <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />

          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/10 pointer-events-none" />

          {/* Heading */}

          <h2 className="relative text-5xl font-extrabold leading-tight tracking-tight text-slate-900">

            Ready to Analyze

            <br />

            <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">

              Your Legal Documents?

            </span>

          </h2>

          {/* Description */}

          <p className="relative mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-600">

            Upload contracts, agreements and legal documents in seconds.
            Let AI simplify legal language, detect risks and generate
            intelligent summaries instantly.

          </p>

          {/* Buttons */}

          <div className="relative mt-10 flex flex-wrap justify-center gap-5">

            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_25px_60px_rgba(37,99,235,.45)]">

              <Upload size={20} />

              Upload Document

            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white/80 bg-white/90 px-8 py-4 font-semibold text-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl">

              <Mail size={20} />

              Contact Us

            </button>

          </div>

          {/* Trust Badges */}

          <div className="relative mt-12 flex flex-wrap justify-center gap-5">

            <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-5 py-3 text-blue-700 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,.18)]">

              <ShieldCheck size={18} />

              Secure & Private

            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-5 py-3 text-blue-700 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,.18)]">

              <Zap size={18} />

              Fast AI Analysis

            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-5 py-3 text-blue-700 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(37,99,235,.18)]">

              <BrainCircuit size={18} />

              AI Powered

            </div>

          </div>

        </motion.div>

      </motion.div>

    </section>
  );
}

export default CTA;