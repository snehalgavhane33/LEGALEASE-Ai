import { motion } from "framer-motion";
import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Corporate Lawyer",
      review:
        "LegalEase AI reduced our contract review time from hours to minutes. The summaries are incredibly accurate.",
    },
    {
      name: "Michael Brown",
      role: "Startup Founder",
      review:
        "Before signing agreements, I always use LegalEase AI. It helps me understand complex clauses easily.",
    },
    {
      name: "Emily Davis",
      role: "Law Student",
      review:
        "The AI explanations are simple and easy to understand. Perfect for learning legal documents.",
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
          transition={{ duration: .6 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-sm font-semibold text-blue-700 backdrop-blur-xl">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">

            Loved By

            <br />

            <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Legal Professionals
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Thousands of users trust LegalEase AI to simplify legal documents
            and save valuable time.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="rounded-[24px] border border-white/70 bg-white/70 p-7 backdrop-blur-xl shadow-[0_18px_40px_rgba(37,99,235,.10)]"
            >

              {/* Stars */}

              <div className="mb-5 flex gap-1">

                {[1,2,3,4,5].map((star)=>(
                  <Star
                    key={star}
                    size={18}
                    fill="#fbbf24"
                    className="text-yellow-400"
                  />
                ))}

              </div>

              <p className="text-[15px] leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white shadow-lg">
                  {item.name.charAt(0)}
                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;