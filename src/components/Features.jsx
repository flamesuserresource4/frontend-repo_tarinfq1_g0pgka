import { motion } from "framer-motion";
import { Sparkles, Shield, Rocket, Palette } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Interaktif & Halus",
    desc: "Animasi ringan yang terasa hidup tanpa mengganggu fokus pengunjung.",
  },
  {
    icon: Palette,
    title: "Warna Segar",
    desc: "Palet biru-emerald-lime yang terasa cerah dan tidak terlalu teknis.",
  },
  {
    icon: Shield,
    title: "Cepat & Aman",
    desc: "Dibangun dengan teknologi modern untuk performa dan stabilitas.",
  },
  {
    icon: Rocket,
    title: "Siap Terkembang",
    desc: "Mudah menambah lebih banyak website dan konten kapan pun.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Kenapa Teyvat Hub?</h2>
          <p className="mt-3 text-slate-600">
            Elemen fantasi yang elegan berpadu dengan desain modern. Rasakan pengalaman
            seperti berjelajah namun tetap fokus pada tujuan: membuka website Anda.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur p-6 shadow hover:shadow-lg transition"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-300 via-emerald-300 to-lime-200 grid place-items-center shadow">
                {<f.icon className="h-5 w-5 text-slate-900" />}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
