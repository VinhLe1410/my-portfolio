'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

import { links } from '@/lib/data';

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 h-[4.5rem] w-full rounded-none 
                    border border-white/20 bg-white/25 
                    shadow-lg backdrop-blur-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-0 h-[4.5rem] w-full">
        <ul
          className="flex w-full items-center justify-center 
                        font-bold text-gray-500 gap-1"
        >
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full p-3 items-center justify-center 
                          hover:text-gray-950 transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
