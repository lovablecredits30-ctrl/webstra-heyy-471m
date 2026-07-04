import React from 'react';
import { Reveal } from '../components/Reveal';

export default function Contact() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-20 whitespace-nowrap">Say <span className="text-neutral-300 not-italic">Hello.</span></h1>
        </Reveal>
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-6">
             <form className="space-y-12">
                <div className="border-b border-black/10 py-4 focus-within:border-black transition-colors">
                   <label className="block font-mono text-[10px] uppercase text-neutral-400 mb-2">My name is</label>
                   <input type="text" placeholder="John Doe" className="w-full bg-transparent border-none outline-none text-2xl font-serif italic" />
                </div>
                <div className="border-b border-black/10 py-4 focus-within:border-black transition-colors">
                   <label className="block font-mono text-[10px] uppercase text-neutral-400 mb-2">My email is</label>
                   <input type="email" placeholder="john@company.com" className="w-full bg-transparent border-none outline-none text-2xl font-serif italic" />
                </div>
                <div className="border-b border-black/10 py-4 focus-within:border-black transition-colors">
                   <label className="block font-mono text-[10px] uppercase text-neutral-400 mb-2">I am interested in</label>
                   <input type="text" placeholder="Product Design & Development" className="w-full bg-transparent border-none outline-none text-2xl font-serif italic" />
                </div>
                <button className="bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#ff4d00] transition-colors">Send inquiry</button>
             </form>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 space-y-12">
             <div>
                <h4 className="font-mono text-[10px] uppercase text-neutral-400 mb-4">Direct</h4>
                <a href="mailto:hello@webstra.studio" className="text-2xl font-serif italic underline hover:text-[#ff4d00] transition-colors">hello@webstra.studio</a>
             </div>
             <div>
                <h4 className="font-mono text-[10px] uppercase text-neutral-400 mb-4">Socials</h4>
                <div className="flex flex-col gap-4 text-xl font-serif italic">
                   <a href="#" className="hover:text-[#ff4d00] transition-colors">Twitter (X)</a>
                   <a href="#" className="hover:text-[#ff4d00] transition-colors">Instagram</a>
                   <a href="#" className="hover:text-[#ff4d00] transition-colors">LinkedIn</a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
