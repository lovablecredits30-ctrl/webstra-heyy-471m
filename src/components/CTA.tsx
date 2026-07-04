import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export default function CTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="bg-black rounded-[2rem] md:rounded-[4rem] p-12 md:p-24 text-white text-center flex flex-col items-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] mb-8 text-neutral-500">
              Let's talk about your project
            </div>
            <h2 className="text-5xl md:text-8xl font-serif italic mb-12">
              Have an idea? <br />
              <span className="text-neutral-500">Let's execute it.</span>
            </h2>
            <a 
              href="mailto:hello@webstra.studio" 
              className="group relative flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full text-xl font-medium transition-all hover:pr-14"
            >
              hello@webstra.studio
              <ArrowRight className="w-6 h-6 absolute right-6 opacity-0 group-hover:opacity-100 transition-all" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
