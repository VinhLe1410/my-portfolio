'use client'

import React from "react";
import { motion } from "motion/react";


export default function Intro() {
  return (
    <section>
      <div id="intro-briefing" className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2
          }}
        >
          The briefing should show up here in this section.
        </motion.div>
      </div>
      <div id="intro-links">
        {/* TODO */}
      </div>
    </section>
  )
}