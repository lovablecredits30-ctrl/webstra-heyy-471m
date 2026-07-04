import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12 pb-24 border-b border-black/5">
          <div className="col-span-12 md:col-span-6">
            <Link to="/" className="font-serif italic text-4xl mb-8 block">webstra®</Link>
            <p className="max-w-xs text-neutral-500 text-sm leading-relaxed">
              Operating at the intersection of high-fidelity design and world-class engineering. Available worldwide.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-black mb-6">Directory</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link to="/work" className="hover:text-black transition-colors">Selected Work</Link></li>
              <li><Link to="/about" className="hover:text-black transition-colors">Our Story</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">Capabilities</Link></li>
              <li><Link to="/process" className="hover:text-black transition-colors">Methodology</Link></li>
              <li><Link to="/journal" className="hover:text-black transition-colors">Journal</Link></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-black mb-6">Connect</h4>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-black transition-colors">Careers</Link></li>
              <li><Link to="/faq" className="hover:text-black transition-colors">FAQ</Link></li>
              <li><Link to="/legal" className="hover:text-black transition-colors">Legal</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Twitter (X)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6 font-mono text-[9px] uppercase tracking-widest text-neutral-400">
          <div>© 2024 Webstra Studio. All rights reserved.</div>
          <div className="flex gap-8">
            <Link to="/legal">Privacy Policy</Link>
            <Link to="/legal">Terms</Link>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              System Status: Active
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
