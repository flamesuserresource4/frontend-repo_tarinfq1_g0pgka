import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_60%_at_50%_0%,rgba(125,211,252,0.45),rgba(16,185,129,0.25)_40%,rgba(217,249,157,0.25)_70%,transparent)]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-sky-300/30 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-slate-700 shadow border border-white/40">
            <Star className="h-3.5 w-3.5 text-amber-500" />
            Terinspirasi nuansa Genshin — segar dan penuh petualangan
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Bangun Gerbang ke Dunia Anda
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-xl">
            Satu halaman elegan untuk menampung semua website Anda. Animasi halus,
            warna segar, dan nuansa fantasi—siap memandu pengunjung menjelajah.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#worlds"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-5 py-3 shadow hover:shadow-lg transition"
            >
              Jelajahi Website
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 backdrop-blur px-5 py-3 text-slate-900 hover:bg-white hover:shadow transition"
            >
              Lihat Fitur
            </a>
          </div>
        </div>

        {/* Interactive card mock with parallax */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            whileHover={{ rotateX: 5, rotateY: -5 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="group perspective-1000"
          >
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-xl p-6">
              <div className="h-56 rounded-xl bg-gradient-to-br from-sky-300 via-emerald-300 to-lime-200 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-30"
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop')", backgroundSize: "150%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-xs">Contoh Dunia</p>
                    <p className="text-white font-semibold">Portal Interaktif</p>
                  </div>
                  <a href="#worlds" className="text-white/90 text-sm underline">Buka</a>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-16 rounded-lg bg-slate-100 border border-white/70" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
