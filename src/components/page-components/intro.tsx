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
            <span className="font-bold">Hello, my name is Vinh. </span>
            I&apos;m an{' '}
            <span className="font-bold">
              Undergraduate Computer Science student{' '}
            </span>
            majoring in <span className="font-bold">Data Science.</span>
          </p>
          <p className="text-2xl font-light !leading-[1.5] px-4">
            This is my portfolio website demonstrating some of my abilities
            using <span className="font-bold">NEXT.js</span>
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
          className="bg-gray-200 px-6 py-3 rounded-4xl flex items-center gap-2
                        outline-none focus:scale-110 hover:scale-110 active:scale-105
                        transition cursor-pointer"
        >
          Download CV <HiDownload />
        </a>
        <a
          className="bg-gray-200 text-gray-600 p-4 rounded-4xl flex items-center
                        outline-none focus:scale-110 hover:scale-110 active:scale-105
                        transition cursor-pointer"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-gray-200 text-gray-600 p-4 rounded-4xl flex items-center
                        outline-none focus:scale-110 hover:scale-110 active:scale-105
                        transition cursor-pointer"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  );
}
