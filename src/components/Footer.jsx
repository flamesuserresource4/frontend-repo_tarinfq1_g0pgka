export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 border-t border-white/50 bg-white/60 backdrop-blur">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Teyvat Hub. Dibuat dengan rasa petualangan.
          </p>
          <div className="text-slate-600 text-sm">
            Terinspirasi oleh nuansa Genshin — warna segar, angin sepoi, langit cerah.
          </div>
        </div>
      </div>
    </footer>
  );
}
