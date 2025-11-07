import { Gamepad2, ShoppingCart, User, Shield } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 grid place-items-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white">
            <Gamepad2 size={20} />
          </div>
          <span className="font-semibold text-slate-800 text-lg tracking-tight">
            TopUp Arcade
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#games" className="hover:text-slate-900 transition-colors">Games</a>
          <a href="#topup" className="hover:text-slate-900 transition-colors">Top Up</a>
          <a href="#security" className="hover:text-slate-900 transition-colors flex items-center gap-2">
            <Shield size={18} />
            Secure</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800">
            <ShoppingCart size={16} />
            Cart
          </button>
          <button className="p-2 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700" aria-label="Account">
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
