import React from 'react';
import { Reveal } from '../components/Reveal';

export default function Careers() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-20 whitespace-nowrap">Join the <span className="text-neutral-300 not-italic">Studio</span></h1>
        </Reveal>
        
        <div className="max-w-2xl mb-24">
          <p className="text-3xl leading-snug text-neutral-600 mb-8 font-serif italic"> We're always looking for obsessed designers and engineers who care about the details most people ignore.</p>
        </div>

        <div className="space-y-8">
           <Reveal className="p-8 border border-neutral-100 rounded-3xl flex justify-between items-center group hover:border-[#ff4d00]/20 transition-all cursor-pointer">
              <div>
                 <h3 className="text-2xl font-serif italic">Senior Frontend Engineer</h3>
                 <p className="text-neutral-400 font-mono text-[10px] uppercase mt-1">London / Remote • Full-time</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">→</div>
           </Reveal>
           <Reveal delay={100} className="p-8 border border-neutral-100 rounded-3xl flex justify-between items-center group hover:border-[#ff4d00]/20 transition-all cursor-pointer">
              <div>
                 <h3 className="text-2xl font-serif italic">Freelance Visual Designer</h3>
                 <p className="text-neutral-400 font-mono text-[10px] uppercase mt-1">Remote • Contract</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">→</div>
           </Reveal>
        </div>
      </div>
    </div>
  );
}
