
import React, { useState } from 'react';
import { Search, Filter, Trophy, Star, Award } from 'lucide-react';
import { WINNERS_DATA } from '../constants';

const Winners: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWinners = WINNERS_DATA.filter(w =>
    w.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.firstPlace.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.secondPlace.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    w.thirdPlace.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <header className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">Winners Archive</h1>
              <p className="text-xl text-slate-500 max-w-2xl">
                Celebrating excellence in innovation from 2009 to the present day.
              </p>
            </div>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search names or years..."
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Latest Winner (Only if not searching) */}
          {!searchTerm && (
            <div className="mb-20">
              <div className="flex items-center gap-2 mb-8 text-blue-600">
                <Star size={24} fill="currentColor" />
                <h2 className="text-2xl font-bold uppercase tracking-widest">Current Cohort</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Aryav Agrawal 1st Place Highlight */}
                <div className="md:col-span-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2.5rem] p-12 text-white shadow-2xl overflow-hidden relative group">
                  <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none transform translate-x-20 -translate-y-20 rotate-12">
                    <Trophy size={400} />
                  </div>
                  <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400"
                      alt="Aryav Agrawal"
                      className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-white/20 object-cover shadow-xl"
                    />
                    <div>
                      <div className="inline-block px-4 py-1.5 rounded-full bg-white text-blue-700 text-sm font-bold mb-4 uppercase">
                        2025–2026 First Place Winner
                      </div>
                      <h3 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Aryav Agrawal</h3>
                      <p className="text-xl text-blue-100 font-light mb-8 max-w-2xl leading-relaxed">
                        Funded $5,000 for <strong>Orbitonimics</strong>. Mapping impact for 3,000+ disaster regions and implementing 640 safety routes globally.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                          <span className="block text-blue-200 text-[10px] font-black uppercase mb-1">Company</span>
                          <span className="text-lg font-bold">Orbitonimics</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                          <span className="block text-blue-200 text-[10px] font-black uppercase mb-1">Impact</span>
                          <span className="text-lg font-bold">3,000+ Regions</span>
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
                          <span className="block text-blue-200 text-[10px] font-black uppercase mb-1">Focus</span>
                          <span className="text-lg font-bold">Business & Space</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Past Winners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWinners.map((winner, idx) => (
              <div key={winner.year} className={`bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 ${idx === 0 && !searchTerm ? 'hidden' : ''}`}>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-blue-600 font-black text-2xl">{winner.year}</span>
                  <Trophy className="text-slate-300" size={24} />
                </div>

                <div className="space-y-6">
                  {/* 1st Place */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 flex-shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <span className="block text-slate-400 text-[10px] font-black uppercase tracking-widest">1st Place • {winner.firstPlace.funding}</span>
                      <span className="text-lg font-bold text-slate-900">{winner.firstPlace.name}</span>
                    </div>
                  </div>

                  {/* 2nd Place */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 flex-shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <span className="block text-slate-400 text-[10px] font-black uppercase tracking-widest">2nd Place • {winner.secondPlace.funding}</span>
                      <span className="text-lg font-bold text-slate-900">{winner.secondPlace.name}</span>
                    </div>
                  </div>

                  {/* 3rd Place */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                      <Award size={20} />
                    </div>
                    <div>
                      <span className="block text-slate-400 text-[10px] font-black uppercase tracking-widest">3rd Place • {winner.thirdPlace.funding}</span>
                      <span className="text-lg font-bold text-slate-900">{winner.thirdPlace.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredWinners.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-2xl text-slate-400 font-bold">No winners found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Winners;
