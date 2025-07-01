'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  return (
    <section>
      <div id="intro-briefing" className="flex items-center justify-center p-2">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'tween',
            duration: 0.2,
          }}
        >
          <p className="text-2xl font-light !leading-[1.5] px-4">
            <span className="font-bold">Hello, I&apos;m Vinh. </span>
            I&apos;m a final-year{' '}
            <span className="font-bold">Computer Science student</span> majoring
            in <span className="font-bold">Data Science</span>, graduating this
            December.
          </p>
          <p className="text-2xl font-light !leading-[1.5] px-4">
            I&apos;m passionate about{' '}
            <span className="font-bold">full-stack web development</span>,{' '}
            <span className="font-bold">data visualization</span>, and{' '}
            <span className="font-bold">machine learning</span>, with experience
            in{' '}
            <span className="font-bold">
              TypeScript, JavaScript, SQL, and C++
            </span>
            .
          </p>
        </motion.div>
      </div>
      <div
        id="intro-links"
        className="flex flex-row gap-2 items-center justify-center text-lg"
      >
        <Link
          href="#contact"
          className="bg-gray-950 text-white px-6 py-3 rounded-4xl flex items-center gap-2
                          outline-none hover:scale-110 active:scale-105
                          transition"
        >
          Contact Me Here <BsArrowRight />
        </Link>
        <a
          className="bg-gray-100 px-6 py-3 rounded-4xl flex items-center gap-2
                        outline-none focus:scale-110 hover:scale-110 active:scale-105
                        transition cursor-pointer border border-black/10"
        >
          Download CV <HiDownload />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="bg-gray-100 text-gray-600 p-4 rounded-4xl flex items-center
                        outline-none focus:scale-110 hover:scale-110 active:scale-105
                        transition cursor-pointer border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/VinhLe1410"
          target="_blank"
          className="bg-gray-100 text-gray-600 p-4 rounded-4xl flex items-center
                        outline-none focus:scale-110 hover:scale-110 active:scale-105
                        transition cursor-pointer border border-black/10"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  );
}
