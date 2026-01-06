import React from 'react';
import { Trophy, Info, Star, Award } from 'lucide-react';

const Winners: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-20">
        <div className="nm-raised rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/5">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-8xl font-tech font-black uppercase text-white tracking-tighter mb-8 leading-none">
              2025_SUMMIT
            </h1>
            <p className="text-xl text-cyan-400 font-tech uppercase tracking-widest">
              Global_Innovation_Protocol_Complete
            </p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Blurb Section */}
        <div className="lg:col-span-12 xl:col-span-7 nm-raised p-10 md:p-16 rounded-[3rem] border border-white/5 space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="nm-inset p-4 rounded-2xl border border-cyan-400/20">
              <Info className="text-cyan-400" size={32} />
            </div>
            <h2 className="text-3xl font-tech font-black text-white uppercase tracking-tighter">THE_PROTOCOL</h2>
          </div>

          <div className="space-y-6 text-slate-400 font-light leading-relaxed text-lg">
            <p>
              The 2025 Quantitative Ventures World Innovators Startup Pitch Competition served as a high-fidelity global stage for technical founders navigating the frontiers of space-tech and high-stakes business systems.
            </p>
            <p>
              Our mission is to identify and accelerate entrepreneurs with deep domain expertise, bridging the gap between advanced engineering and venture capital injection. The 2025 competition results saw record participation, with over 600 global nodes syncing from major tech hubs across the Americas, South Asia, and the Middle East.
            </p>
            <p>
              As we archive this year's successes, we transition focus toward the 2026 synchronization event, maintaining our commitment to founders who prioritize technological depth and scalable architectural integrity.
            </p>
          </div>

          <div className="pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Trophy className="text-[#00f3ff] glow-cyan" size={24} />
              <div>
                <h4 className="font-tech font-bold text-white uppercase text-xs">SEED_ALGORITHMS_EXECUTED</h4>
                <p className="text-[10px] text-slate-500 font-tech">Aggregate capital injection for 2025 competition results finalized.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Winners Section */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-8">
          <div className="nm-raised p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="nm-inset p-3 rounded-xl">
                  <Award className="text-[#ff00ff] glow-magenta" size={24} />
                </div>
                <span className="font-tech font-black text-white uppercase tracking-widest text-lg">2025_COMPETITION_RESULTS</span>
              </div>

              <div className="space-y-8">
                {/* First Place */}
                <div className="nm-inset p-6 rounded-[2rem] border-2 border-cyan-500/20 relative">
                  <div className="absolute top-4 right-4 nm-raised p-2 rounded-lg">
                    <Star className="text-yellow-400" size={16} fill="currentColor" />
                  </div>
                  <div className="font-tech text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-2">01_ALPHA_ALLOCATION</div>
                  <h3 className="text-2xl font-tech font-black text-white mb-1">Aryav Agrawal</h3>
                  <p className="text-sm text-slate-400 font-light">$5,000 SEED_DEPLOYED</p>
                </div>

                {/* Second Place */}
                <div className="nm-inset p-6 rounded-[2rem] border border-white/5 opacity-80">
                  <div className="font-tech text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">02_BETA_SYNC</div>
                  <h4 className="text-xl font-tech font-bold text-slate-300 mb-1">Ishan Jha</h4>
                  <p className="text-xs text-slate-500 font-light">$2,000 SEED_DEPLOYED</p>
                </div>

                {/* Third Place */}
                <div className="nm-inset p-6 rounded-[2rem] border border-white/5 opacity-60">
                  <div className="font-tech text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">03_GAMMA_NODE</div>
                  <h4 className="text-lg font-tech font-bold text-slate-400 mb-1">Navya Singh</h4>
                  <p className="text-xs text-slate-600 font-light">$500 SEED_DEPLOYED</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
