
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Zap, Globe, Cpu, ChevronRight, Activity, Users, Map, Camera } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full nm-inset text-cyan-400 text-[10px] font-tech font-bold border border-cyan-400/10">
              <Activity size={14} className="animate-pulse" /> SYSTEM_ACTIVE: 2026
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full nm-inset text-[#ff00ff] text-[10px] font-tech font-bold border border-[#ff00ff]/10">
              <Users size={14} /> 600+_COMPETITORS_SYNCED
            </div>
          </div>
          <h1 className="text-5xl md:text-8xl font-tech font-extrabold leading-none mb-8 tracking-tighter text-white">
            QUANTUM <br />
            <span className="text-[#00f3ff] text-glow-cyan italic">VENTURES</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-slate-400 mb-12 leading-relaxed border-l-4 border-[#ff00ff]/30 pl-8 max-w-2xl">
            A high-fidelity stage for tech founders navigating space-logistics and business intelligence. Deploying seed capital to the 0.1% of world innovators.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link
              to="/register"
              className="nm-btn border border-cyan-500/30 p-6 px-12 rounded-3xl font-tech font-black text-xl text-[#00f3ff] uppercase flex items-center gap-3"
            >
              Launch_Pitch <ArrowRight />
            </Link>
            <Link
              to="/about"
              className="nm-raised border border-white/5 p-6 px-12 rounded-3xl font-tech font-black text-xl text-slate-300 uppercase flex items-center gap-3 hover:text-white"
            >
              Arch_Data
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="nm-raised rounded-[3rem] p-4 border border-white/10 rotate-3">
            <div className="relative overflow-hidden rounded-[2.5rem] h-80 md:h-[500px] border-2 border-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700 scale-110"
                alt="Cyber Earth"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b10] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 nm-inset p-4 rounded-2xl backdrop-blur-md border border-cyan-400/20">
                <p className="font-tech text-xs text-cyan-400 mb-1 font-bold">LATEST_SUMMIT</p>
                <p className="font-tech text-xl text-white font-black">2025_GLOBAL_FINALS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metric Dashboard */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { label: 'SEED_CAPITAL', val: '$500K+', icon: <Globe className="text-cyan-400" />, col: 'cyan' },
          { label: 'FOUNDER_NODES', val: '600+', icon: <Cpu className="text-magenta-400" />, col: 'magenta' },
          { label: 'VC_NETWORK', val: '50+', icon: <Zap className="text-yellow-400" />, col: 'yellow' }
        ].map((item) => (
          <div key={item.label} className="nm-raised rounded-3xl p-10 flex flex-col items-center border border-white/5">
            <div className="nm-inset p-4 rounded-2xl mb-6">
              {item.icon}
            </div>
            <h2 className="text-5xl font-tech font-black text-white mb-2">{item.val}</h2>
            <p className="font-tech text-xs tracking-widest text-slate-500 font-bold uppercase">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Featured Founder Spotlight */}
      <section className="mb-24">
        <div className="nm-raised rounded-[4rem] overflow-hidden flex flex-col lg:flex-row border border-white/5">
          <div className="lg:w-2/5 h-[400px] lg:h-auto relative">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover opacity-50 contrast-125"
              alt="Collaboration"
            />
            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay"></div>
          </div>
          <div className="lg:w-3/5 p-10 md:p-20 relative">
            <div className="inline-block px-4 py-1 rounded-full nm-inset border border-magenta-500/20 text-[#ff00ff] font-tech text-[10px] font-bold mb-6">
              PROTOCOL_OVERVIEW
            </div>
            <h3 className="text-4xl md:text-6xl font-tech font-black text-white mb-8 leading-tight">
              WORLD_INNO<span className="text-cyan-400">VATORS</span>
            </h3>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 font-light">
              The Quantitative Ventures World Innovators (QVWI) Startup Pitch Competition is a high-fidelity global stage designed to bridge the gap between technical mastery and venture capital. We seek founders who are redefining the frontiers of space-tech, AI, and business logistics through rigorous engineering and scalable architectural integrity.
            </p>

            {/* Enlarged 2025 Competition Image */}
            <div className="mb-12 group">
              <div className="nm-raised p-2 rounded-[2.5rem] border border-white/5 overflow-hidden">
                <div className="flex items-center gap-3 mb-4 px-6 pt-4">
                  <Camera className="text-[#ff00ff]" size={20} />
                  <span className="font-tech text-xs font-bold text-slate-500 uppercase tracking-widest text-[#ff00ff]">Live_Archive_2025</span>
                </div>
                <div className="rounded-[2rem] overflow-hidden nm-inset p-2 border border-white/10 relative">
                  <img
                    src="/image8.png"
                    alt="2025 Competition"
                    className="w-full h-[400px] object-cover rounded-[1.5rem] opacity-90 group-hover:opacity-100 transition-all duration-700 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
                <div className="mt-4 px-6 pb-4">
                  <p className="font-tech text-[10px] text-slate-600 uppercase leading-relaxed text-center">
                    Visual log: Networking terminal during the 2025 Global Finals sync.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="nm-inset p-6 rounded-3xl border border-white/5">
                <p className="font-tech text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-widest">Core_Value_01</p>
                <p className="text-2xl font-tech font-black text-[#00f3ff]">INNOVATION</p>
              </div>
              <div className="nm-inset p-6 rounded-3xl border border-white/5">
                <p className="font-tech text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-widest">Core_Value_02</p>
                <p className="text-2xl font-tech font-black text-[#ff00ff]">INTEGRITY</p>
              </div>
              <div className="nm-inset p-6 rounded-3xl border border-white/5">
                <p className="font-tech text-[10px] text-slate-500 mb-2 font-bold uppercase tracking-widest">Core_Value_03</p>
                <p className="text-2xl font-tech font-black text-yellow-400">VELOCITY</p>
              </div>
            </div>
            <Link to="/about" className="nm-btn inline-flex items-center gap-2 p-4 px-8 rounded-2xl font-tech font-bold text-xs text-white">
              LEARN_MORE <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="nm-inset rounded-[3rem] p-12 text-center border border-cyan-500/10 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-tech font-black text-white mb-8 tracking-tighter">
            SYNC YOUR <span className="text-[#00f3ff]">VISION</span>
          </h2>
          <p className="text-slate-400 font-tech text-lg mb-12 max-w-xl mx-auto opacity-70">
            Accepting data-driven pitches for the upcoming Q1 evaluation cycle.
          </p>
          <Link to="/register" className="nm-btn border border-cyan-500/20 bg-[#00f3ff]/5 p-6 px-16 rounded-3xl font-tech font-black text-2xl text-[#00f3ff] uppercase tracking-tighter hover:text-white transition-all">
            Execute_Upload
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
