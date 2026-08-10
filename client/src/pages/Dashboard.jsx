import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eef9ff] via-[#e1f4ff] to-[#d5edff]">

      {/* Header */}

      <header className="border-b border-white/70 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

          {/* Logo */}

          <a href="/" className="text-2xl font-bold text-slate-900">
            LegalEase <span className="text-blue-600">AI</span>
          </a>


          {/* Right Side */}

          <div className="flex items-center gap-5">

            {/* Language */}

            <div className="flex items-center gap-2">

              <span className="text-lg">
                🌐
              </span>

              <select
                className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 outline-none transition focus:border-blue-500"
              >
                <option>English</option>
                <option>मराठी</option>
                <option>हिन्दी</option>
                <option>தமிழ்</option>
                <option>తెలుగు</option>
                <option>বাংলা</option>
                <option>ગુજરાતી</option>
              </select>

            </div>


            {/* Profile */}

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 font-bold text-white">
              S
            </div>


            {/* Logout */}

            <button className="font-medium text-slate-600 transition hover:text-red-500">
              Logout
            </button>

          </div>

        </div>
      </header>


      {/* Main */}

      <main className="mx-auto max-w-7xl px-8 py-12">

        {/* Welcome */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <p className="font-semibold text-blue-600">
            DASHBOARD
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Welcome back, Snehal 👋
          </h1>

          <p className="mt-3 text-slate-600">
            Analyze your legal documents with AI and understand them with confidence.
          </p>

        </motion.div>


        {/* Upload */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 rounded-3xl border border-white/80 bg-white/70 p-8 shadow-[0_25px_70px_rgba(37,99,235,.12)] backdrop-blur-xl"
        >

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div>

              <h2 className="text-2xl font-bold text-slate-900">
                Analyze a New Document
              </h2>

              <p className="mt-2 text-slate-600">
                Upload a PDF or document and let AI analyze it for you.
              </p>

            </div>

            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              + Upload Document
            </button>

          </div>

        </motion.div>


        {/* Stats */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <StatCard
            title="Documents"
            value="12"
            description="Total documents"
          />

          <StatCard
            title="Health Score"
            value="82"
            description="Average document score"
          />

          <StatCard
            title="Risks Detected"
            value="5"
            description="Needs your attention"
          />

        </div>


        {/* Health + Risk */}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <DashboardCard title="Contract Health">

            <div className="flex items-center gap-8">

              <div className="flex h-32 w-32 items-center justify-center rounded-full border-[10px] border-blue-400 bg-white text-3xl font-bold text-blue-600 shadow-lg">
                82
              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  Good
                </h3>

                <p className="mt-2 leading-7 text-slate-600">
                  Your recent documents have a generally healthy risk profile.
                </p>

              </div>

            </div>

          </DashboardCard>


          <DashboardCard title="Risk Overview">

            <div className="space-y-5">

              <RiskRow
                label="High Risk"
                value="2"
                width="30%"
                bg="bg-red-400"
              />

              <RiskRow
                label="Medium Risk"
                value="4"
                width="55%"
                bg="bg-orange-400"
              />

              <RiskRow
                label="Low Risk"
                value="7"
                width="80%"
                bg="bg-emerald-400"
              />

            </div>

          </DashboardCard>

        </div>


        {/* Obligations + Dates */}

        <div className="mt-8 grid gap-8 lg:grid-cols-2">

          <DashboardCard title="My Obligations">

            <div className="space-y-4">

              <p className="rounded-xl bg-blue-50 p-4 text-slate-700">
                ✓ Submit required documents before the deadline.
              </p>

              <p className="rounded-xl bg-blue-50 p-4 text-slate-700">
                ✓ Provide 30 days written notice before termination.
              </p>

              <p className="rounded-xl bg-orange-50 p-4 text-slate-700">
                ⚠ Review renewal conditions before signing.
              </p>

            </div>

          </DashboardCard>


          <DashboardCard title="Important Dates">

            <div className="space-y-4">

              <DateRow
                date="15 Sept"
                text="Payment Due"
              />

              <DateRow
                date="01 Oct"
                text="Contract Renewal"
              />

              <DateRow
                date="30 Nov"
                text="Notice Deadline"
              />

            </div>

          </DashboardCard>

        </div>


        {/* Recent Documents */}

        <DashboardCard title="Recent Documents" className="mt-8">

          <div className="space-y-4">

            <DocumentRow
              name="Employment Contract"
              status="Analyzed"
              date="2 hours ago"
            />

            <DocumentRow
              name="Rental Agreement"
              status="Analyzed"
              date="Yesterday"
            />

            <DocumentRow
              name="NDA Agreement"
              status="Needs Review"
              date="2 days ago"
            />

          </div>

        </DashboardCard>

      </main>

    </div>
  );
}


/* ---------------- Components ---------------- */

function StatCard({ title, value, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-lg backdrop-blur-xl"
    >

      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-slate-900">
        {value}
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>

    </motion.div>
  );
}


function DashboardCard({ title, children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-white/70 bg-white/70 p-7 shadow-lg backdrop-blur-xl ${className}`}
    >

      <h2 className="mb-6 text-xl font-bold text-slate-900">
        {title}
      </h2>

      {children}

    </div>
  );
}


function RiskRow({ label, value, width, bg }) {
  return (
    <div>

      <div className="mb-2 flex justify-between text-sm">

        <span className="text-slate-600">
          {label}
        </span>

        <span className="font-semibold text-slate-900">
          {value}
        </span>

      </div>

      <div className="h-2 rounded-full bg-slate-100">

        <div
          className={`h-2 rounded-full ${bg}`}
          style={{ width }}
        />

      </div>

    </div>
  );
}


function DateRow({ date, text }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-blue-50 p-4">

      <div className="rounded-lg bg-white px-3 py-2 text-sm font-bold text-blue-600 shadow-sm">
        {date}
      </div>

      <span className="text-slate-700">
        {text}
      </span>

    </div>
  );
}


function DocumentRow({ name, status, date }) {
  return (
    <div className="flex flex-col justify-between gap-3 rounded-xl bg-white/70 p-4 md:flex-row md:items-center">

      <div>

        <h3 className="font-semibold text-slate-900">
          {name}
        </h3>

        <p className="text-sm text-slate-500">
          {date}
        </p>

      </div>

      <span
        className={`w-fit rounded-full px-4 py-2 text-sm font-medium ${
          status === "Analyzed"
            ? "bg-emerald-100 text-emerald-700"
            : "bg-orange-100 text-orange-700"
        }`}
      >
        {status}
      </span>

    </div>
  );
}

export default Dashboard;