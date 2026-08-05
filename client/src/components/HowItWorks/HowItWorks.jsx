import { motion } from "framer-motion";
import {
  Upload,
  BrainCircuit,
  ShieldCheck,
  FileText,
  CheckCircle2,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      icon: <Upload size={28} />,
      title: "Upload",
      desc: "Upload your contract or legal PDF",
    },
    {
      icon: <BrainCircuit size={28} />,
      title: "AI Analysis",
      desc: "AI understands every clause",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Risk Detection",
      desc: "Find risky clauses instantly",
    },
    {
      icon: <FileText size={28} />,
      title: "Summary",
      desc: "Simple explanation of documents",
    },
    {
      icon: <CheckCircle2 size={28} />,
      title: "Insights",
      desc: "Receive recommendations",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden pt-16 pb-24"
    >

      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eaf8ff] via-[#d9f1ff] to-[#cae9ff]" />

      <div className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-sm font-semibold text-blue-700 backdrop-blur-xl">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">

            AI Processes Your

            <br />

            <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Legal Documents
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">

            Upload your document once and let our AI summarize,
            analyze and detect risks within seconds.

          </p>

        </motion.div>

        {/* Workflow */}

        {/* Workflow */}

<div className="relative mt-24">

  {/* Horizontal Line */}
  <div className="absolute left-[10%] right-[10%] top-10 h-[3px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 opacity-25" />

  <div className="flex items-start justify-between gap-8">

    {steps.map((step, index) => {
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          whileHover={{
            y: -8,
            scale: 1.05,
          }}
          className="relative flex flex-1 flex-col items-center text-center"
        >
          {/* Icon */}
          <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/70 bg-white/80 text-blue-600 shadow-[0_20px_40px_rgba(37,99,235,.15)] backdrop-blur-xl">

            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100" />

            <div className="relative z-10">
              {step.icon}
            </div>

          </div>

          <span className="mt-6 text-sm font-semibold tracking-wide text-blue-600">
            STEP {index + 1}
          </span>

          <h3 className="mt-2 text-xl font-bold text-slate-900">
            {step.title}
          </h3>

          <p className="mt-3 max-w-[170px] text-[15px] leading-7 text-slate-600">
            {step.desc}
          </p>
        </motion.div>
      );
    })}

  </div>

</div>
</div>
    </section>
  );
}

export default HowItWorks;
          