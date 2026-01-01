
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Zap, Globe, Cpu } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse"></div>
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 animate-bounce">
            Official Competition 2025–2026
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight leading-tight">
            Quantitative <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Ventures</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Empowering the next generation of world innovators through data-driven investment and breakthrough technological research.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              Register Now <ArrowRight size={20} />
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-10 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-lg transition-all border border-slate-700"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">$250K+</h3>
              <p className="text-slate-500 font-medium">Global Funding Distributed</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
              <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6">
                <Cpu size={24} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">15+</h3>
              <p className="text-slate-500 font-medium">Years of Innovation</p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
              <div className="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center text-white mx-auto mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-4xl font-black text-slate-900 mb-2">500+</h3>
              <p className="text-slate-500 font-medium">Alumni Startups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Winner Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Latest Winner Spotlight</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/5 h-full relative group">
              <img
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=800"
                alt="Aryav Agrawal Orbitonimics"
                className="w-full h-[400px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="text-yellow-400" />
                  <span className="text-white font-bold uppercase tracking-wider text-sm">2025–2026 First Place</span>
                </div>
                <h3 className="text-4xl font-bold text-white">Aryav Agrawal</h3>
              </div>
            </div>
            <div className="lg:w-3/5 p-8 md:p-16">
              <div className="inline-block px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-bold mb-6">
                Awarded $5,000 Funding
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight">Project: Orbitonimics</h4>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Aryav Agrawal founded <strong>Orbitonimics</strong> to revolutionize disaster management through high-precision space data. The venture has built satellite impact maps for 3,000+ disaster-prone regions and developed 640 critical safety routes across public buildings in 3 countries, bridging the gap between aerospace technology and community business resilience.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <span className="block text-slate-400 text-xs font-bold uppercase mb-1">Safety Routes</span>
                  <span className="text-2xl font-black text-slate-900">640 Active</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <span className="block text-slate-400 text-xs font-bold uppercase mb-1">Market Reach</span>
                  <span className="text-2xl font-black text-slate-900">3 Countries</span>
                </div>
              </div>
              <Link to="/winners" className="text-blue-600 font-bold flex items-center gap-2 group">
                View All Past Winners <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            Ready to Build the Future?
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12">
            Applications for the 2026 Fall Cohort are now open. Join a network of world-class innovators and secure your initial seed funding.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register" className="px-12 py-5 bg-white text-blue-600 rounded-xl font-black text-xl hover:bg-blue-50 transition-all">
              Apply Today
            </Link>
            <Link to="/contact" className="px-12 py-5 bg-blue-700 text-white rounded-xl font-black text-xl hover:bg-blue-800 transition-all border border-blue-500">
              Get Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
