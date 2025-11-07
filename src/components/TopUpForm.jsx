import { useEffect, useMemo, useState } from 'react';
import { CreditCard, CheckCircle2 } from 'lucide-react';

const PACKAGES = {
  mlbb: [
    { id: 'dm11', name: '11 Diamonds', price: 0.2 },
    { id: 'dm86', name: '86 Diamonds', price: 1.49 },
    { id: 'dm172', name: '172 Diamonds', price: 2.89 },
  ],
  genshin: [
    { id: 'prim60', name: '60 Primogems', price: 0.99 },
    { id: 'prim300', name: '300 Primogems', price: 4.99 },
    { id: 'prim980', name: '980 Primogems', price: 14.99 },
  ],
  codm: [
    { id: 'cp80', name: '80 CP', price: 0.99 },
    { id: 'cp420', name: '420 CP', price: 4.99 },
    { id: 'cp880', name: '880 CP', price: 9.99 },
  ],
  valorant: [
    { id: 'vp125', name: '125 VP', price: 1.49 },
    { id: 'vp475', name: '475 VP', price: 4.99 },
    { id: 'vp1000', name: '1000 VP', price: 9.49 },
  ],
  pubg: [
    { id: 'uc60', name: '60 UC', price: 0.99 },
    { id: 'uc325', name: '325 UC', price: 4.49 },
    { id: 'uc660', name: '660 UC', price: 8.49 },
  ],
  freefire: [
    { id: 'dm50', name: '50 Diamonds', price: 0.69 },
    { id: 'dm310', name: '310 Diamonds', price: 3.99 },
    { id: 'dm720', name: '720 Diamonds', price: 8.49 },
  ],
};

function currency(n) {
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n);
}

function TopUpForm({ selectedGame }) {
  const [userId, setUserId] = useState('');
  const [server, setServer] = useState('');
  const [packageId, setPackageId] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const options = useMemo(() => PACKAGES[selectedGame?.id] || [], [selectedGame]);
  const selected = options.find((o) => o.id === packageId);

  useEffect(() => {
    setPackageId(options[0]?.id || '');
  }, [options]);

  async function handleCheckout(e) {
    e.preventDefault();
    setProcessing(true);
    setSuccess(false);
    // Simulate checkout process
    await new Promise((r) => setTimeout(r, 1200));
    setProcessing(false);
    setSuccess(true);
  }

  if (!selectedGame) {
    return (
      <section id="topup" className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-xl border border-slate-200 bg-white text-slate-600">
            Select a game to begin your top up.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="topup" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-6 rounded-xl border border-slate-200 bg-white">
            <h3 className="text-lg font-semibold text-slate-900">{selectedGame.name} Top Up</h3>
            <p className="text-sm text-slate-500 mb-4">Enter your player details and choose a package.</p>
            <form onSubmit={handleCheckout} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Player ID</label>
                  <input value={userId} onChange={(e)=>setUserId(e.target.value)} required className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g., 12345678" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Server / Region</label>
                  <input value={server} onChange={(e)=>setServer(e.target.value)} required className="w-full px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g., Asia" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Choose Package</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {options.map((pkg)=> (
                    <label key={pkg.id} className={`cursor-pointer p-3 rounded-lg border ${packageId === pkg.id ? 'border-indigo-500 ring-2 ring-indigo-200 bg-indigo-50' : 'border-slate-300 bg-white'} `}>
                      <input type="radio" name="package" value={pkg.id} className="hidden" checked={packageId===pkg.id} onChange={()=>setPackageId(pkg.id)} />
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-slate-900">{pkg.name}</div>
                          <div className="text-sm text-slate-500">Instant delivery</div>
                        </div>
                        <div className="text-slate-900 font-semibold">{currency(pkg.price)}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <button disabled={processing} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
                <CreditCard size={18} />
                {processing ? 'Processing...' : 'Checkout'}
              </button>
            </form>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white">
            <h4 className="font-semibold text-slate-900 mb-2">Order Summary</h4>
            <ul className="text-sm text-slate-600 space-y-2 mb-4">
              <li className="flex justify-between"><span>Game</span><span className="font-medium text-slate-900">{selectedGame.name}</span></li>
              <li className="flex justify-between"><span>Player ID</span><span className="font-medium text-slate-900">{userId || '-'}</span></li>
              <li className="flex justify-between"><span>Server</span><span className="font-medium text-slate-900">{server || '-'}</span></li>
              <li className="flex justify-between"><span>Package</span><span className="font-medium text-slate-900">{selected?.name || '-'}</span></li>
            </ul>
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-slate-600">Total</span>
              <span className="text-xl font-bold text-slate-900">{selected ? currency(selected.price) : '$0.00'}</span>
            </div>

            {success && (
              <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-700 flex items-center gap-2">
                <CheckCircle2 size={18} />
                Payment successful! Your items will arrive shortly.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopUpForm;
