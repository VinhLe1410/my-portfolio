'use client'

import React from "react"
import { motion } from "motion/react"

export default function Header() {
    return <header className="z-[999] relative">
        <motion.div className="fixed top-0 h-[4.5rem] w-full rounded-none 
                                border border-white/20 bg-white/25 
                                shadow-lg backdrop-blur-2xl"
            initial={{ y: -100, opacity: 0}}
            animate={{ y: 0, opacity: 1}}>
        </motion.div>
    </header>
}