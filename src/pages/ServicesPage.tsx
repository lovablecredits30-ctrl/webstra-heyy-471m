import React from 'react';
import { Reveal } from '../components/Reveal';

export default function ServicesPage() {
  const categories = [
    { title: "UI/UX Design", items: ["Design Systems", "Prototyping", "User Research", "Interface Design"] },
    { title: "Engineering", items: ["React / Next.js", "Type-safe APIs", "Performance Audits", "Infrastructure"] },
    { title: "Branding", items: ["Visual Identity", "Typography", "Art Direction", "Motion Design"] }
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-20 whitespace-nowrap">Excellence <span className="text-neutral-300 not-italic">as standard.</span></h1>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, idx) => (
            <Reveal key={idx} delay={idx * 150} className="border-t border-black pt-8">
              <span className="font-mono text-xs text-neutral-400 mb-8 block uppercase tracking-widest">0{idx + 1}</span>
              <h2 className="text-4xl font-serif italic mb-8">{cat.title}</h2>
              <ul className="space-y-4">
                {cat.items.map(item => (
                  <li key={item} className="flex items-center gap-3 text-neutral-500 hover:text-black transition-colors">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
