import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Analysis() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("legalEaseAnalysis");

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  if (!data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#eef9ff] via-[#e1f4ff] to-[#d5edff]">
        <div className="rounded-3xl bg-white/80 p-10 text-center shadow-xl backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-slate-900">
            No Analysis Found
          </h2>

          <p className="mt-3 text-slate-600">
            Please upload a document first.
          </p>

          <a
            href="/dashboard"
            className="mt-6 inline-block rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    );
  }

  const {
    fileName,
    language,
    analysis,
  } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef9ff] via-[#e1f4ff] to-[#d5edff]">

      {/* Header */}
      <header className="border-b border-white/70 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          <a
            href="/dashboard"
            className="text-2xl font-bold text-slate-900"
          >
            LegalEase <span className="text-blue-600">AI</span>
          </a>

          <a
            href="/dashboard"
            className="font-medium text-slate-600 transition hover:text-blue-600"
          >
            ← Back to Dashboard
          </a>

        </div>
      </header>

      <main className="mx-auto max-w-7xl px-8 py-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-semibold text-blue-600">
            AI ANALYSIS
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            {fileName}
          </h1>

          <p className="mt-2 text-slate-600">
            Analysis generated in {language}.
          </p>
        </motion.div>

        {/* Health Score */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_25px_70px_rgba(37,99,235,.12)] backdrop-blur-xl"
        >
          <div className="flex flex-col items-center gap-8 md:flex-row">

            <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full border-[10px] border-blue-400 bg-white text-4xl font-bold text-blue-600 shadow-lg">
              {analysis.healthScore}
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Contract Health Score
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {analysis.overallRisk || "Analysis Complete"}
              </h2>

              <p className="mt-2 text-slate-600">
                AI-generated assessment based on the uploaded document.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Summary */}
        <AnalysisCard title="AI Summary">
          <p className="leading-8 text-slate-600">
            {analysis.summary}
          </p>
        </AnalysisCard>

        {/* Key Clauses */}
        <AnalysisCard title="Key Clauses">

          <div className="space-y-4">

            {analysis.keyClauses?.map((clause, index) => (
              <div
                key={index}
                className="rounded-2xl bg-blue-50/70 p-5"
              >
                <h3 className="font-bold text-slate-900">
                  {clause.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  {clause.explanation}
                </p>
              </div>
            ))}

          </div>

        </AnalysisCard>

        {/* Risks */}
        <AnalysisCard title="Risk Detection">

          <div className="space-y-4">

            {analysis.risks?.length > 0 ? (
              analysis.risks.map((risk, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm"
                >

                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">

                    <h3 className="font-bold text-slate-900">
                      {risk.title}
                    </h3>

                    <RiskBadge severity={risk.severity} />

                  </div>

                  <p className="mt-3 leading-7 text-slate-600">
                    {risk.explanation}
                  </p>

                </div>
              ))
            ) : (
              <p className="text-slate-600">
                No significant risks were identified.
              </p>
            )}

          </div>

        </AnalysisCard>

        {/* Obligations + Dates */}
        <div className="grid gap-8 lg:grid-cols-2">

          <AnalysisCard title="My Obligations">

            <div className="space-y-3">

              {analysis.obligations?.length > 0 ? (
                analysis.obligations.map((obligation, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-blue-50 p-4 text-slate-700"
                  >
                    ✓ {obligation}
                  </div>
                ))
              ) : (
                <p className="text-slate-600">
                  No specific obligations were identified.
                </p>
              )}

            </div>

          </AnalysisCard>

          <AnalysisCard title="Important Dates">

            <div className="space-y-3">

              {analysis.importantDates?.length > 0 ? (
                analysis.importantDates.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-xl bg-blue-50 p-4"
                  >

                    <div className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-blue-600 shadow-sm">
                      {item.date}
                    </div>

                    <span className="text-slate-700">
                      {item.event}
                    </span>

                  </div>
                ))
              ) : (
                <p className="text-slate-600">
                  No important dates were identified.
                </p>
              )}

            </div>

          </AnalysisCard>

        </div>

        {/* Disclaimer */}
        <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-5 text-sm leading-6 text-orange-800">
          <strong>Important:</strong> LegalEase AI provides AI-generated
          information for understanding documents and does not replace
          professional legal advice.
        </div>

      </main>
    </div>
  );
}

function AnalysisCard({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-8 rounded-3xl border border-white/70 bg-white/70 p-7 shadow-lg backdrop-blur-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        {title}
      </h2>

      {children}
    </motion.div>
  );
}

function RiskBadge({ severity }) {
  const styles = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-orange-100 text-orange-700",
    Low: "bg-emerald-100 text-emerald-700",
  };

  return (
    <span
      className={`rounded-full px-4 py-2 text-sm font-semibold ${
        styles[severity] || "bg-slate-100 text-slate-700"
      }`}
    >
      {severity || "Unknown"}
    </span>
  );
}

export default Analysis;