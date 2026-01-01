
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ExternalLink, Globe, Cpu } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="pt-32 min-h-screen pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Info Column */}
        <div className="lg:col-span-5">
          <h1 className="text-4xl md:text-6xl font-tech font-black text-white mb-8 tracking-tighter leading-none uppercase">
            PITCH_DATA <br/><span className="text-[#00f3ff] text-glow-cyan">ENQUIRIES</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
            Direct your technical queries, eligibility checks, and partnership requests to the QVWI Organizing Nodes.
          </p>

          <div className="space-y-8 mb-16">
            <div className="flex items-center gap-6 group">
              <div className="nm-raised w-16 h-16 rounded-2xl flex items-center justify-center text-cyan-400 border border-white/5 transition-transform group-hover:scale-110">
                <Mail size={24} />
              </div>
              <div>
                <span className="block font-tech text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Comms_Sync</span>
                <a href="mailto:pitch@qvwi-innovators.org" className="text-lg font-tech font-bold text-white hover:text-cyan-400 transition-colors">PITCH@QVWI.IO</a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="nm-raised w-16 h-16 rounded-2xl flex items-center justify-center text-[#ff00ff] border border-white/5 transition-transform group-hover:scale-110">
                <Globe size={24} />
              </div>
              <div>
                <span className="block font-tech text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Global_Hub</span>
                <span className="text-lg font-tech font-bold text-white">PALO_ALTO_GRID, CA</span>
              </div>
            </div>
          </div>

          <div className="nm-inset p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-xl font-tech font-bold mb-4 flex items-center gap-2 text-white">
                <Cpu className="text-cyan-400" size={20} /> DECK_REVIEW_API
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Join our pre-pitch synchronization workshops for deep-dive technical reviews of your business model.
              </p>
              <button className="flex items-center gap-2 text-cyan-400 font-tech font-bold text-xs uppercase hover:underline">
                Register_Workshop <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <div className="nm-raised rounded-[4rem] p-10 md:p-16 border border-white/5">
            <h3 className="text-2xl font-tech font-black text-white mb-10 uppercase tracking-widest underline decoration-cyan-500 underline-offset-8">SEND_DATA_PACKET</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block font-tech font-bold uppercase text-[10px] mb-3 text-slate-500 tracking-widest">Identify_Yourself</label>
                <input
                  required
                  type="text"
                  className="w-full nm-inset p-5 rounded-2xl font-tech text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-white/5"
                  placeholder="FULL_NAME"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-tech font-bold uppercase text-[10px] mb-3 text-slate-500 tracking-widest">Return_Address</label>
                <input
                  required
                  type="email"
                  className="w-full nm-inset p-5 rounded-2xl font-tech text-white focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-white/5"
                  placeholder="WORK_EMAIL"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-tech font-bold uppercase text-[10px] mb-3 text-slate-500 tracking-widest">Message_Body</label>
                <textarea
                  required
                  className="w-full nm-inset p-5 rounded-2xl font-tech text-white h-48 resize-none focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-white/5"
                  placeholder="ENQUIRY_DETAILS..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`w-full p-8 rounded-[2.5rem] font-tech font-black text-xl transition-all flex items-center justify-center gap-4 ${
                  sent 
                    ? 'nm-inset text-green-400 border border-green-500/20' 
                    : 'nm-btn text-[#00f3ff] border border-cyan-500/30 uppercase tracking-widest'
                }`}
              >
                {sent ? 'PACKET_DEBUTED_SUCCESS' : (
                  <>EXECUTE_SEND <Send size={24} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
