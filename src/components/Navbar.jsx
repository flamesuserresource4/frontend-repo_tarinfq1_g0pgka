import { Sparkles, Gamepad2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/60 dark:bg-slate-900/60 border-b border-white/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-sky-400 via-emerald-400 to-lime-300 grid place-items-center shadow-md">
            <Gamepad2 className="h-5 w-5 text-slate-900" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900 text-lg">Teyvat Hub</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#home" className="hover:text-slate-900 transition">Beranda</a>
          <a href="#worlds" className="hover:text-slate-900 transition">Website Saya</a>
          <a href="#features" className="hover:text-slate-900 transition">Fitur</a>
        </div>
        <a
          href="#worlds"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-emerald-400 to-lime-300 px-4 py-2 text-slate-900 font-medium shadow hover:shadow-lg transition"
        >
          <Sparkles className="h-4 w-4" />
          Jelajahi
        </a>
      </nav>
    </header>
  );
}
