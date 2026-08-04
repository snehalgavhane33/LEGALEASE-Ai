import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Main Background */}
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

      {/* Rings */}
      <div className="absolute left-[22%] top-[28%] h-44 w-44 rounded-full border border-blue-300/25" />
      <div className="absolute right-[12%] top-[18%] h-52 w-52 rounded-full border border-cyan-300/20" />

      {/* White Light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.45),transparent_65%)]" />

    </div>
  );
}