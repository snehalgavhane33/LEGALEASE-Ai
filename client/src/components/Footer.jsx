function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-100 bg-gradient-to-br from-[#eef9ff] via-[#e6f5ff] to-[#dff1ff]">

      <div className="absolute -left-24 top-0 h-60 w-60 rounded-full bg-cyan-300/20 blur-[100px]" />

      <div className="absolute -right-24 bottom-0 h-60 w-60 rounded-full bg-blue-400/20 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-8 py-14">

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* Logo */}
<div>
  <h2 className="text-3xl font-bold text-slate-900">
    LegalEase
    <span className="text-blue-600"> AI</span>
  </h2>

  <p className="mt-4 max-w-sm leading-7 text-slate-600">
    AI-powered legal document analysis that helps users understand
    contracts quickly, securely and confidently.
  </p>
</div>


{/* Quick Links */}
<div className="md:ml-16">
  <h3 className="text-xl font-semibold text-slate-900">
    Quick Links
  </h3>

  <div className="mt-5 space-y-3 text-slate-600">
    <a href="#home" className="block hover:text-blue-600">
      Home
    </a>

    <a href="#features" className="block hover:text-blue-600">
      Features
    </a>

    <a href="#how-it-works" className="block hover:text-blue-600">
      How It Works
    </a>

    <a href="#contact" className="block hover:text-blue-600">
      Contact
    </a>
  </div>
</div>


{/* Connect */}
<div>
  <h3 className="text-xl font-semibold text-slate-900">
    Connect With Us
  </h3>

  <p className="mt-5 text-slate-600">
    support@legaleaseai.com
  </p>

  <p className="mt-3 text-slate-600">
    Pune, Maharashtra, India
  </p>

  <div className="mt-6 flex gap-3">
    <a
      href="#"
      className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-md hover:-translate-y-1 hover:text-blue-600"
    >
      GitHub
    </a>

    <a
      href="#"
      className="rounded-full bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-md hover:-translate-y-1 hover:text-blue-600"
    >
      LinkedIn
    </a>
  </div>
</div>
</div>


        {/* Bottom */}

        <div className="mt-12 border-t border-blue-100 pt-6 text-center text-sm text-slate-600">

          © 2026{" "}
          <span className="font-semibold text-slate-800">
            LegalEase AI
          </span>
          . All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;