import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0R0t1wWzjF9oQmZ0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full ring-1 ring-indigo-100">New</span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">Instant Game Top Ups</h1>
          <p className="mt-3 text-slate-600 text-lg">Top up your favorite games in seconds. Safe payments, automatic delivery, and best prices.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#topup" className="px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800">Start Top Up</a>
            <a href="#games" className="px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">Browse Games</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
