import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Journal', path: '/journal' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] px-6 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:bg-[#ff4d00] transition-colors">
              <span className="text-white font-serif italic text-2xl font-light -mt-1">w</span>
            </div>
            <span className="font-mono text-xs uppercase tracking-widest font-medium">webstra.v3</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:flex items-center gap-2 bg-white border border-black/10 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-all shadow-sm">
              Start a project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 bg-white border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all z-[70] relative"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Overlay Menu */}
      <div className={`fixed inset-0 bg-white z-[55] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="h-full flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-6xl md:text-8xl font-serif italic hover:text-[#ff4d00] transition-colors ${location.pathname === link.path ? 'text-[#ff4d00]' : 'text-neutral-300'}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col justify-end gap-12 pb-12">
              <div className="space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">Socials</p>
                <div className="flex flex-wrap gap-8 text-xl font-serif italic">
                  <a href="#">Twitter</a>
                  <a href="#">Instagram</a>
                  <a href="#">Dribbble</a>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">Inquiries</p>
                <a href="mailto:hello@webstra.studio" className="text-2xl font-serif italic underline">hello@webstra.studio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
