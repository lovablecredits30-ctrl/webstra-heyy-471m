import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative overflow-hidden py-12 border-y border-black/5 whitespace-nowrap mask-edge mb-12">
        <div className="flex animate-marquee font-serif italic text-7xl md:text-[10rem] text-neutral-200/50 gap-12 select-none uppercase">
          <span>Digital Excellence</span>
          <span>•</span>
          <span>Engineering Art</span>
          <span>•</span>
          <span>High Fidelity</span>
          <span>•</span>
          <span>Digital Excellence</span>
          <span>•</span>
          <span>Engineering Art</span>
          <span>•</span>
          <span>High Fidelity</span>
        </div>
      </div>
      <Services />
      <Testimonials />
      <CTA />
    </>
  );
}
