import React from 'react';
import { Reveal } from '../components/Reveal';

export default function Process() {
  const steps = [
    { name: "Discovery", desc: "Understanding the business logic and user narratives." },
    { name: "Architecture", desc: "Structuring the technical and visual foundation." },
    { name: "Crafting", desc: "Where the pixels meet the code in perfect harmony." },
    { name: "Polishing", desc: "Iterative refinement until it feels physical." }
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-32">The <span className="text-neutral-300 not-italic">Method.</span></h1>
        </Reveal>
        
        <div className="space-y-32">
          {steps.map((step, idx) => (
            <Reveal key={idx} className="grid grid-cols-12 gap-8 items-start">
               <div className="col-span-12 md:col-span-1 font-mono text-xs text-neutral-400">
                  [{idx + 1}]
               </div>
               <div className="col-span-12 md:col-span-5">
                  <h3 className="text-5xl font-serif italic">{step.name}</h3>
               </div>
               <div className="col-span-12 md:col-span-6">
                  <p className="text-2xl text-neutral-500 leading-relaxed font-light">
                    {step.desc} We don't skip steps; we lean into the complexity to find the most elegant simplicity.
                  </p>
               </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
