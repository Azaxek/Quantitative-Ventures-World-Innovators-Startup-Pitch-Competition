
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg text-white">
                <Rocket size={24} />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">QVWI</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Quantitative Ventures for World Innovators (QVWI) is a premier global competition fostering tech-driven solutions for the world's most pressing challenges.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link to={link.href} className="hover:text-blue-400 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Guidelines</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Selection Criteria</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Funding Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Past Winners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-500 mt-0.5" />
                <span>contact@qvwi-innovators.org</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-500 mt-0.5" />
                <span>+1 (555) 987-6543</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-500 mt-0.5" />
                <span>Silicon Valley Innovation Hub,<br />Palo Alto, CA 94301</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2025 Quantitative Ventures for World Innovators. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
