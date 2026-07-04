import React from 'react';
import { Quote } from 'lucide-react';
import { Reveal } from './Reveal';

const REVIEWS = [
  {
    text: "Webstra didn't just build our app; they gave our brand a soul. The attention to typography and whitespace is unlike any agency we've worked with.",
    author: "Elena Rossi",
    role: "Founder, Lumi",
    img: "https://i.pravatar.cc/80?img=32"
  },
  {
    text: "Technical excellence paired with a deep understanding of aesthetics. They are the 1% in the React ecosystem.",
    author: "Marcus Thorne",
    role: "CTO, Sequence",
    img: "https://i.pravatar.cc/80?img=12"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-white border-y border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-12">
          {REVIEWS.map((review, i) => (
            <Reveal 
              key={i} 
              delay={i * 200}
              className={`col-span-12 md:col-span-6 flex flex-col justify-between ${i === 1 ? 'md:mt-24' : ''}`}
            >
              <div>
                <Quote className="w-12 h-12 text-[#ff4d00]/10 mb-8" strokeWidth={1} />
                <p className="text-3xl md:text-4xl font-serif italic leading-tight mb-12">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={review.img} className="w-12 h-12 rounded-full grayscale" alt={review.author} />
                <div>
                  <div className="font-medium">{review.author}</div>
                  <div className="text-xs font-mono uppercase text-neutral-400 tracking-tighter">{review.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
