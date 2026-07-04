import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: "Mesa Chair",
    category: "Object Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e277?w=1200&auto=format&fit=crop"
  },
  {
    title: "Vela Studio",
    category: "Visual Identity",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop"
  },
  {
    title: "Kinetic",
    category: "App Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?w=1200&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative px-6 pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-dot-grid">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[#ff4d00] mb-6 block">
                Digital & Visual Architect
              </span>
              <h1 className="text-6xl md:text-[clamp(4rem,10vw,8rem)] font-serif italic mb-8">
                Building refined digital <span className="text-neutral-500">experiences</span> for world-class brands.
              </h1>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <button className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform flex items-center gap-2">
              Start a project <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
              Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-neutral-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif italic mb-1">{project.title}</h3>
                  <p className="text-sm text-neutral-400 font-mono">{project.category}</p>
                </div>
                <span className="text-xs font-mono text-neutral-600 tracking-tighter">— {project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section - Breaking the grid */}
      <section className="bg-neutral-900 py-32 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
               <div className="aspect-square rounded-2xl overflow-hidden border border-white/5">
                 <img 
                   src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1000&auto=format&fit=crop" 
                   className="w-full h-full object-cover"
                   alt="Design space"
                 />
               </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:offset-1">
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Simplicity is the <br />ultimate sophistication.
              </h2>
              <p className="text-lg text-neutral-400 mb-10 leading-relaxed max-w-lg">
                We believe that the best solutions are often the ones that feel inevitable. By stripping away the noise, we allow the core essence of your brand to speak clearly.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
                <div>
                  <p className="font-mono text-xs text-[#ff4d00] uppercase mb-2">Strategy</p>
                  <p className="text-sm text-neutral-300">Formulating a unique market position through deep research.</p>
                </div>
                <div>
                  <p className="font-mono text-xs text-[#ff4d00] uppercase mb-2">Execution</p>
                  <p className="text-sm text-neutral-300">Meticulously crafting every pixel and interaction for impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
