'use client';

import React from 'react';
import { useState, useMemo } from 'react';
import { technologies } from '@/lib/data';

export default function Skills() {
  const [category, setCategory] = useState<string>('Frontend');

  // Automatically compute displayed technologies when category changes
  const displayedTech = useMemo(() => {
    const foundTechnology = technologies.find(
      (technology) => technology.category === category
    );
    return foundTechnology ? [...foundTechnology.items] : [];
  }, [category]);

  function filterCategory(selectedCategory: string) {
    setCategory(selectedCategory);
    console.log('Switched to category ' + selectedCategory);
  }

  return (
    <section
      id="skills"
      className="flex flex-row justify-center items-center m-16"
    >
      <div className="flex flex-row">
        <div className="w-75 flex-none flex flex-col m-4">
          {technologies.map((technology) => (
            <button
              key={technology.category}
              className={`bg-gray-100 border border-black/10 m-1 py-3 rounded-full
                          items-center justify-center
                          focus:scale-110 focus:bg-gray-950 focus:text-white hover:scale-110 active:scale-105
                          transition cursor-pointer ${
                            technology.category === category
                              ? 'bg-gray-950 text-white'
                              : ''
                          }`}
              onClick={() => filterCategory(technology.category)}
            >
              {technology.category}
            </button>
          ))}
        </div>
        <div className="flex-1">
          <div className="flex flex-row">
            {displayedTech.map((tech) => (
              <div
                key={tech}
                className="bg-gray-100 border border-black/10 m-1 py-3 px-7 rounded-full
                          items-center justify-center
                          focus:scale-110 focus:bg-gray-950 focus:text-white hover:scale-110 active:scale-105
                          transition cursor-pointer"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
