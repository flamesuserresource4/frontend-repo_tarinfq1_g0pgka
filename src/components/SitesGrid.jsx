import { motion } from "framer-motion";
import { ExternalLink, Link as LinkIcon } from "lucide-react";

export default function SitesGrid({ sites }) {
  return (
    <section id="worlds" className="relative py-20">
      <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_20%,rgba(186,230,253,0.35),rgba(167,243,208,0.25)_50%,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Portal Website Anda</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Semua proyek dan website Anda dalam satu tempat. Klik kartu untuk membuka di tab baru.
            </p>
          </div>
          <a href="#features" className="hidden sm:inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <LinkIcon className="h-4 w-4" /> Cara kerja
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site, idx) => (
            <motion.a
              key={site.url + idx}
              href={site.url}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 backdrop-blur shadow hover:shadow-xl transition"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div
                className="h-40 w-full"
                style={{
                  background: `linear-gradient(135deg, ${site.colors[0]}, ${site.colors[1]})`,
                }}
              />
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{site.title}</h3>
                  <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-slate-700 transition" />
                </div>
                <p className="mt-1 text-slate-600 text-sm">{site.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-600">
                  <span className="px-2 py-1 rounded-full bg-slate-100 border border-white/70">{new URL(site.url).hostname}</span>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/60" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
