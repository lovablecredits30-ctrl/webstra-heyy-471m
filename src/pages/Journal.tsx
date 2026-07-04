import React from 'react';
import { Reveal } from '../components/Reveal';

export default function Journal() {
  const posts = [
    { date: "Oct 12, 2023", title: "The Case for Serif Typography in SaaS", cat: "Design" },
    { date: "Sept 24, 2023", title: "Micro-interactions and the paradox of choice", cat: "UX" },
    { date: "Aug 02, 2023", title: "Building an agency with a React Core", cat: "Engineering" }
  ];

  return (
    <div className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-20 whitespace-nowrap">The <span className="text-neutral-300 not-italic">Journal</span></h1>
        </Reveal>
        
        <div className="border-t border-black">
          {posts.map((post, idx) => (
            <Reveal key={idx} className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 border-b border-neutral-100 hover:bg-neutral-50 px-4 transition-colors">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase text-neutral-400">{post.date} — {post.cat}</span>
                <h3 className="text-3xl font-serif italic group-hover:translate-x-4 transition-transform duration-500">{post.title}</h3>
              </div>
              <button className="mt-6 md:mt-0 font-mono text-xs uppercase tracking-widest underline underline-offset-4">Read Article</button>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
