import React from 'react';
import { Reveal } from './Reveal';

const SERVICES = [
  {
    number: "01",
    title: "Brand Architecture",
    desc: "Defining visual languages that speak with clarity and intent across every touchpoint.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "React Engineering",
    desc: "Bespoke frontend solutions built with React, Next.js, and a focus on atomic performance.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Product Strategy",
    desc: "Bridging the gap between creative vision and technical feasibility for venture-backed startups.",
    image: "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-serif italic max-w-xl">
            Selected services <span className="not-italic text-neutral-300">for the digital age.</span>
          </h2>
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            Capability — 002
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.number} delay={idx * 150} className="group cursor-crosshair">
              <div className="overflow-hidden rounded-xl aspect-[4/5] mb-8 bg-neutral-100">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="flex gap-4">
                <span className="font-mono text-[10px] text-neutral-400 mt-1">{service.number}</span>
                <div>
                  <h3 className="text-2xl mb-4">{service.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
