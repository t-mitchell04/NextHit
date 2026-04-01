export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400 mb-4">
          Coming Soon
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          NextHit
        </h1>

        <p className="text-lg md:text-xl text-zinc-300 mb-8">
          The next big hit starts here.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="rounded-2xl bg-white text-black px-6 py-3 font-semibold hover:bg-zinc-200 transition">
            Get Started
          </button>
          <button className="rounded-2xl border border-zinc-700 px-6 py-3 font-semibold hover:bg-zinc-900 transition">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}