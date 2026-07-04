import React from 'react';
import { Reveal } from '../components/Reveal';

const PROJECTS = [
  {
    title: "Lumi Health",
    category: "Product Design",
    year: "2023",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop"
  },
  {
    title: "Vortex Labs",
    category: "Fullstack Dev",
    year: "2023",
    img: "https://images.unsplash.com/photo-1614850523296-e8c041de4398?w=1200&auto=format&fit=crop"
  },
  {
    title: "Elysium Real Estate",
    category: "Branding / Web",
    year: "2024",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop"
  },
  {
    title: "Sequence Protocol",
    category: "Blockchain UX",
    year: "2024",
    img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop"
  }
];

export default function Work() {
  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-20 whitespace-nowrap">Selected <span className="text-neutral-300 not-italic">Works</span></h1>
        </Reveal>
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {PROJECTS.map((project, idx) => (
            <Reveal key={idx} delay={idx * 100} className="col-span-12 md:col-span-6 group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex justify-between items-end border-b border-black/5 pb-4">
                <div>
                  <h3 className="text-2xl font-serif italic mb-1">{project.title}</h3>
                  <p className="text-xs font-mono uppercase text-neutral-400 tracking-widest">{project.category}</p>
                </div>
                <span className="font-mono text-xs">{project.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
