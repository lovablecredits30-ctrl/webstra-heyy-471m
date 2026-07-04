import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-serif italic tracking-tight">
          Webstra<span className="text-[#ff4d00]">.</span>
        </NavLink>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {['Work', 'Services', 'Process', 'Journal', 'About'].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-[#ff4d00]",
                  isActive ? "text-white" : "text-neutral-400"
                )
              }
            >
              {item}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-[#ff4d00] hover:text-white transition-all"
          >
            Get in touch
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4">
          {['Work', 'Services', 'Process', 'Journal', 'About'].map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif"
            >
              {item}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 text-center rounded-xl bg-[#ff4d00] text-white font-medium"
          >
            Get in touch
          </NavLink>
        </div>
      )}
    </nav>
  );
}
