import Image from "next/image";

export default function ComingSoon() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background accents */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-2xl text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative rounded-3xl bg-white/5 p-6 backdrop-blur-sm">
              <Image
                src="/logo.png"
                alt="Luso platform logo"
                width={140}
                height={140}
                priority
                className="opacity-90"
              />

              {/* Soft glow */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-cyan-400/20 to-emerald-400/20 blur-2xl" />
            </div>
          </div>

          {/* Brand name */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Luso
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl text-slate-300">
            Hire equipment. Discover specialised skills. Close deals smarter.
          </p>

          {/* Description */}
          <p className="text-base text-slate-400 max-w-xl mx-auto">
            Luso is a digital marketplace connecting equipment owners, skilled
            professionals, and businesses looking for reliable short-term or
            long-term solutions.
          </p>

          {/* Status badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-slate-300 backdrop-blur">
            🚧 Platform under development — launching soon
          </div>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="mailto:info@yourdomain.com"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 hover:opacity-90 transition"
            >
              Get in Touch
            </a>
          </div>

          {/* Footer */}
          <p className="pt-8 text-xs text-slate-500">
            © {new Date().getFullYear()} Luso. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
