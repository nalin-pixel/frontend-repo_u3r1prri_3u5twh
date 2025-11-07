import { useState } from 'react';
import { Search, Star } from 'lucide-react';

const GAMES = [
  { id: 'mlbb', name: 'Mobile Legends', genre: 'MOBA', rating: 4.7, image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2069&auto=format&fit=crop' },
  { id: 'genshin', name: 'Genshin Impact', genre: 'RPG', rating: 4.8, image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2069&auto=format&fit=crop' },
  { id: 'codm', name: 'Call of Duty: Mobile', genre: 'Shooter', rating: 4.6, image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=2069&auto=format&fit=crop' },
  { id: 'valorant', name: 'Valorant', genre: 'Shooter', rating: 4.7, image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2069&auto=format&fit=crop' },
  { id: 'pubg', name: 'PUBG Mobile', genre: 'Battle Royale', rating: 4.5, image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2069&auto=format&fit=crop' },
  { id: 'freefire', name: 'Free Fire', genre: 'Battle Royale', rating: 4.3, image: 'https://images.unsplash.com/photo-1761395013890-49090392ff0f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNb2JpbGUlMjBMZWdlbmRzfGVufDB8MHx8fDE3NjI1MDAwNzN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

function GameGrid({ onSelect }) {
  const [query, setQuery] = useState('');

  const filtered = GAMES.filter(g => g.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id="games" className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Popular Games</h2>
          <div className="relative w-72 hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search games..."
              className="w-full pl-10 pr-3 py-2 rounded-md border border-slate-300 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((g) => (
            <button key={g.id} onClick={() => onSelect(g)} className="text-left group rounded-xl overflow-hidden bg-white border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img src={g.image} alt={g.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900">{g.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm font-medium text-slate-700">{g.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-500">{g.genre}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GameGrid;
