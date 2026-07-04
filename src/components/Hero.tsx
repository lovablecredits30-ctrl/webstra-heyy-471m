import React from 'react';
import { Minus } from 'lucide-react';
import { Reveal } from './Reveal';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-y-12 items-end">
        
        <div className="col-span-12 lg:col-span-10">
          <Reveal delay={100}>
            <div className="flex items-center gap-4 mb-8 text-neutral-400 font-mono text-xs uppercase tracking-[0.2em]">
              <Minus className="w-10 text-black" />
              <span>Digital Design & Dev Agency</span>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-[clamp(3.5rem,10vw,8.5rem)] font-serif italic mb-12">
              Elevating code to <br />
              <span className="not-italic text-neutral-400">editorial status.</span>
            </h1>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-8 items-start">
          <Reveal delay={300} className="col-span-12 md:col-span-6">
            <p className="text-xl md:text-2xl text-neutral-500 leading-tight">
              We partner with ambitious founders to build high-performance products that feel like a physical magazine.
            </p>
          </Reveal>
          
          <Reveal delay={400} className="col-span-12 md:col-span-6 flex flex-col gap-6">
            <div className="flex gap-12 font-mono text-[10px] uppercase tracking-tighter text-neutral-400">
              <div>
                <span className="block text-black mb-1">Location</span>
                London / Remote
              </div>
              <div>
                <span className="block text-black mb-1">Availability</span>
                Q4 — 2 slots left
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={500} className="col-span-12 mt-12 w-full">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl shadow-black/5">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=2000&auto=format&fit=crop" 
              alt="Studio space"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
