import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  GraduationCap,
  User,
} from "lucide-react";

function UseCases() {
  const users = [
    {
      icon: <Briefcase size={28} />,
      title: "Lawyers",
      desc: "Review contracts and legal documents faster.",
    },
    {
      icon: <Building2 size={28} />,
      title: "Businesses",
      desc: "Analyze agreements before signing with confidence.",
    },
    {
      icon: <GraduationCap size={28} />,
      title: "Students",
      desc: "Learn legal concepts in a simple and interactive way.",
    },
    {
      icon: <User size={28} />,
      title: "Individuals",
      desc: "Understand rental, employment and loan agreements.",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-16 pb-24">

      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eaf8ff] via-[#d9f1ff] to-[#cae9ff]" />
      <div className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-sm font-semibold text-blue-700 backdrop-blur-xl">
            WHO CAN USE
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Built For Everyone
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Working With Legal Documents
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you're a professional or an individual, LegalEase AI helps
            you understand legal documents with confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {users.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-[24px] border border-white/70 bg-white/70 p-6 backdrop-blur-xl shadow-[0_18px_40px_rgba(37,99,235,.10)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg">
                {user.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {user.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                {user.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default UseCases;