import React from 'react';
import { Reveal } from '../components/Reveal';

export default function Legal() {
  return (
    <div className="pt-40 pb-40 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h1 className="text-7xl md:text-9xl font-serif italic mb-20">Legal <span className="text-neutral-300 not-italic">Notes</span></h1>
        </Reveal>
        <div className="grid grid-cols-12 gap-12">
           <div className="col-span-12 md:col-span-4 font-mono text-xs uppercase tracking-widest text-neutral-400">
              Last updated: January 2024
           </div>
           <div className="col-span-12 md:col-span-8 space-y-12">
              <section>
                 <h2 className="text-3xl font-serif italic mb-4">Privacy Policy</h2>
                 <p className="text-neutral-500 leading-relaxed">Your privacy is paramount. We do not track you. We do not sell your data. We use only essential cookies required for the functionality of this site.</p>
              </section>
              <section>
                 <h2 className="text-3xl font-serif italic mb-4">Terms of Service</h2>
                 <p className="text-neutral-500 leading-relaxed">By accessing our site, you agree to respect the intellectual property of Webstra Studio and our clients. All work shown is protected by copyright.</p>
              </section>
           </div>
        </div>
      </div>
    </div>
  );
}
