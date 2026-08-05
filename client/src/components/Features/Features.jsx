import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  FileSearch,
  MessageCircle,
  Files,
  Database,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    {
      icon: <BrainCircuit size={28} className="text-blue-600" />,
      title: "AI Summary",
      description:
        "Generate easy-to-understand summaries from lengthy legal documents within seconds.",
      color: "bg-blue-400",
      delay: 0,
    },
    {
      icon: <ShieldCheck size={28} className="text-emerald-500" />,
      title: "Risk Detection",
      description:
        "Identify risky clauses instantly and receive intelligent recommendations.",
      color: "bg-emerald-400",
      delay: 0.1,
    },
    {
      icon: <FileSearch size={28} className="text-cyan-500" />,
      title: "OCR Scanner",
      description:
        "Extract text accurately from scanned documents and image files.",
      color: "bg-cyan-400",
      delay: 0.2,
    },
    {
      icon: <MessageCircle size={28} className="text-violet-500" />,
      title: "AI Chat",
      description:
        "Ask legal questions about your uploaded documents and receive instant answers.",
      color: "bg-violet-400",
      delay: 0.3,
    },
    {
      icon: <Files size={28} className="text-orange-500" />,
      title: "Clause Review",
      description:
        "Understand important clauses, obligations and hidden legal terms quickly.",
      color: "bg-orange-300",
      delay: 0.4,
    },
    {
      icon: <Database size={28} className="text-indigo-500" />,
      title: "Secure Storage",
      description:
        "Store all your legal documents securely with enterprise-level protection.",
      color: "bg-indigo-400",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden pt-14 pb-24"
    >
      {/* Background */}

            {/* Same Background as Hero */}

<div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eaf8ff] via-[#d8f1ff] to-[#c9e9ff]" />

{/* Left Glow */}

<div className="absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-cyan-300/30 blur-[130px]" />

{/* Center Glow */}

<div className="absolute left-1/2 top-40 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-sky-300/20 blur-[150px]" />

{/* Right Glow */}

<div className="absolute -right-28 top-10 h-[500px] w-[500px] rounded-full bg-blue-400/25 blur-[130px]" />

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
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">

            Powerful AI Tools

            <br />

            <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              For Every Legal Document
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Everything you need to summarize, review, understand and manage
            legal documents using advanced AI.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {features.map((feature, index) => (
                <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                delay={feature.delay}
                />
            ))}

            </div>

      </div>
    </section>
  );
}

export default Features;