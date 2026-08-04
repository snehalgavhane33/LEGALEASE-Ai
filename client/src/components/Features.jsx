import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Brain,
  Search,
  Clock3,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI Document Summary",
    desc: "Generate concise summaries of lengthy legal documents within seconds.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShieldCheck,
    title: "Risk Detection",
    desc: "Automatically detect risky clauses before signing agreements.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Brain,
    title: "Smart AI Analysis",
    desc: "Understand complex legal language with intelligent AI insights.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Search,
    title: "Clause Extraction",
    desc: "Locate important clauses, obligations and deadlines instantly.",
    color: "from-sky-500 to-cyan-500",
  },
  {
    icon: Clock3,
    title: "Instant Processing",
    desc: "Analyze documents within seconds instead of hours.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    desc: "Enterprise-grade encryption protects every uploaded document.",
    color: "from-violet-500 to-fuchsia-500",
  },
];

function Features() {
  return (
    <section className="relative overflow-hidden py-28">

      {/* SAME BACKGROUND AS HERO */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#d9ebff] via-[#bdd9ff] to-[#c9e3ff]" />

      {/* Left Blob */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
        className="absolute -left-32 top-20 h-[650px] w-[650px] rounded-full bg-cyan-300/35 blur-[140px]"
      />

      {/* Right Blob */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute -right-40 top-10 h-[700px] w-[700px] rounded-full bg-blue-400/30 blur-[150px]"
      />

      {/* Bottom Glow */}

      <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-200/30 blur-[120px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,.12) 1px, transparent 1px),linear-gradient(90deg,rgba(15,23,42,.12) 1px,transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* White Light */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.45),transparent_65%)]" />

      {/* CONTENT */}

      <div className="relative mx-auto max-w-7xl px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex rounded-full border border-white/70 bg-white/60 px-6 py-2 text-sm font-semibold text-blue-600 backdrop-blur-xl shadow-lg">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-slate-900">
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              For Legal Analysis
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            AI-powered legal document analysis that helps you understand
            contracts, detect risks and make smarter decisions.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="rounded-[28px] border border-white/60 bg-white/65 backdrop-blur-2xl p-8 shadow-[0_25px_60px_rgba(37,99,235,.12)]"
              >

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.desc}
                </p>

                <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Features;