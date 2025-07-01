import React from 'react';
import { technologies } from '@/lib/data';

export default function About() {
  return (
    <section>
      <h1>About Me</h1>
      <p>
        Currently I&apos;m a student at Swinburne University of Technology,
        studying Bachelor of Computer Science. While my major is in Data
        Science, I have a strong interest in full-stack development and web
        development.
      </p>
      <div id="about-technologies" className="flex flex-row">
        <div id="about-technologies-selector" className="flex flex-col">
          {technologies.map((technology) => (
            <div key={technology.category} className="flex flex-row">
              <a>{technology.category}</a>
            </div>
          ))}
        </div>
        <div id="about-technologies-items" className="flex">
          {technologies.map((technology) => (
            <div key={technology.category}>
              {technology.items.map((item) => (
                <p key={`${technology.category}-${item}`}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
