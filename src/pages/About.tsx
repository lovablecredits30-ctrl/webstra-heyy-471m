import React from 'react';
import { Reveal } from '../components/Reveal';

export default function About() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h1 className="text-7xl md:text-9xl font-serif italic mb-12">Fine craftsmanship <span className="not-italic text-neutral-300">for the digital world.</span></h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-2xl md:text-4xl leading-tight text-neutral-600 mb-20 max-w-3xl">
                Founded in 2021, Webstra is a small team of engineers and designers who believe that software should be as beautiful as it is functional.
              </p>
            </Reveal>
          </div>
          
          <div className="col-span-12 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 md:col-span-4 aspect-square overflow-hidden rounded-3xl">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
               <h3 className="text-3xl font-serif italic mb-6">Our Philosophy</h3>
               <p className="text-neutral-500 leading-relaxed mb-6">
                 We don't do generic. We don't do "good enough." We treat every project like a gallery piece, ensuring that every transition, every line of code, and every layout shift is intentional.
               </p>
               <p className="text-neutral-500 leading-relaxed">
                 Our studio operates on a model of deep focus. We only take on three projects at a time to ensure our partners get the absolute best of our creative energy.
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
