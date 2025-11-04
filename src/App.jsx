import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SitesGrid from "./components/SitesGrid";
import Features from "./components/Features";

export default function App() {
  const sites = [
    {
      title: "Portfolio Utama",
      description: "Profil profesional dan karya terbaru.",
      url: "https://example.com",
      colors: ["#7dd3fc", "#86efac"], // sky-300 to green-300
    },
    {
      title: "Blog Pribadi",
      description: "Cerita, tips, dan catatan perjalanan.",
      url: "https://example.org",
      colors: ["#99f6e4", "#bef264"], // teal-200 to lime-300
    },
    {
      title: "Toko Mini",
      description: "Koleksi digital dan merchandise.",
      url: "https://store.example.com",
      colors: ["#a7f3d0", "#bae6fd"], // emerald-200 to sky-200
    },
    {
      title: "Galeri Proyek",
      description: "Eksperimen dan proyek open source.",
      url: "https://projects.example.com",
      colors: ["#bfdbfe", "#bbf7d0"], // blue-200 to green-200
    },
    {
      title: "Channel Video",
      description: "Tutorial dan dokumentasi visual.",
      url: "https://videos.example.com",
      colors: ["#86efac", "#fde68a"], // green-300 to amber-200
    },
    {
      title: "Landing Campaign",
      description: "Halaman promosi khusus dan event.",
      url: "https://campaign.example.com",
      colors: ["#bae6fd", "#a7f3d0"], // sky-200 to emerald-200
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50 text-slate-900">
      <Navbar />
      <Hero />
      <SitesGrid sites={sites} />
      <Features />

      <footer className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-slate-600">
          <p>
            Dibuat dengan nuansa fantasi yang segar. Siap menjadi portal ke semua website Anda.
          </p>
        </div>
      </footer>
    </div>
  );
}
