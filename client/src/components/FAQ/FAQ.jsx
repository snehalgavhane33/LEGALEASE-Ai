import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

function FAQ() {
  const faqs = [
    {
      question: "What types of legal documents can I upload?",
      answer:
        "You can upload contracts, agreements, employment letters, rental agreements, NDAs and most PDF legal documents.",
    },
    {
      question: "Is my uploaded data secure?",
      answer:
        "Yes. Your documents are processed securely and handled with privacy in mind.",
    },
    {
      question: "How long does AI analysis take?",
      answer:
        "Most legal documents are analyzed within a few seconds depending on the file size.",
    },
    {
      question: "Can I upload scanned PDF documents?",
      answer:
        "Yes. Our OCR technology extracts text from scanned legal documents before AI analysis.",
    },
    {
      question: "Do I need legal knowledge to use LegalEase AI?",
      answer:
        "No. LegalEase AI explains complex legal language in simple, easy-to-understand terms.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden pt-16 pb-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#eaf8ff] via-[#d9f1ff] to-[#cae9ff]" />

      <div className="absolute -left-32 top-16 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[120px]" />

      <div className="mx-auto max-w-5xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="rounded-full border border-blue-200 bg-white/70 px-5 py-2 text-sm font-semibold text-blue-700 backdrop-blur-xl">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">

            Frequently Asked

            <br />

            <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Everything you need to know before using LegalEase AI.
          </p>

        </motion.div>

        {/* FAQ */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="overflow-hidden rounded-2xl border border-white/70 bg-white/70 backdrop-blur-xl shadow-[0_18px_40px_rgba(37,99,235,.10)]"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >

                <h3 className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </h3>

                {active === index ? (
                  <Minus className="text-blue-600" />
                ) : (
                  <Plus className="text-blue-600" />
                )}

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: .3 }}
                  >

                    <p className="px-7 pb-6 leading-8 text-slate-600">
                      {faq.answer}
                    </p>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;