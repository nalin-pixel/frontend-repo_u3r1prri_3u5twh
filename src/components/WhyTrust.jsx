import { Shield, Lock, Sparkles, Timer } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="p-5 rounded-xl border border-slate-200 bg-white">
      <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 grid place-items-center mb-3">
        <Icon size={20} />
      </div>
      <h5 className="font-semibold text-slate-900">{title}</h5>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </div>
  );
}

function WhyTrust() {
  return (
    <section id="security" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-slate-900 mb-6">Why gamers trust us</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature icon={Shield} title="Secure Payments" desc="Industry-grade encryption and fraud protection for every transaction." />
          <Feature icon={Timer} title="Instant Delivery" desc="Items delivered to your account in seconds after payment." />
          <Feature icon={Lock} title="Account Safe" desc="No login required. We only need your player ID and server to top up." />
          <Feature icon={Sparkles} title="Best Prices" desc="Regular promos and competitive pricing across all games." />
        </div>
      </div>
    </section>
  );
}

export default WhyTrust;
