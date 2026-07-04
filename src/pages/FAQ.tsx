import React from 'react';
import { Reveal } from '../components/Reveal';

export default function FAQ() {
  const faqs = [
    { q: "How long does a project take?", a: "Typically 8-12 weeks for an end-to-end product design and build." },
    { q: "What is your tech stack?", a: "We primarily work with React, Next.js, TypeScript, and Tailwind CSS for the frontend, and Node.js or Go for the backend." },
    { q: "Do you offer branding services?", a: "Yes, we often start our engagements with visual identity design to ensure a cohesive digital experience." }
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-20">Common <span className="text-neutral-300 not-italic">Questions</span></h1>
        </Reveal>
        <div className="max-w-3xl divide-y divide-neutral-100">
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 100} className="py-8 group cursor-pointer">
              <h3 className="text-2xl font-serif italic mb-4 group-hover:text-[#ff4d00]/80 transition-colors">Q: {f.q}</h3>
              <p className="text-neutral-500 leading-relaxed max-w-2xl">{f.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
