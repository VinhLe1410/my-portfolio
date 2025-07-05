'use client';

import React from 'react';
import { useState } from 'react';
import { technologies } from '@/lib/data';

export default function About() {
  const [category, setCategory] = useState<string>('Frontend');
  const [techToShow, setTechToShow] = useState<string[]>([]);

  function selectCategory(val: string) {
    setCategory(val);
    console.log('Switched to category ' + category);
  }

  return (
    <section id="about" className="flex flex-row m-16">
      <div className="w-64 flex-none flex flex-col m-4">
        {technologies.map((technology) => (
          <button
            key={technology.category}
            className="bg-gray-100 border border-black/10 m-1 py-3 rounded-full
                        items-center justify-center
                        focus:scale-110 focus:bg-gray-950 focus:text-white hover:scale-110 active:scale-105
                        transition cursor-pointer"
            onClick={() => selectCategory(technology.category)}
          >
            {technology.category}
          </button>
        ))}
      </div>
      <div className="flex-1 border border-gray-900">
        <p>List go here</p>
      </div>
    </section>
  );
}
