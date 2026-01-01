
import React from 'react';
import { Target, Users, Shield, History, Activity, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen pb-24 px-6 max-w-7xl mx-auto">
      <header className="mb-20 text-center" aria-labelledby="about-heading">
        <div className="nm-raised rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-white/5">
          <div className="relative z-10">
            <h1 id="about-heading" className="text-4xl md:text-7xl font-tech font-black uppercase text-white tracking-tighter mb-8 leading-tight">
              THE_COMPETITION_PROTOCOL
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light border-l-4 border-cyan-400 pl-6">
              The Quantitative Ventures World Innovators (QVWI) Startup Pitch Competition is a high-fidelity global stage for technical founders navigating the frontiers of space-tech and business logistics.
            </p>
          </div>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24" aria-label="Core mission values">
        <div className="nm-raised p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
          <div className="nm-inset p-5 rounded-2xl mb-8 border border-cyan-400/10">
            <Target className="text-cyan-400" size={32} />
          </div>
          <h2 className="text-2xl font-tech font-bold text-white mb-4 uppercase">Founder_Focused</h2>
          <p className="text-slate-500 font-light leading-relaxed">
            Prioritizing entrepreneurs with deep technical domain expertise in orbital logistics and high-frequency business systems.
          </p>
        </div>

        <div className="nm-raised p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
          <div className="nm-inset p-5 rounded-2xl mb-8 border border-magenta-500/10">
            <Users className="text-[#ff00ff]" size={32} />
          </div>
          <h2 className="text-2xl font-tech font-bold text-white mb-4 uppercase">Global_Stage</h2>
          <p className="text-slate-500 font-light leading-relaxed">
            Innovators from the Americas, South Asia, and the Middle East syncing with top-tier VC nodes for maximum scaling potential.
          </p>
        </div>

        <div className="nm-raised p-10 rounded-[2.5rem] border border-white/5 flex flex-col items-center text-center transition-transform hover:-translate-y-2">
          <div className="nm-inset p-5 rounded-2xl mb-8 border border-yellow-500/10">
            <ShieldCheck className="text-yellow-400" size={32} />
          </div>
          <h2 className="text-2xl font-tech font-bold text-white mb-4 uppercase">Seed_Injection</h2>
          <p className="text-slate-500 font-light leading-relaxed">
            Immediate seed funding deployment for winning pitches, ensuring critical projects like Orbitonimics never lose velocity.
          </p>
        </div>
      </section>

      <section className="nm-inset rounded-[4rem] p-12 md:p-20 border border-white/5" aria-labelledby="history-heading">
        <div className="flex items-center gap-6 mb-16">
          <div className="nm-raised p-4 rounded-2xl">
            <History size={32} className="text-[#00f3ff]" />
          </div>
          <h2 id="history-heading" className="text-3xl md:text-5xl font-tech font-black text-white tracking-tighter uppercase">
            PITCH_LEGACY_LOGS
          </h2>
        </div>

        <div className="space-y-16">
          <div className="relative pl-12 border-l-2 border-cyan-500/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 nm-raised rounded-full border border-cyan-400"></div>
            <div className="font-tech text-cyan-400 font-black text-2xl mb-4">INIT_2009</div>
            <h3 className="text-xl font-tech font-bold text-white mb-4 uppercase">Silicon_Valley_Origin</h3>
            <p className="text-slate-400 font-light leading-relaxed max-w-3xl">
              QVWI emerged as a technical pivot in San Francisco, merging quantitative mathematics with startup acceleration to bridge the gap between engineering and venture capital.
            </p>
          </div>

          <div className="relative pl-12 border-l-2 border-slate-800">
            <div className="absolute -left-[9px] top-0 w-4 h-4 nm-raised rounded-full border border-slate-700"></div>
            <div className="font-tech text-slate-500 font-black text-2xl mb-4">SYNC_CURRENT</div>
            <h3 className="text-xl font-tech font-bold text-white mb-4 uppercase">Global_Standard_Protocol</h3>
            <p className="text-slate-400 font-light leading-relaxed max-w-3xl">
              Today, the Quantitative Ventures World Innovators Startup Pitch Competition is a premiere global event, with alumni like Aryav Agrawal setting orbital standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
