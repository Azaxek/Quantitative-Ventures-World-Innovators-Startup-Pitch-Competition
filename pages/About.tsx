
import React from 'react';
import { Target, Users, Shield, History } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <header className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Our Mission</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Pioneering the intersection of quantitative analysis and humanitarian innovation to solve the world's most complex challenges.
          </p>
        </div>
      </header>

      {/* Core Values */}
      <section className="py-24 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Precision First</h3>
              <p className="text-slate-600 leading-relaxed">
                We believe that complex global issues require surgical, data-backed interventions rather than broad, unfocused efforts.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Radical Inclusion</h3>
              <p className="text-slate-600 leading-relaxed">
                Innovation knows no borders. Our program specifically supports founders from diverse backgrounds across America, South Asia, and the Middle East.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-cyan-600 rounded-2xl flex items-center justify-center text-white mb-8">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ethical Tech</h3>
              <p className="text-slate-600 leading-relaxed">
                We prioritize ventures that place human safety and data ethics at the core of their algorithmic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <History size={40} className="text-blue-600" />
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">A Journey of Innovation</h2>
          </div>

          <div className="space-y-12">
            {/* Timeline Item */}
            <div className="relative pl-12 border-l-4 border-blue-600 pb-12">
              <div className="absolute -left-3 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="text-blue-600 font-black text-3xl mb-4">2009</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Inception</h3>
              <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">
                Founded by a collective of mathematicians and venture capitalists in San Francisco, QVWI was born from the belief that quantitative finance techniques could be repurposed for identifying high-impact humanitarian startups.
              </p>
            </div>

            <div className="relative pl-12 border-l-4 border-slate-200 pb-12">
              <div className="absolute -left-3 top-0 w-5 h-5 bg-slate-300 rounded-full border-4 border-white"></div>
              <div className="text-slate-400 font-black text-3xl mb-4">2014</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Global Expansion</h3>
              <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">
                Recognizing untapped talent in South Asia, QVWI opened its first international application window for innovators in Nepal and India, leading to a record-breaking year of breakthrough medical-tech submissions.
              </p>
            </div>

            <div className="relative pl-12 border-l-4 border-slate-200 pb-12">
              <div className="absolute -left-3 top-0 w-5 h-5 bg-slate-300 rounded-full border-4 border-white"></div>
              <div className="text-slate-400 font-black text-3xl mb-4">2020</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Crisis Resilience</h3>
              <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">
                During the global pandemic, QVWI pivoted to a fully digital acceleration model, doubling its funding capacity to support startups working on rapid logistical responses and decentralized healthcare systems.
              </p>
            </div>

            <div className="relative pl-12 border-l-4 border-slate-200">
              <div className="absolute -left-3 top-0 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
              <div className="text-blue-600 font-black text-3xl mb-4">Present</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">The Next Frontier</h3>
              <p className="text-slate-600 text-lg max-w-4xl leading-relaxed">
                Today, with Aryav Agrawal leading our 2025 cohort, we are pushing the boundaries of Neural-Finance and AI-driven social engineering, ensuring that innovation remains a force for global stability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
